import pLimit from 'p-limit';
import axios from 'axios';
import crypto from 'crypto';
import { GoogleGenerativeAI } from '@google/generative-ai';

import dotenv from 'dotenv';
dotenv.config();

export class ScraperClient {
  constructor({ apiKey }) {
    // Initialize GoogleGenerativeAI with the API key
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    console.log('ScraperClient initialized with API key.');
  }
 

      
  async crawl({ url }) {
    console.log(`Starting to crawl URL: ${url}`);
    try {
      // Fetch the page content
      const response = await axios.get(url);
      console.log('Page content fetched successfully.');
      const pageContent = response.data;

      // Split the content into smaller chunks (adjust chunk size as necessary)
      const chunks = this.splitIntoChunks(pageContent, 100000); // 100,000 characters per chunk
      console.log(`Content split into ${chunks.length} chunks.`);
      
      // Set concurrency limit (5 concurrent requests)
      const limit = pLimit(5);

      const userMessage = `
You are a text extraction and formatting assistant. Your task is to extract all the visible text from a website in a way that it can generate LLM-ready data, removing all HTML tags and formatting it into plain text. The extracted text should retain the original content's structure and hierarchy, presented clearly and logically. Include headings, subheadings, and links appropriately to organize the content into a clean and readable markdown format. The extracted content should not include HTML tags, commentary, explanations, or extraneous information—just clean, structured markdown text.

The content of the page is:
`;

      console.log('Generating content for each chunk using the model...');
      // Process each chunk using the model in parallel with a limit on concurrency
      const promises = chunks.map((chunk, index) => {
        console.log(`Processing chunk ${index + 1}/${chunks.length}`);
        return limit(() => this.model.generateContent(`${userMessage}\n${chunk}\n\n${ `Extract only text from this website, not HTML elements, and return it in a structured markdown format ready for large language models.`}`));
      });

      // Await all promises to complete
      const results = await Promise.all(promises);
      console.log('All chunks processed. Combining results...');
      
      // Combine the generated content from all chunks
      const fullResponse = results.map(result => result.response.text()).join(' ');

      // Return the full combined response
      return fullResponse.trim();
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to crawl the URL');
    }
  }

  // Function to split large text into smaller chunks
  splitIntoChunks(text, chunkSize) {
    console.log(`Splitting text into chunks of size ${chunkSize}`);
    const chunks = [];
    let index = 0;
    while (index < text.length) {
      chunks.push(text.slice(index, index + chunkSize));
      index += chunkSize;
    }
    return chunks;
  }

  // Generate a filename from the URL using md5 hash (used for logging or reference)
  urlToFilename(url) {
    const filename = crypto.createHash('md5').update(url).digest('hex');
    console.log(`Generated filename from URL: ${filename}`);
    return filename;
  }
}
