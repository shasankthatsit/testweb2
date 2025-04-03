import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    category: "Technical",
    question: "What is the difference between process and thread?",
    answer: "A process is an independent program with its own memory space, while a thread is a lightweight unit of execution within a process that shares the same memory space with other threads in the same process."
  },
  {
    id: 2,
    category: "Technical",
    question: "Explain SOLID principles in object-oriented programming.",
    answer: "SOLID stands for Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion principles. These principles help create more maintainable, flexible, and scalable software."
  },
  {
    id: 3,
    category: "HR",
    question: "Where do you see yourself in 5 years?",
    answer: "This question evaluates your career goals and ambitions. Focus on professional growth, leadership aspirations, and continuous learning in your field."
  },
  {
    id: 4,
    category: "Aptitude",
    question: "If a train travels 300 km in 4 hours, what is its speed in m/s?",
    answer: "Speed = 300 km/4 h = 75 km/h\nConverting to m/s: 75 * (1000/3600) = 20.83 m/s"
  },
  {
    id: 5,
    category: "Technical",
    question: "What is the time complexity of QuickSort?",
    answer: "Average case: O(n log n)\nWorst case: O(n²)\nBest case: O(n log n)"
  }
];

const categories = ["All", "Technical", "HR", "Aptitude"];

export default function InterviewQuestions() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredQuestions = questions.filter(q => {
    const matchesCategory = selectedCategory === "All" || q.category === selectedCategory;
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Interview Questions
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredQuestions.map((q) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                className="w-full text-left p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-blue-500 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                        {q.category}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                      {q.question}
                    </h3>
                  </div>
                </div>
              </button>
              {expandedId === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-white dark:bg-gray-800"
                >
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {q.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}