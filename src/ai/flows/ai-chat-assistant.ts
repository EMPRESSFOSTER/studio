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
  prompt: `You are a helpful AI chat assistant for EmpressTech, a technology company specializing in AI Solutions, Automation, Cloud Systems, Web Development, and Data Analytics.

  A user has the following question: {{{question}}}

  Determine if the question is relevant to EmpressTech's services. If it is, answer the question using your knowledge of EmpressTech. If it is not, indicate that the question is not relevant.

  Format your response as a JSON object with the following fields:
  - answer: The AI-generated answer to the user question, or a message indicating that the question is not relevant.
  - useAssistant: true if the question is relevant and you answered it, false otherwise.

  Make sure that the response can be parsed by JSON.parse.
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
