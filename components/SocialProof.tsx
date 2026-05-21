"use client";

const comments = [
  {
    name: "@mari.santos",
    avatar: "M",
    color: "bg-purple-500",
    text: "Cara, assisti o vídeo inteiro sem legenda e entendi TUDO. Nunca achei que fosse conseguir isso 😭",
    likes: "2.4k",
    platform: "TikTok",
  },
  {
    name: "@ana_ferreira",
    avatar: "A",
    color: "bg-pink-500",
    text: "Passei 3 anos estudando inglês e não falava nada. Em 3 semanas com o Zeu já consigo manter uma conversa.",
    likes: "3.1k",
    platform: "TikTok",
  },
  {
    name: "@carol_idiomas",
    avatar: "C",
    color: "bg-teal-500",
    text: "Fiz vários cursos caros e não saía do lugar. O método do Zeu é diferente de tudo que já vi. Recomendo demais!",
    likes: "2.2k",
    platform: "Instagram",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-red-500 text-sm font-semibold">Prova Social</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-balance text-navy-500">
            Você não está{" "}
            <span className="text-red-500">sozinho&nbsp;nessa.</span>
          </h2>
          <p className="text-navy-500/50 mt-4 text-lg max-w-2xl mx-auto text-pretty">
            Mais de 300 mil pessoas descobriram que entendem inglês mas travam na hora de falar. A dor é real. A solução também.
          </p>
        </div>

        {/* Video testimonial */}
        <div className="mb-12 flex flex-col items-center">
          <div className="w-full max-w-[300px] rounded-2xl overflow-hidden shadow-xl">
            <video
              controls
              className="w-full block"
              src="/depoimento-ana.mp4"
            />
          </div>
          <p className="mt-3 text-navy-500/50 text-sm text-center">
            Ana, aluna do método — mora nos Estados Unidos 🇺🇸
          </p>
        </div>

        {/* Comments grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {comments.map((comment, i) => (
            <div
              key={comment.name}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-surface border-l-4 border-red-500 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${comment.color} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {comment.avatar}
                  </div>
                  <div>
                    <p className="text-red-500 font-semibold text-sm">{comment.name}</p>
                    <p className="text-navy-500/40 text-xs">{comment.platform}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-navy-500/30 text-xs">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  {comment.likes}
                </div>
              </div>

              <p className="text-navy-500/70 text-sm leading-relaxed">{comment.text}</p>

              <div className="mt-4 flex items-center gap-1.5 text-red-500/50 text-xs">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                Comentário verificado
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 reveal flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-8 border-t border-navy-500/10">
          {[
            { icon: "⭐", text: "4.9/5 de avaliação média" },
            { icon: "🎯", text: "+300 mil visualizações" },
            { icon: "🔒", text: "Garantia de 7 dias" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-navy-500/50 text-sm">
              <span className="text-lg">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
