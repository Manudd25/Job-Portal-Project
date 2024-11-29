import { useState } from "react";

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 bg-white text-blue-800 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        <span className="mr-2">
          🌐 {selectedLanguage}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul className="py-2">
            <li
              onClick={() => selectLanguage("English")}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedLanguage === "English" ? "font-bold text-blue-800" : ""
              }`}
            >
              English
            </li>
            <li
              onClick={() => selectLanguage("Deutsch")}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedLanguage === "Deutsch" ? "font-bold text-blue-800" : ""
              }`}
            >
              Deutsch
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
