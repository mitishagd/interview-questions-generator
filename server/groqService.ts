import Groq from 'groq-sdk'

export async function generateInterviewQuestionsWithGroq(resumeText: string) {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey){
        console.log("Groq API Key not found in environment variables");
        throw new Error("GROQ_API_KEY is not defined in environment variables");
    }
    const groq = new Groq({ apiKey }); // Initialize Groq client with API key from .env
    const prompt = `Generate a list of 10 relevant interview questions based on the following resume text:\n\n${resumeText}\n\nCategorize them as: Technical Questions (5), Behavioral Question (3), and Experience based questions (2).\n\nIMPORTANT: Return ONLY a valid JSON object with this exact structure, no additional text or explanation:\n{"technical": [], "behavioral": [], "experience": []}`

    console.log("Prompt sent to Groq: ", prompt);
    const chatCompletion = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile', // Specify Groq model
        messages: [
            { role: 'system', content: 'You are a JSON-only API. Return only valid JSON with no additional text, markdown formatting, or explanations.' },
            { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' }
    });

    const responseText = chatCompletion.choices[0]?.message?.content || ""
    console.log("Response from Groq: ", responseText)

    // Strip markdown code blocks if present (e.g., ```json ... ```)
    const cleanedText = responseText.replace(/^```(?:json)?\s*\n?/i, '').replace(/\n?```\s*$/i, '').trim()

    // Extract JSON if it's embedded in conversational text
    const jsonMatch = cleanedText.match(/\{[\s\S]*\}/)
    const finalText = jsonMatch ? jsonMatch[0] : cleanedText
    console.log("Cleaned response: ", finalText)

    return finalText

}