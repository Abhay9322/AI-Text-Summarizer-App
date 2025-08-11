# ✂️ AI Text Summarizer App (MERN + Google Gemini API)

A MERN stack web application that uses **Google Gemini AI** to summarize long pieces of text into short, meaningful summaries.

---

## 🚀 Features
- 📝 Paste or type any long text to get a short summary.
- ⚡ Fast processing with Google Gemini API.
- 🎨 Clean and responsive UI.
- 🔐 API key stored securely in `.env`.

---

## 🛠 Tech Stack
**Frontend**: React (Vite) + Axios + Tailwind CSS  
**Backend**: Node.js + Express + Axios + dotenv  
**AI Service**: Google Gemini API

---

## 📂 Folder Structure

ai-text-summarizer-app/
├── backend/
│ ├── routes/aiRoutes.js
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ └── vite.config.js
└── README.md


---

## 🔑 Prerequisites
- Node.js installed (v16+ recommended)
- Google Gemini API Key ([Get here](https://aistudio.google.com/))
- Git

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/ai-text-summarizer-app.git
cd ai-text-summarizer-app


 Backend setup

 cd backend
npm install


Create a .env file inside backend/:

PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key_here


Run backend:
npm start

 Frontend setup
cd ../frontend
npm install
npm run dev


🖥 Usage
Open the frontend in your browser (usually http://localhost:5173).

Paste your long text into the textarea.

Click Summarize.

Get a short, concise summary instantly.

