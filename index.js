import axios from 'axios';
import { JSDOM } from 'jsdom';

export class ScraperClient {
  constructor() {
    console.log('ScraperClient initialized.');
  }

  async crawl({ url }) {
    console.log(`Starting to crawl URL: ${url}`);
    try {
      const response = await axios.get(url);
      console.log('Page content fetched successfully.');
      const pageContent = response.data;

      const extractedContent = this.extractTextFromHTML(pageContent);
      console.log('Text content extracted from HTML.');

      return extractedContent; // Return the extracted text instead of saving
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to crawl the URL');
    }
  }

  extractTextFromHTML(html) {
    console.log('Extracting text from HTML content...');
    
    const dom = new JSDOM(html);
    const document = dom.window.document;
  
    const unwantedTags = document.querySelectorAll('script, style, noscript');
    unwantedTags.forEach(tag => tag.remove());
  
    let markdownContent = '';
  
    document.body.querySelectorAll('*').forEach(element => {
      if (element.tagName.startsWith('H')) {
        const level = element.tagName.slice(1);
        markdownContent += `${'#'.repeat(level)} ${element.textContent.trim()}\n\n`;
      } else if (element.tagName === 'P') {
        markdownContent += `${element.textContent.trim()}\n\n\n`; // Extra newline for space
      } else if (element.tagName === 'A') {
        const href = element.href;
        const text = element.textContent.trim();
        markdownContent += `[${text}](${href})\n\n\n`; // Extra newline for space
      } else if (element.tagName === 'UL' || element.tagName === 'OL') {
        element.querySelectorAll('li').forEach((li, index) => {
          const prefix = element.tagName === 'OL' ? `${index + 1}. ` : '- ';
          markdownContent += `${prefix}${li.textContent.trim()}\n\n`; // Extra newline for space
        });
        markdownContent += `\n\n`; // Extra newline for space
      }
    });
  
    return markdownContent.trim();
  }
}
