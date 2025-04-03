import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bell,
  Calendar,
  Brain,
  UserCircle2,
  MessageSquare,
  Plus
} from 'lucide-react';

const features = [
  {
    path: '/reminders',
    icon: Bell,
    title: 'Reminders',
    description: 'Stay on top of your tasks with smart notifications'
  },
  {
    path: '/study-planner',
    icon: Calendar,
    title: 'Study Planner',
    description: 'AI-powered study schedule organization'
  },
  {
    path: '/ai-companion',
    icon: Brain,
    title: 'AI Study Companion',
    description: 'Your personal AI study assistant'
  },
  {
    path: '/personality-test',
    icon: UserCircle2,
    title: 'Personality Test',
    description: 'Discover your strengths and career path'
  },
  {
    path: '/interview-questions',
    icon: MessageSquare,
    title: 'Interview Questions',
    description: 'Prepare for campus placements'
  },
  {
    path: '/additional-features',
    icon: Plus,
    title: 'Additional Features',
    description: 'Explore more tools for success'
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Engineering Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your all-in-one platform for academic excellence
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={feature.path}
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          alt="Students collaborating"
          className="rounded-xl mx-auto shadow-lg"
        />
      </motion.div>
    </div>
  );
}