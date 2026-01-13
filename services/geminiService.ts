import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedCodeResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCode = async (prompt: string, currentCode: { html: string, css: string, js: string }): Promise<GeneratedCodeResponse> => {
  try {
    const modelId = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: `
        Task: Create or modify web code based on the user's request.
        User Request: ${prompt}
        
        Current Context:
        HTML: ${currentCode.html}
        CSS: ${currentCode.css}
        JS: ${currentCode.js}
        
        Return the complete code for all three files. If the user asks for a modification, merge it with the existing context intelligently.
      `,
      config: {
        systemInstruction: "You are an expert Frontend Engineer. You generate clean, modern, and accessible HTML, CSS, and JavaScript. Always return the full code for each section, not just diffs.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            html: { type: Type.STRING, description: "The full HTML code (body content mainly)" },
            css: { type: Type.STRING, description: "The full CSS code" },
            javascript: { type: Type.STRING, description: "The full JavaScript code" },
            explanation: { type: Type.STRING, description: "Brief explanation of changes" }
          },
          required: ["html", "css", "javascript"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as GeneratedCodeResponse;
  } catch (error) {
    console.error("Error generating code:", error);
    throw error;
  }
};
