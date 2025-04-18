import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from 'dotenv';
dotenv.config();
require('dotenv').config();
const API_KEY = process.env.API_KEY;



async function generateText(prompt: string): Promise<string | null> {
  if (!API_KEY) {
    console.error("API key not found. Please set the GOOGLE_API_KEY environment variable.");
    return null;
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); //Or gemini-ultra, if you have access.

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error generating text:", error);
    return null;
  }
}

async function main() {
  const userPrompt = "Write a short poem about a cat in Vietnamese.";
  const generatedText = await generateText(userPrompt);

  if (generatedText) {
    console.log("Generated Text:\n", generatedText);
  }
}

main();