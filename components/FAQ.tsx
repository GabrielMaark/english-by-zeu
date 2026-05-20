"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Precisa ter algum nível de inglês?",
    answer:
      "O desafio é ideal pra quem já entende inglês mas trava na hora de falar. Se você consegue acompanhar séries ou músicas, você está pronto.",
  },
  {
    question: "Quando começa?",
    answer:
      "Dia 2 de junho. Ao comprar você já entra no grupo imediatamente.",
  },
  {
    question: "Como vou receber o conteúdo?",
    answer:
      "Todo dia você recebe um áudio e um desafio de fala direto no grupo exclusivo de alunos.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Garantia total de 7 dias. Pediu reembolso, devolvemos sem perguntas.",
  },
  {
    question: "Precisa de quanto tempo por dia?",
    answer:
      "15 a 20 minutos por dia. É pouco tempo, mas é consistente — e é isso que faz a diferença.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-[#F4F6FB]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-navy-500/10 border border-navy-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-navy-500/70 text-sm font-medium">Dúvidas frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-500 text-balance">
            Perguntas&nbsp;frequentes
          </h2>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="bg-white border border-navy-500/10 rounded-2xl shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-base sm:text-lg text-navy-500 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      isOpen ? "bg-red-500 border-red-500 rotate-45" : "border-red-500/40"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 ${isOpen ? "text-white" : "text-red-500"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <p className="px-6 pb-6 text-navy-500/60 text-sm sm:text-base leading-relaxed border-t border-navy-500/5 pt-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="text-navy-500/40 text-sm">
            Ainda tem dúvidas?{" "}
            <a
              href="#"
              className="text-red-500 hover:text-red-600 underline underline-offset-2 transition-colors"
            >
              Fale com a gente pelo grupo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
