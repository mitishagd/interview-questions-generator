import Groq from 'groq-sdk'

export async function generateInterviewQuestionsWithGroq(resumeText: string) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey){
        console.log("Groq API Key not found in environment variables");
        throw new Error("GROQ_API_KEY is not defined in environment variables");
    }
    const groq = new Groq({ apiKey }); // Initialize Groq client with API key from .env
    const prompt = `Generate a list of 10 relevant interview questions based on the following resume text:\n\n${resumeText}\n\nCategorize them as: Technical Questions (5), Behavioral Question (3), and Experience based questions (2). Format as a JSON structure: {"technical": [], "behavioral": [], "experience": []}`

    console.log("Prompt sent to Groq: ", prompt);
    const chatCompletion = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile', // Specify Groq model
        messages: [
            { role: 'user', content: prompt }
        ],
        temperature:0.7
    });

    const responseText = chatCompletion.choices[0]?.message?.content || ""
    console.log("Response from Groq: ", responseText)
    
    return responseText

}