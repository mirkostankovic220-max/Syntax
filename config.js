const CONFIG = {
  // 1. Paste your OpenRouter API Key here
  // WARNING: Never commit your actual API key to a public GitHub repository!
  OPENROUTER_API_KEY: "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",

  // 2. Configure your models
  MODELS: {
    "syntax-fast": {
      name: "Syntax Fast",
      modelId: "liquid/lfm-2.5-1.2b-instruct",
      description: "Optimized for speed. Perfect for rapid line edits, quick syntax checks, and lightweight completions.",
      badge: "⚡ Fast"
    },
    "syntax-smart": {
      name: "Syntax Smart",
      modelId: "qwen/qwen3-coder-480b-a35b:free",
      description: "Deep reasoning engine. Best for complex architectural planning, multi-file refactoring, and subtle bug fixes.",
      badge: "🧠 Smart"
    }
  }
};
