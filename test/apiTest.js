import axios from 'axios';
import { expect } from 'chai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Retrieve API base URL from environment variables
const API_BASE_URL = process.env.API_BASE_URL;

describe('API Test', function () {
  it('Verify the status code and Title', async function () {
    try {
      const response = await axios.get(`${API_BASE_URL}/todos/1`);
      // Verify the status code
      expect(response.status).to.equal(200);

      // Verify the title
      expect(response.data.title).to.equal('delectus aut autem');
    } catch (error) {
      // Handle error if any
      throw new Error(`API request failed: ${error.message}`);
    }
  });

  it('Verify the status code as 404 with invalid URI', async function () {
    try {
      await axios.get(`${API_BASE_URL}/todo/1`);
    } catch (error) {
      // Verify the status code
      expect(error.response.status).to.equal(404);
    }
  });
});

