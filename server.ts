import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "First Open School" });
});

// AI Parent & Teacher Coach Endpoint
app.post("/api/ai-parent-coach", async (req, res) => {
  try {
    const { studentName, ageTier, alphabetMastery, digitMastery, tracingAccuracy, weakSpots, streak } = req.body;

    const prompt = `You are an expert early-childhood developmental educational psychologist for "First Open School".
    Provide concise, actionable, evidence-based pedagogical insights for a parent or teacher.
    Student Profile:
    - Name: ${studentName || "Learner"}
    - Age Tier: ${ageTier || "Kindergarten"}
    - Alphabet Mastery: ${alphabetMastery || 0}%
    - Digit & Counting Mastery: ${digitMastery || 0}%
    - Tracing Accuracy: ${tracingAccuracy || 0}%
    - Recent Streak: ${streak || 1} days
    - Focus Areas/Weak Spots: ${Array.isArray(weakSpots) && weakSpots.length ? weakSpots.join(", ") : "General practice needed"}

    Return a JSON object with:
    1. "summary": A warm 2-sentence summary of progress.
    2. "pedagogicalInsight": An evidence-based educational analysis (e.g., phonemic awareness, subitizing, motor memory).
    3. "recommendedActivities": Array of 3 specific fun home/classroom activities.
    4. "encouragingNote": A short celebratory message to share with the student.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You are an educational AI coach specializing in early childhood literacy, numeracy, and fine motor skills.",
      },
    });

    const resultText = response.text || "{}";
    const data = JSON.parse(resultText);
    res.json({ success: true, data });
  } catch (err: any) {
    console.error("Error in AI Parent Coach API:", err);
    res.status(500).json({
      success: false,
      error: "Could not generate AI coach suggestions at this time.",
      fallbackData: {
        summary: "The learner is making steady progress across foundational literacy and numeracy activities.",
        pedagogicalInsight: "Consistent multi-sensory exposure to phonics and touch tracing enhances cognitive retention and fine motor dexterity.",
        recommendedActivities: [
          "Practice daily letter tracing for 5 minutes with voice guidance.",
          "Play the Digit Counting Monster game together to build subitizing skills.",
          "Use the downloadable certificate to celebrate milestones!"
        ],
        encouragingNote: "Great work! Keep exploring new letters and numbers every day!"
      }
    });
  }
});

// AI Phonics Story Generator Endpoint
app.post("/api/generate-phonics-story", async (req, res) => {
  try {
    const { letters, numbers, theme } = req.body;

    const prompt = `Create a super short, whimsical 2-to-3 sentence story for kids learning to read.
    Target Letters: ${letters ? letters.join(", ") : "A, B, C"}
    Target Numbers: ${numbers ? numbers.join(", ") : "1, 2, 3"}
    Theme: ${theme || "Animal Safari"}

    Return JSON with:
    1. "title": Catchy title.
    2. "story": The 2-3 sentence story text highlighting the target letters and numbers.
    3. "phonicsFocus": Key sound focus.
    4. "question": A fun simple comprehension question for the child.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You create super engaging early reader phonics mini-stories for young kids.",
      },
    });

    const resultText = response.text || "{}";
    const data = JSON.parse(resultText);
    res.json({ success: true, data });
  } catch (err: any) {
    console.error("Error in Phonics Story API:", err);
    res.status(500).json({
      success: false,
      error: "Using fallback phonics story.",
      fallbackData: {
        title: "The Friendly Bear's Apple",
        story: "Ben the Bear found 2 big red Apples under the Tree. He shared 1 apple with Cat, and they sang A B C with glee!",
        phonicsFocus: "Sound 'B' and Number '2'",
        question: "How many apples did Ben the Bear find?"
      }
    });
  }
});

// Vite middleware & Static serving
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
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`First Open School server running on http://localhost:${PORT}`);
  });
}

startServer();
