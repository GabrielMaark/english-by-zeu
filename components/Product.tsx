"use client";

const weeks = [
  {
    number: "01",
    label: "Semana 1",
    title: "Desbloqueio",
    subtitle: "Quebre o bloqueio mental de uma vez",
    description:
      "Você vai entender de onde vem o travamento e começar a quebrá-lo com exercícios práticos e diários.",
    topBorder: "border-t-4 border-red-500",
    accentColor: "text-red-500",
    icon: "🔓",
  },
  {
    number: "02",
    label: "Semana 2",
    title: "Ativação",
    subtitle: "Conversas do dia a dia",
    description:
      "Você vai praticar situações reais — se apresentar, pedir algo, responder perguntas — e perceber que já consegue.",
    topBorder: "border-t-4 border-navy-500",
    accentColor: "text-navy-500",
    icon: "⚡",
  },
  {
    number: "03",
    label: "Semana 3",
    title: "Fluência",
    subtitle: "Velocidade e naturalidade",
    description:
      "Você vai ganhar velocidade, naturalidade e confiança pra manter uma conversa real em inglês.",
    topBorder: "border-t-4 border-red-600",
    accentColor: "text-red-600",
    icon: "🚀",
  },
];

const includes = [
  {
    icon: "🎙️",
    title: "21 desafios de fala diários",
    description: "Um desafio por dia pra você praticar e postar no grupo.",
  },
  {
    icon: "👥",
    title: "Grupo exclusivo de alunos",
    description: "Comunidade ativa pra praticar, receber feedback e evoluir junto.",
  },
  {
    icon: "🎯",
    title: "Live de encerramento",
    description: "Na última semana, uma live ao vivo com o Zeu pra fechar o desafio com chave de ouro.",
  },
];

function Check() {
  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function Product() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 bg-navy-500/10 border border-navy-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-navy-500 text-sm font-semibold">O Produto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-balance text-navy-500">
            Isso não é um curso.{" "}
            <span className="text-red-500">É um&nbsp;treino.</span>
          </h2>
          <p className="text-navy-500/50 mt-4 text-lg max-w-2xl mx-auto text-pretty">
            Nada de aulas gravadas pra assistir sem fazer nada. Aqui você vai praticar todo dia, receber feedback ao vivo, evoluir junto com uma comunidade e sentir na pele que seu inglês é melhor do que você pensa.
          </p>
        </div>

        {/* Weeks timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {weeks.map((week, i) => (
            <div
              key={week.number}
              className={`reveal reveal-delay-${i + 1} bg-white border border-navy-500/10 ${week.topBorder} rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="text-2xl mb-4">{week.icon}</div>
              <div className={`text-xs font-bold uppercase tracking-widest ${week.accentColor} mb-2`}>
                {week.label}
              </div>
              <h3 className="text-2xl font-black text-navy-500 mb-1">{week.title}</h3>
              <p className={`text-sm font-semibold ${week.accentColor} mb-4`}>{week.subtitle}</p>
              <p className="text-navy-500/60 text-sm leading-relaxed">{week.description}</p>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="reveal">
          <h3 className="text-center text-2xl sm:text-3xl font-black mb-10 text-navy-500">
            O que está incluído
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {includes.map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 2) + 1} flex items-start gap-5 bg-surface border border-navy-500/10 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-navy-500/10 rounded-xl flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Check />
                    <h4 className="text-navy-500 font-bold text-base">{item.title}</h4>
                  </div>
                  <p className="text-navy-500/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
