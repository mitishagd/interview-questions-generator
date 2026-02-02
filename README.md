# Interview Question Generator

A full-stack application that generates tailored interview questions using AI models (Google Gemini and Groq). It features a modern, aesthetic React frontend and a serverless Node.js backend deployed on AWS Lambda.

## Demo

https://github.com/user-attachments/assets/demo.mov

> *Note: If the video above doesn't play, please view it at [assets/demo.mov](assets/demo.mov)*


## Features

-   **Resume Analysis**: Extracts context from pasted resume text.
-   **Multi-Model Support**: Choose between **Google Gemini**, **Groq (Llama 3)**, or generate from **Both** simultaneously.
-   **Categorized Output**: Questions are intelligently organized into Technical, Behavioral, and Experience-based categories.
-   **Responsive Design**: A premium, dark-mode UI built with `styled-components`.
-   **Split-Screen Layout**: optimized for desktop viewing with real-time results.

## Tech Stack

-   **Frontend**: React, TypeScript, Vite, Styled Components
-   **Backend**: Node.js, Express, Serverless Framework (AWS Lambda)
-   **AI Integration**: Google Generative AI SDK, Groq SDK

## Prerequisites

-   Node.js (v20+)
-   AWS CLI (configured with credentials)
-   API Keys for **Google Gemini** and **Groq**

## Local Development

### 1. Clone & Install
```bash
git clone <repo-url>
cd interview-questions-generator

# Install Server Dependencies
cd server
npm install

# Install Client Dependencies
cd ../client
npm install
```

### 2. Configure Environment

**Backend (`server/.env`):**
```env
GEMINI_API_KEY=your_gemini_key
GROQ_API_KEY=your_groq_key
```

**Frontend (`client/.env`):**
```env
# For local dev, Vite proxies calls, but you can set this if needed
VITE_API_URL=http://localhost:3000/generate
```

### 3. Run Locally
You need to run both the client and server terminals.

**Terminal 1 (Server):**
```bash
cd server
npm run dev
# Server running at http://localhost:3000
```

**Terminal 2 (Client):**
```bash
cd client
npm run dev
# Client running at http://localhost:5173
```

## Deployment

### Backend (AWS Lambda)
The backend is deployed using the Serverless Framework.

```bash
cd server
npx serverless deploy
```
Copy the **endpoint URL** from the output (e.g., `https://xyz.execute-api.us-east-1.amazonaws.com/generate`).

### Frontend (Vercel)
1.  Push your code to GitHub.
2.  Import the project into Vercel.
3.  Set the **Root Directory** to `client`.
4.  Add the Environment Variable:
    -   `VITE_API_URL`: Your AWS Lambda URL from the backend step.
5.  Deploy!
