import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Select from "react-select";
import "./App.css";
import markdown_en from "./markdown_en.md";
import markdown_fr from "./markdown_fr.md";

const App = () => {
  const [selectedLang, setSelectedLang] = useState(null);
  const [markdownContent, setMarkdownContent] = useState("");

  const options = [
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
  ];

  useEffect(() => {
    if (selectedLang) {
      const selectedFile =
        selectedLang.value === "en" ? markdown_en : markdown_fr;
      fetch(selectedFile)
        .then((response) => response.text())
        .then((data) => setMarkdownContent(data));
    } else {
      setMarkdownContent("");
    }
  }, [selectedLang]);

  const handleLanguageChange = (selectedOption) => {
    setSelectedLang(selectedOption);
  };

  return (
    <div className="App">
      <h1>Markdown CheatSheet</h1>
      <Select
        value={selectedLang}
        onChange={handleLanguageChange}
        options={options}
        placeholder="Select a language"
      />
      <div className="markdown-content">
        {selectedLang && (
          <>
            <h2>{selectedLang.label}</h2>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
