import { GoogleGenerativeAI } from "@google/generative-ai";


export async function generateInterviewQuestionsWithGemini(resumeText: string) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.log("GEMINI_API_KEY not found in environment variables");
        throw new Error("GEMINI_API_KEY is not defined in environment variables");
    }
    const genAI = new GoogleGenerativeAI(apiKey) // Initiate Google Gemini Client with API Key from .env
    const model = genAI.getGenerativeModel({model: "gemini-3-flash-preview"}) // Select Gemini Model

    const prompt = `Generate a list of 10 relevant interview questions based on the following resume text:\n\n${resumeText}\n\nCategorize them as: Technical Questions (5), Behavioral Question (3), and Experience based questions (2).\n\nIMPORTANT: Return ONLY a valid JSON object with this exact structure, no additional text or explanation:\n{"technical": [], "behavioral": [], "experience": []}`

    console.log("Prompt sent to Gemini: ", prompt)
    const result = await model.generateContent(prompt) // Generate text using the model with the provided prompt
    const response = await result.response
    const responseText = response.text()
    console.log("Response from Gemini: ", responseText)

    // Strip markdown code blocks if present (e.g., ```json ... ```)
    const cleanedText = responseText.replace(/^```(?:json)?\s*\n?/i, '').replace(/\n?```\s*$/i, '').trim()

    // Extract JSON if it's embedded in conversational text
    const jsonMatch = cleanedText.match(/\{[\s\S]*\}/)
    const finalText = jsonMatch ? jsonMatch[0] : cleanedText
    console.log("Cleaned response: ", finalText)

    return finalText
}