"use client";

const pains = [
  {
    headline: "Entendo tudo, mas na hora de falar, trava.",
    description:
      "Você assiste série sem legenda, entende podcast, lê artigos em inglês. Mas quando alguém te fala em inglês, a cabeça congela e as palavras não saem.",
  },
  {
    headline: "Só consigo entender com legenda.",
    description:
      "Sem a legenda amarela embaixo, parece que o inglês some. Você depende dela como uma muleta e sabe que isso te limita — mas não sabe como mudar.",
  },
  {
    headline: "Leio e escrevo bem, mas falar parece impossível.",
    description:
      "Nas provas você ia bem. No WhatsApp em inglês você se vira. Mas numa conversa ao vivo? O pânico bate. É como se o inglês travasse na garganta.",
  },
];

export default function Pain() {
  return (
    <section className="py-24 px-4 bg-surface relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-balance text-navy-500">
            Você se identifica{" "}
            <span className="text-navy-500/40">com&nbsp;isso?</span>
          </h2>
        </div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <div
              key={pain.headline}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-4`}
            >
              <span className="text-2xl flex-shrink-0">❌</span>
              <h3 className="text-navy-500 font-bold text-base sm:text-lg leading-snug">
                "{pain.headline}"
              </h3>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className="mt-16 reveal text-center">
          <div className="inline-block bg-white border-l-4 border-red-500 rounded-2xl px-8 py-6 max-w-2xl shadow-md text-left">
            <p className="text-lg sm:text-xl font-semibold text-navy-500 leading-relaxed text-pretty">
              O problema não é seu inglês.{" "}
              <span className="text-red-500">
                É o bloqueio mental que nenhum curso te ensinou a quebrar.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
