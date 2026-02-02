import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/generate';

export const generateQuestions = async (resumeText: string, model: 'gemini' | 'groq' | 'both') => {
    try {
        const response = await axios.post(API_URL, {
            resumeText,
            model
        });
        return response.data;
    } catch (error) {
        console.error('Error in API call:', error);
        throw error;
    }
};
