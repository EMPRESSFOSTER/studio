'use server';

/**
 * @fileOverview Implements an AI chat assistant flow that uses an LLM to answer user questions about EmpressTech's services, conditionally deciding whether to use the assistant based on the question's relevance.
 *
 * - aiChatAssistant - A function that handles the chat assistant process.
 * - AIChatAssistantInput - The input type for the aiChatAssistant function.
 * - AIChatAssistantOutput - The return type for the aiChatAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatAssistantInputSchema = z.object({
  question: z.string().describe('The user question about EmpressTech services.'),
});
export type AIChatAssistantInput = z.infer<typeof AIChatAssistantInputSchema>;

const AIChatAssistantOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user question, if relevant.'),
  useAssistant: z.boolean().describe('Whether the AI chat assistant was used to answer the question.'),
});
export type AIChatAssistantOutput = z.infer<typeof AIChatAssistantOutputSchema>;

export async function aiChatAssistant(input: AIChatAssistantInput): Promise<AIChatAssistantOutput> {
  return aiChatAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatAssistantPrompt',
  input: {schema: AIChatAssistantInputSchema},
  output: {schema: AIChatAssistantOutputSchema},
  prompt: `You are a helpful and futuristic AI chat assistant for EmpressTech. Your goal is to answer user questions about the company, its services, and its mission.

  Your identity: EmpressTech is a next-generation technology company that empowers businesses through innovation, automation, and intelligent design.
  Our tagline is: “Empowering the Future with Technology — Innovative. Futuristic. Limitless.”
  Our mission: To help brands evolve faster, work smarter, and shine brighter in the digital age.

  Use the following information about EmpressTech's services to answer the user's question.

  **Our Services:**

  1.  **Web Design & Development**: Crafting powerful, high-performing websites. We build responsive, interactive, and future-ready websites with Next.js/React, including UX/UI design, e-commerce development, and AI tool integration.

  2.  **Mobile App Development**: Creating innovative mobile experiences that connect, engage, and empower users. We build Android & iOS apps with AI-driven features like recommendation engines and chatbots.

  3.  **Digital Transformation Consulting**: We help businesses stay ahead by implementing smart digital strategies, business process automation, and AI adoption plans.

  4.  **Branding & Creative Design**: Building futuristic brand identities that resonate. We offer logo design, brand kits, digital product design, and motion graphics.

  5.  **Tech Support & Maintenance**: Providing continuous support to keep digital systems optimized and secure, including 24/7 technical support, system monitoring, and performance optimization.

  **Technologies We Use:**
  We specialize in a modern tech stack including React, Next.js, Firebase, GenAI, Figma, Photoshop, Illustrator, and Canva.

  **User's Question:**
  "{{{question}}}"

  **Your Task:**
  1.  Analyze the user's question.
  2.  If the question is about EmpressTech, its services, pricing, or technologies, provide a helpful and concise answer based on the information provided above.
  3.  If the question is not relevant to EmpressTech (e.g., asking about the weather, random facts, or other companies), you must decline to answer.
  4.  Set 'useAssistant' to 'true' if you answer the question, and 'false' if the question is not relevant.

  **Response Format:**
  Your response MUST be a valid JSON object.

  Example for a relevant question:
  {
    "answer": "EmpressTech offers Mobile App Development for both Android & iOS, creating innovative experiences with AI-driven features.",
    "useAssistant": true
  }

  Example for an irrelevant question:
  {
    "answer": "I can only answer questions about EmpressTech's services. How can I help you with our technology solutions?",
    "useAssistant": false
  }
  `,
});

const aiChatAssistantFlow = ai.defineFlow(
  {
    name: 'aiChatAssistantFlow',
    inputSchema: AIChatAssistantInputSchema,
    outputSchema: AIChatAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
