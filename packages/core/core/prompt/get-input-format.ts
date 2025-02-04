import { Prompt } from './prompt';

export function getInputFormat({
  prompt,
  messages,
}: Prompt): 'prompt' | 'messages' {
  if (prompt == null && messages == null) {
    throw new Error('prompt or messages must be defined'); // TODO InvalidPromptError
  }

  if (prompt != null && messages != null) {
    throw new Error('prompt and messages cannot be defined at the same time'); // TODO InvalidPromptError
  }

  return prompt != null ? 'prompt' : 'messages';
}
