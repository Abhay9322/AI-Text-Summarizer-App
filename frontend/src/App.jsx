import React from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSummarize = async () => {
        if (!text) return alert("Please enter text");
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/api/ai/summarize", { text, });
            setSummary(res.data.summary);
        } catch (error) {
            alert("Error getting summary");
        }
        setLoading(false);
    }
    return (
        <div className='container'>
            <h1>AI Text Summarizer</h1>
            <textarea
                placeholder='Paste your text here...'
                value={text}
                onChange={(e) => setText(e.target.value)}></textarea>
            <button onClick={handleSummarize}>{loading ? "Summarizing..." : "Summarize"}</button>

            {summary && (
                <div className="output">
                    <h2>Summary:</h2>
                    <p>{summary}</p>
                </div>
            )}

        </div>
    )
}

export default App
