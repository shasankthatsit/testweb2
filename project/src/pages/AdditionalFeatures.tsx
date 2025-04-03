import React from 'react';
import { ArrowLeft, BookOpen, Calculator, Calendar, Clock, FileText, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Calculator,
    title: "GPA Calculator",
    description: "Calculate your semester and cumulative GPA easily",
    comingSoon: true
  },
  {
    icon: Calendar,
    title: "Exam Schedule",
    description: "Keep track of your upcoming exams and deadlines",
    comingSoon: true
  },
  {
    icon: Clock,
    title: "Pomodoro Timer",
    description: "Stay focused with customizable study sessions",
    comingSoon: true
  },
  {
    icon: FileText,
    title: "Notes Repository",
    description: "Store and organize your study materials",
    comingSoon: true
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Connect with peers for collaborative learning",
    comingSoon: true
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Access curated educational resources",
    comingSoon: true
  }
];

export default function AdditionalFeatures() {
  const navigate = useNavigate();

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

      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Additional Features
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore more tools to enhance your academic journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-bl-lg">
              Coming Soon
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}