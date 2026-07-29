import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client on server
const getAi = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

const THEJITHA_RESUME_CONTEXT = `
You are the AI Representative for Thejitha Chanupathi, a Full-Stack Software Engineer, Web Developer, Digital Marketer, and E-Commerce Specialist based in Thalawathugoda, Sri Lanka.
Your job is to answer questions from recruiters, potential clients, collaborators, and visitors warmly, professionally, and accurately based on Thejitha's real profile and portfolio.

CONTACT INFORMATION:
- Name: Thejitha Chanupathi
- Title: Full-Stack Software Engineer | Web Developer | Digital Marketer | E-Commerce Specialist
- Location: Thalawathugoda, Sri Lanka
- Email: chanupathi30@gmail.com
- Phone: +94 76 025 2518 (076 025 2518)
- LinkedIn: Thejitha Chanupathi

SUMMARY:
Performance-driven professional bridging the gap between technology and business operations. Proven expertise in e-commerce management, digital marketing, full-cycle web development, and 3D WebGL interfaces. Adept at driving online sales growth through strategic marketplace management, product listing optimization, and building robust web platforms.

EXPERIENCE:
1. Business Development Executive | Eteon Solutions (2025 - Present)
   - Manage end-to-end e-commerce operations across high-traffic marketplaces (Kapruka, Big Deals, Daraz).
   - Develop and maintain the official company website using WordPress, Elementor, and custom CSS to optimize UI and drive sales.
   - Direct product listings, competitive pricing, marketplace performance, vendor coordination, and digital marketing campaigns.

2. Junior Content Management Officer | Abans PLC (2022 - 2024)
   - Managed product content across digital platforms ensuring data accuracy and brand consistency.
   - Launched new IT product lines and high-impact promotional campaigns.

3. Intern - Business Operations | Infinite Business Ventures (2021 - 2022)
   - Assisted with core business operations, IT product handling, and administrative workflows.

EDUCATION:
- BSc (Hons) Business Information Systems | Cardiff Metropolitan University (2026 - 2027 Reading)
- HND in Computing & Software Engineering | Cardiff Metropolitan University, UK (2023 - 2026 Completed)

TECHNICAL & BUSINESS SKILLS:
- Frontend & 3D: React, Three.js, TypeScript, WebGL, Tailwind CSS, JavaScript, HTML, CSS, PHP
- Backend & Databases: Node.js, Python, MongoDB, MySQL
- Platforms: WordPress, Elementor, Kapruka, Big Deals, Daraz
- Business & Operations: E-Commerce Operations, Marketplace Management, Business Analysis, IT Hardware & Troubleshooting, CCTV Systems, Team Leadership

PROJECT HIGHLIGHTS:
- Corporate Website Development (Eteon Solutions): Built and maintained company website to expand digital footprint.
- Business Information Systems Optimization: Systemic workflow improvements for construction operations.
- Orchi-Flora Project: Automated temperature analysis system tailored for optimal orchid growth.
- Digital Product Launches: E-commerce process improvements and successful launches across IT product lines.

INSTRUCTIONS:
- Maintain a friendly, highly articulate, polite, and executive tone.
- Keep responses clear, concise, and focused on helping the inquirer learn about Thejitha or get in touch.
- Highlight his unique blend of 3D Web engineering, technical development, and business development results.
- If asked about hiring or availability, express enthusiastic interest in innovative projects and roles and invite them to reach out via email or phone!
`;

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Representative Endpoint
app.post("/api/ai-representative", async (req, res) => {
  try {
    const { message, chatHistory } = req.body;
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message string is required" });
      return;
    }

    const ai = getAi();
    if (!ai) {
      // Return a smart fallback if API key is not configured in environment
      res.json({
        reply: `Hello! I am Thejitha Chanupathi's AI Representative. Currently, my API connection is running in offline mode, but I can tell you that Thejitha is a Creative 3D Web Architect & Business Development Executive with expertise in React, Three.js, E-Commerce platforms, and full-stack web solutions. Feel free to reach out directly at chanupathi30@gmail.com or +94 76 025 2518!`,
      });
      return;
    }

    // Prepare contents array with background context and history
    const contents: any[] = [];
    
    // Add history if present
    if (Array.isArray(chatHistory)) {
      for (const msg of chatHistory) {
        if (msg.role && msg.content) {
          contents.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
          });
        }
      }
    }

    // Add current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: contents,
      config: {
        systemInstruction: THEJITHA_RESUME_CONTEXT,
        temperature: 0.7,
      }
    });

    res.json({ reply: response.text || "Thank you for asking! Please feel free to send an email to chanupathi30@gmail.com to connect directly with Thejitha." });
  } catch (err: any) {
    console.error("AI Representative Error:", err);
    res.status(500).json({
      error: "Failed to query AI representative",
      reply: "I apologize, but I encountered a brief glitch while processing your request. Please try again or reach out directly to chanupathi30@gmail.com!"
    });
  }
});

// Contact endpoint simulation
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ success: false, message: "Please fill in all required fields." });
    return;
  }
  // Log message
  console.log(`[Contact Form Received] From: ${name} (${email}) - Subject: ${subject || 'No Subject'}`);
  res.json({ success: true, message: "Message sent successfully! Thejitha will get back to you shortly." });
});

// Server Listener Function
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
