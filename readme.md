# Scrapper.ai

**Scrapper.ai** is a powerful Node.js library designed for efficient web scraping and text formatting. Leveraging Google's Gemini 1.5 Pro model, this library simplifies the extraction and conversion of web page content into structured markdown, making it ideal for generating LLM-ready data.

## Overview

Scrapper.ai offers a seamless way to fetch, process, and format web content using advanced AI technologies. The library is completely free to use, and you can utilize your own Google Gemini API key for processing.

## Features

- **Web Page Fetching**: Efficiently retrieves web page content using Axios.
- **Chunk Processing**: Divides content into manageable chunks for optimized processing.
- **AI-Powered Formatting**: Converts raw text into well-structured markdown using Google's Gemini 1.5 Pro model.
- **Markdown Output**: Provides the formatted content in markdown format.

## Installation

To install Scrapper.ai, run:

```bash
npm install scrapper.ai

## Usage

Here's a basic example of how to use the `ScraperClient` class to scrape a web page and format its content:

```javascript
import { ScraperClient } from 'scrapper.ai'; // Ensure the correct package name

(async () => {
  const client = new ScraperClient({ apiKey: process.env.GOOGLE_API_KEY }); // Use an environment variable for the API key

  try {
    const results = await client.crawl({
      url: "Your URL",
    });

    console.log(results); // Output the generated markdown data
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```


## Scripts

- `test`: Placeholder script for testing.
- `build`: Transpiles source code using Babel (`babel src --out-dir lib`).
- `minify`: Minifies JavaScript files using Terser (`terser lib/*.js --compress --mangle --output lib/`).

## Dependencies

- `@google/generative-ai`: `^0.17.1`
- `axios`: `^1.7.7`
- `cheerio`: `^1.0.0`
- `dotenv`: `^16.4.5`
- `openai`: `^4.57.0`
- `p-limit`: `^6.1.0`

## DevDependencies

- `@babel/cli`: `^7.25.6`
- `@babel/preset-env`: `^7.25.4`
- `terser`: `^5.31.6`

## Live Demo

Explore a live demo of this library at [scrapperai.00004000.xyz](http://scrapperai.00004000.xyz).

## Contributing

This project is open source and welcomes contributions from the community. To contribute, please visit the [GitHub repository](https://github.com/Souravgne/Scrapper.ai).

## Contact

For any inquiries or support, please reach out to:

- **Name**: Sourav
- **Email**: [souravdubey754@gmail.com](mailto:souravdubey754@gmail.com)
- **LinkedIn**: [Sourav Dubey](https://www.linkedin.com/in/souravdubey)
- **GitHub**: [Souravgne](https://github.com/Souravgne/Scrapper.ai)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

