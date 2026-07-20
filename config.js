const CONFIG = {
  // 1. Paste your OpenRouter API Key here
  OPENROUTER_API_KEY: "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",

  // 2. Configure your models
  MODELS: {
    "syntax-fast": {
      name: "Syntax Fast",
      // Replace with your preferred OpenRouter model ID (e.g., google/gemini-2.5-flash or meta-llama/llama-3.3-70b-instruct)
      modelId: "liquid/lfm-2.5-1.2b-instruct",
      description: "Fast Good for Basic Tasks",
      badge: "⚡ Fast"
    },
    "syntax-smart": {
      name: "Syntax Smart",
      // Replace with your preferred OpenRouter model ID (e.g., anthropic/claude-3.5-sonnet or openai/gpt-4o)
      modelId: "qwen/qwen3-coder-480b-a35b:free",
      description: "Reasoning Smart Good for coding Included thinking",
      badge: "🧠 Smart"
    }
  }
};
