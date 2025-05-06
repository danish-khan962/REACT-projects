import { GoogleGenAI } from "@google/genai";  // Corrected import path

const ai = new GoogleGenAI({ apiKey: "AIzaSyCIa3VQBi4viVyEo4hmh8MF3hCicCq6hZc" });

async function generateText(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    console.log(response);  
    return response.text;  
  } catch (error) {
    console.error("Error generating content:", error.message); 
    if (error.response) {
      console.error("API Response error:", error.response.data);  
    }
    return null;
  }
}

export default generateText;
