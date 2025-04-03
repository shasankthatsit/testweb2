import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  Calendar,
  Brain,
  UserCircle2,
  MessageSquare,
  Plus,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { path: '/reminders', icon: Bell, label: 'Reminders' },
  { path: '/study-planner', icon: Calendar, label: 'Study Planner' },
  { path: '/ai-companion', icon: Brain, label: 'AI Companion' },
  { path: '/personality-test', icon: UserCircle2, label: 'Personality Test' },
  { path: '/interview-questions', icon: MessageSquare, label: 'Interview Questions' },
  { path: '/additional-features', icon: Plus, label: 'Additional Features' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50"
          >
            <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mt-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                      isActive ? 'bg-gray-100 dark:bg-gray-700' : ''
                    }`
                  }
                >
                  <item.icon size={20} className="mr-3" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}