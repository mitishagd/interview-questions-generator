import { GoogleGenerativeAI } from "@google/generative-ai";


export async function generateInterviewQuestionsWithGemini(resumeText: string) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.log("GEMINI_API_KEY not found in environment variables");
        throw new Error("GEMINI_API_KEY is not defined in environment variables");
    }
    const genAI = new GoogleGenerativeAI(apiKey) // Initiate Google Gemini Client with API Key from .env
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"}) // Select Gemini Model

    const prompt = `Generate a list of 10 relevant interview questions based on the following resume text:\n\n${resumeText}\n\nCategorize them as: Technical Questions (5), Behavioral Question (3), and Experience based questions (2). Format as a JSON structure: {"technical": [], "behavioral": [], "experience": []}`

    console.log("Prompt sent to Gemini: ", prompt)
    const result = await model.generateContent(prompt) // Generate text using the model with the provided prompt
    const response =  await result.response
    console.log("Response from Gemini: ", response.text)

    return response.text
}