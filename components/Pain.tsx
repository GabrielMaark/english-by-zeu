"use client";

const pains = [
  {
    headline: "Entendo tudo, mas na hora de falar, trava.",
    description: "",
  },
  {
    headline: "Só consigo entender com legenda.",
    description: "",
  },
  {
    headline: "Sei inglês, mas me sinto abaixo do meu nível real.",
    description: "",
  },
];

export default function Pain() {
  return (
    <section className="py-24 px-4 bg-surface relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-balance text-navy-500">
            Você se identifica com&nbsp;isso?
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
                É que você nunca treinou a fala do jeito certo. E isso tem solução em 21 dias.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
