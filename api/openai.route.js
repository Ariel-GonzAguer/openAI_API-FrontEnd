import express from "express";
import generateText from "./openAI_Service.js";

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const { input } = req.body;
    if (!input) {
      return res.status(400).json({ error: "Missing input text" });
    }
    const output = await generateText(input);
    res.json({ output });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

export default router;
