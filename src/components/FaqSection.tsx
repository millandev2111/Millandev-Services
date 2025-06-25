import { useState } from 'react';
import FaqItem from './faq/FaqItem';
import { faqs } from './faq/faqsData';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Preguntas <span className="text-blue-400">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Resuelvo las dudas más comunes de mis clientes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              index={index}
              openIndex={openFaq}
              onToggle={toggleFaq}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
