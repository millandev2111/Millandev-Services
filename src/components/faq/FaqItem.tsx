import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type FaqItemProps = {
  question: string;
  answer: string;
  index: number;
  openIndex: number | null;
  onToggle: (index: number) => void;
};

export default function FaqItem({ question, answer, index, openIndex, onToggle }: FaqItemProps) {
  const isOpen = openIndex === index;

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => onToggle(index)}
        className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-semibold text-lg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
