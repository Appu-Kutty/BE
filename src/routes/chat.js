import express from "express";
import { askOpenAI } from "../services/openai.js";
import { askGemini } from "../services/gemini.js";
import { askDeepSeek } from "../services/deepseek.js";
import { askPerplexity } from "../services/perplexity.js";
import { buildPrompt } from "../utils/promptBuilder.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { provider, question, pageData } = req.body;

  if (result.confidence < 0.6) {
  result.answer = "Information not available on this page.";
  result.redirect = null;
}


  try {
    const prompt = buildPrompt(question, pageData);
    let result;

    switch (provider) {
      case "openai":
        result = await askOpenAI(prompt);
        break;
      case "gemini":
        result = await askGemini(prompt);
        break;
      case "deepseek":
        result = await askDeepSeek(prompt);
        break;
      case "perplexity":
        result = await askPerplexity(prompt);
        break;
      default:
        return res.status(400).json({ error: "Invalid provider" });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
