import axios from "axios";

export const summarizeText = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) return res.status(400).json({ message: "Text is required" });

        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + process.env.GEMINI_API_KEY,
            {
                contents: [{ parts: [{ text }] }],
            }
        );

        const summary = response.data.candidates[0].content.parts[0].text || "No summary found";

        res.json({ summary });
    } catch (error) {
        res.status(500).json({ message: "Error summarizing text", error })
    }
}