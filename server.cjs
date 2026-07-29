var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
var import_cors = __toESM(require("cors"), 1);
import_dotenv.default.config();
async function startServer() {
  const app = (0, import_express.default)();
  app.use((0, import_cors.default)());
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== "string") {
        res.status(400).json({ error: "Message string is required." });
        return;
      }
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(200).json({
          reply: "I am currently in preview offline mode because GEMINI_API_KEY is missing. Feel free to contact Thejitha directly at chanupathi30@gmail.com or via LinkedIn!"
        });
        return;
      }
      const ai = new import_genai.GoogleGenAI({ apiKey });
      const systemInstruction = `You are "Thejitha AI", an intelligent, friendly, highly professional assistant.
Key details about Thejitha Chanupathi:
- Role: Web Developer & E-Commerce Operations Specialist
- Specialties: WordPress, Elementor, HTML, CSS, PHP, MySQL, Digital Marketing, Marketplace Management (Daraz, Kapruka).
- Portfolio URL: https://thejitha-c.github.io/personal-portfolio/
- Email: chanupathi30@gmail.com
- Experience: Bridging technology and business operations, driving online sales growth, and building robust e-commerce platforms. Currently at Eteon Solutions.
- Education: BSc (Hons) Business Information Systems (Reading), HND in Computing and Software Engineering.

Respond politely and keep answers focused, helpful, and concise...`;
      let promptText = `User message: ${message}`;
      if (Array.isArray(history) && history.length > 0) {
        const historyContext = history.slice(-6).map((h) => `${h.sender}: ${h.text}`).join("\n");
        promptText = `Conversation context:
${historyContext}

Current User Question: ${message}`;
      }
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: promptText,
        config: {
          systemInstruction,
          temperature: 0.7
        }
      });
      const replyText = response.text || "Hello! How can I assist you with Thejitha's projects or skills today?";
      res.json({ reply: replyText });
    } catch (err) {
      console.error("Gemini API Error:", err);
      res.status(500).json({
        reply: "I encountered a temporary connection glitch. Feel free to reach out to Thejitha directly at chanupathi30@gmail.com!"
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}
startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
//# sourceMappingURL=server.cjs.map
