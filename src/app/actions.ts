'use server';

import { aiChatAssistant, AIChatAssistantInput } from '@/ai/flows/ai-chat-assistant';

export async function handleChatQuery(input: AIChatAssistantInput) {
  try {
    const result = await aiChatAssistant(input);
    return result;
  } catch (error) {
    console.error('Error in AI Chat Assistant:', error);
    return {
      answer: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
      useAssistant: true,
    };
  }
}
