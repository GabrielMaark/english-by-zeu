"use client";

export default function AboutZeu() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-navy-500">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/10 rounded-full -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Photo */}
          <div className="reveal flex-shrink-0">
            <div className="relative">
              {/* Red glow */}
              <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full scale-150" aria-hidden="true" />

              {/* Photo container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-red-500 bg-navy-600">
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center">
                    <span className="text-4xl font-black text-red-400">Z</span>
                  </div>
                  <span className="text-white/30 text-sm">Foto do Zeu</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-600 to-transparent" />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-red-500 text-white font-black text-xs px-4 py-2 rounded-full shadow-lg">
                +10k seguidores
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-white/80 text-sm font-medium">Sobre o Zeu</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight text-balance">
              Criado por quem{" "}
              <span className="text-red-400">ensina&nbsp;diferente</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 text-pretty">
              Zeu é professor de inglês e criador do canal{" "}
              <span className="text-red-400 font-semibold">English by Zeu</span>
              , com mais de <strong className="text-white">10 mil seguidores</strong>{" "}
              nas redes sociais. Seu método é baseado em{" "}
              <strong className="text-white">listening real do dia a dia</strong> — séries,
              músicas, conversas reais — em vez de gramática decorada e exercícios
              sem contexto.
            </p>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 text-pretty">
              O "Fala em 21 dias" nasceu depois de ver centenas de comentários de
              pessoas que{" "}
              <span className="text-white font-semibold">
                entendem tudo mas não conseguem falar nada
              </span>
              . Ele construiu um método específico pra resolver exatamente esse
              problema.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "+10k", label: "seguidores" },
                { number: "+300k", label: "visualizações" },
                { number: "21", label: "dias de método" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 border border-white/15 rounded-2xl p-4 text-center"
                >
                  <div className="text-xl sm:text-2xl font-black text-red-400">
                    {stat.number}
                  </div>
                  <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
