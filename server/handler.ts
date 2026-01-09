import { generateInterviewQuestionsWithGemini } from "./geminiService.js";
import { generateInterviewQuestionsWithGroq } from "./groqService.js";

type RequestBody = {
    resumeText: string
    model: 'gemini' | 'groq' | 'both'
}

export const generateQuestions = async () => {
    
}