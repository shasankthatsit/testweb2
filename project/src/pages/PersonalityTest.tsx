import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How do you prefer to solve complex problems?",
    options: [
      "Break them down into smaller parts",
      "Look for patterns and connections",
      "Discuss with others",
      "Trust your intuition"
    ]
  },
  {
    id: 2,
    text: "In a group project, what role do you naturally take?",
    options: [
      "Leader and organizer",
      "Creative idea generator",
      "Detail-oriented executor",
      "Mediator and team player"
    ]
  },
  {
    id: 3,
    text: "How do you prefer to learn new concepts?",
    options: [
      "Through practical examples",
      "Through theoretical understanding",
      "Through visual aids",
      "Through discussion and debate"
    ]
  },
  {
    id: 4,
    text: "What motivates you most in your studies?",
    options: [
      "Achieving specific goals",
      "Understanding complex concepts",
      "Helping others learn",
      "Personal growth and development"
    ]
  },
  {
    id: 5,
    text: "How do you handle deadlines and pressure?",
    options: [
      "Plan ahead and work systematically",
      "Work best under pressure",
      "Balance work with breaks",
      "Adapt and adjust as needed"
    ]
  }
];

const personalityTypes = {
  "00000": "Analytical Problem Solver",
  "11111": "Creative Innovator",
  "22222": "Practical Implementer",
  "33333": "Collaborative Leader"
};

export default function PersonalityTest() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getPersonalityType = () => {
    const key = answers.join('');
    return personalityTypes[key as keyof typeof personalityTypes] || "Balanced Achiever";
  };

  const getRecommendations = () => {
    const type = getPersonalityType();
    switch (type) {
      case "Analytical Problem Solver":
        return [
          "Focus on research-oriented roles",
          "Consider specializing in system architecture",
          "Explore data science and analytics",
          "Develop technical writing skills"
        ];
      case "Creative Innovator":
        return [
          "Consider product development roles",
          "Explore UI/UX design",
          "Focus on innovative problem-solving",
          "Develop presentation skills"
        ];
      case "Practical Implementer":
        return [
          "Focus on software development",
          "Consider DevOps roles",
          "Develop project management skills",
          "Learn agile methodologies"
        ];
      default:
        return [
          "Explore team leadership roles",
          "Consider consulting positions",
          "Develop communication skills",
          "Focus on project coordination"
        ];
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto py-8 px-4"
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        {!showResults ? (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Engineering Personality Test
              </h1>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {questions[currentQuestion].text}
              </h2>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full p-4 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center"
                  >
                    {answers[currentQuestion] === index ? (
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 mr-3" />
                    )}
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Your Results
            </h1>
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-2">
                You are a {getPersonalityType()}
              </h2>
              <p className="text-blue-700 dark:text-blue-400">
                This personality type indicates strong capabilities in engineering and technical fields.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Career Recommendations
              </h3>
              <div className="grid gap-4">
                {getRecommendations().map((recommendation, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow border border-gray-100 dark:border-gray-600"
                  >
                    <p className="text-gray-800 dark:text-gray-200">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers([]);
                setShowResults(false);
              }}
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Take Test Again
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}