import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const LANGUAGES = [
  { name: "Python", value: "python3" },
  { name: "JavaScript", value: "javascript" },
  { name: "C++", value: "cpp" },
  { name: "Java", value: "java" },
];

const sampleProblems = [
  {
    levelId: 1,
    title: "Print Hello World",
    description: 'Write a program that prints "Hello, World!"',
    testCode: "",
    expectedOutput: "Hello, World!",
  },
  {
    levelId: 2,
    title: "Sum of Two Numbers",
    description: "Write a program that prints the sum of 3 and 5.",
    testCode: "",
    expectedOutput: "8",
  },
  // Add more problems for levels 3–5
];

// Map language values to their respective versions for the Piston API
const LANGUAGE_VERSIONS = {
  python3: "3.10.0",
  javascript: "16.3.0",
  cpp: "10.2.0",
  java: "15.0.2",
};

const PlayArea = () => {
  const navigate = useNavigate();
  const { levelId } = useParams();
  const level = parseInt(levelId, 10);
  const [language, setLanguage] = useState("python3");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const problem = sampleProblems.find((p) => p.levelId === level);

  const handleRun = async () => {
    setLoading(true);
    const version = LANGUAGE_VERSIONS[language];
    try {
      const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language,
        version,
        files: [
          {
            name:
              "main." +
              (language === "python3"
                ? "py"
                : language === "javascript"
                ? "js"
                : language === "cpp"
                ? "cpp"
                : "java"),
            content: code,
          },
        ],
      });
      setOutput(res.data.run.output);
    } catch (err) {
      console.error("Error executing code:", err.response?.data || err.message);
      setOutput("Error executing code");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    const trimmedOutput = output.trim();
    const isCorrect = trimmedOutput === problem.expectedOutput.trim();
    if (isCorrect) {
      alert("✅ Correct! XP +10");
      // TODO: Update XP, Unlock next level, Save progress
      setTimeout(() => {
        navigate("/map"); // 👈 Redirect to the map
      }, 1000);
    } else {
      alert("❌ Incorrect output. Try again!");
    }
  };

  if (!problem) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#09181f]">
        <p>Problem not found for level {levelId}</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#09181f] text-[#fcf7d1] p-6"
      style={{ padding: "2rem" }}
    >
      <h1 className="text-3xl font-bold mb-2" style={{ marginBottom: ".5rem" }}>
        Level {level}: {problem.title}
      </h1>
      <p
        className="mb-4 text-sm text-[#c5a46d]"
        style={{ marginBottom: "1rem" }}
      >
        {problem.description}
      </p>

      <select
        className="mb-4 p-2 bg-[#1c3645] text-[#fcf7d1] rounded"
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.name}
          </option>
        ))}
      </select>

      <textarea
        className="w-full h-64 bg-[#102129] p-4 rounded text-sm text-[#fcf7d1]"
        style={{ padding: "1rem" }}
        placeholder="Write your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <div
        className="flex gap-4 my-4"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        <button
          onClick={handleRun}
          className="px-4 py-2 bg-[#c5a46d] text-black rounded hover:bg-[#e6c98c]"
          style={{ padding: "0.5rem 1rem" }}
          disabled={loading}
        >
          {loading ? "Running..." : "Run Code"}
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          style={{ padding: "0.5rem 1rem" }}
        >
          Submit
        </button>
      </div>

      <div
        className="bg-[#1c3645] p-4 rounded"
        style={{ padding: "1rem", borderRadius: "0.5rem" }}
      >
        <h3
          className="text-lg font-bold mb-2"
          style={{ marginBottom: ".5rem" }}
        >
          Output:
        </h3>
        <pre className="whitespace-pre-wrap text-sm">{output}</pre>
      </div>
    </div>
  );
};

export default PlayArea;
