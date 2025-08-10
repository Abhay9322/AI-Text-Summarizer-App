
import axios from "axios";

export const summarizeText = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ message: "Text is required" });
        }


        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: `Summarize the following text in a few concise sentences:\n\n${text}`,
                            },
                        ],
                    },
                ],
            }
        );


        const summary =
            response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No summary found";

        res.json({ summary });
    } catch (error) {
        console.error(
            "Gemini API Error:",
            error.response?.data || error.message || error
        );
        res.status(500).json({
            message: "Error summarizing text",
            error: error.response?.data || error.message,
        });
    }
};
