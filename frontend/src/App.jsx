// frontend/src/App.jsx
import { useState } from "react";     // To store text & summary
import axios from "axios";            // To call backend API
import "./App.css";                   // Styling

function App() {
    const [text, setText] = useState("");       // Store input text
    const [summary, setSummary] = useState(""); // Store AI summary
    const [loading, setLoading] = useState(false); // Loading state

    const handleSummarize = async () => {
        if (!text) return alert("Please enter text");
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/api/ai/summarize", {
                text,
            });
            setSummary(res.data.summary); // Store summary in state
        } catch (err) {
            alert("Error getting summary");
        }
        setLoading(false);
    };

    return (
        <div className="container">
            <h1>AI Text Summarizer</h1>
            <textarea
                placeholder="Paste your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button onClick={handleSummarize} disabled={loading}>
                {loading ? "Summarizing..." : "Summarize"}
            </button>
            {summary && (
                <div className="output">
                    <h2>Summary:</h2>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
}

export default App;
