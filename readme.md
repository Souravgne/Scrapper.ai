# Scrapper.ai

**Scrapper.ai** is a powerful Node.js library designed for efficient web scraping and text extraction. This library simplifies the extraction and conversion of web page content into structured markdown, making it ideal for generating LLM-ready data.

## Overview

Scrapper.ai offers a seamless way to fetch, process, and format web content using modern web scraping techniques. The library is completely free to use.

## Features

- **Web Page Fetching**: Efficiently retrieves web page content using Axios.
- **Text Extraction**: Extracts meaningful content from the raw HTML of web pages.
- **Structured Formatting**: Converts raw HTML into structured markdown-like text.
- **API Key-Free**: No longer requires API keys or dotenv configurations, making it easy to use on both Node.js and browser environments.

## Installation

To install Scrapper.ai, run:

```bash
npm install scrapper.ai

```
## Usage

Here's a basic example of how to use the `ScraperClient` class in react to scrape a web page and format its content:

```javascript
import { ScraperClient } from 'scrapper.ai'; 

(async () => {
  const client = new ScraperClient();

  try {
    const results = await client.crawl({
      url: "https://example.com", // Replace with the URL of the website to scrape
    });

    console.log(results); // Output the extracted text content
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

```

## Features Breakdown

- **Axios**: Scrapes the page content using HTTP requests.
- **JSDOM**: Parses the HTML content and removes unnecessary tags (like `<script>`, `<style>`, etc.).
- **Simple to Use**: No need for environment configuration or third-party APIs.


## Dependencies


- `axios`: `^1.7.7`
- `jsdom`: `^25.0.0`




## Live Demo

Explore a live demo of this library at [scrapperai.00004000.xyz](http://scrapperai.00004000.xyz).

## Contributing

This project is open source and welcomes contributions from the community. To contribute, please visit the [GitHub repository](https://github.com/Souravgne/Scrapper.ai).

## Contact

For any inquiries or support, please reach out to:

- **Name**: Sourav Dubey
- **Email**: [souravdubey754@gmail.com](mailto:souravdubey754@gmail.com)
- **LinkedIn**: [Sourav Dubey](https://www.linkedin.com/in/souravdubey)
- **GitHub**: [Souravgne](https://github.com/Souravgne/Scrapper.ai)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

