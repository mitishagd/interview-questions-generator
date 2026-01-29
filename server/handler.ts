import { generateInterviewQuestionsWithGemini } from "./geminiService.js";
import { generateInterviewQuestionsWithGroq } from "./groqService.js";

type RequestBody = {
    resumeText: string
    model: 'gemini' | 'groq' | 'both'
}

export const generateQuestions = async (event: any) => {
    try {
        const body: RequestBody = JSON.parse(event.body)
        const {resumeText, model} = body

        let result: any = {}

        if (model === 'gemini' || model === 'both'){
            const geminiQuestions = await generateInterviewQuestionsWithGemini(resumeText)
            result.gemini = JSON.parse(geminiQuestions)
        }

        if (model === 'groq' || model === 'both'){
            const groqQuestions = await generateInterviewQuestionsWithGroq(resumeText)
            result.groq = JSON.parse(groqQuestions)
        }

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(result)
        }

    } catch (error){
        console.error("Error generating questions:", error)
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: 'Failed to generate questions',
                message: error instanceof Error ? error.message : 'Unknown error'
            })
        }
    }

}