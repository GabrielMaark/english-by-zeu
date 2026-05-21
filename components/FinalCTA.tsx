"use client";

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-red-500">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="reveal inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white text-sm font-semibold">
            Última chamada — Vagas limitadas
          </span>
        </div>

        {/* Headline */}
        <h2 className="reveal reveal-delay-1 text-4xl sm:text-5xl font-black leading-[1.05] mb-8 text-white text-balance">
          O inglês que você já entende{" "}
          <span className="text-white/80">
            tá esperando pra sair da sua&nbsp;boca.
          </span>
        </h2>

        {/* Subtext */}
        <p className="reveal reveal-delay-2 text-white/80 text-lg sm:text-xl mb-12 max-w-xl mx-auto leading-relaxed text-pretty">
          Você já deu o trabalho duro de aprender. Agora é só destravar. 21 dias. R$29,90. Uma vaga.
        </p>

        {/* CTA */}
        <div className="reveal reveal-delay-3 flex flex-col items-center gap-4">
          <a
            href="https://pay.kiwify.com.br/BFhYtDe"
            className="group relative inline-flex items-center justify-center gap-3 bg-white hover:bg-white/90 text-red-500 font-black text-lg sm:text-xl uppercase tracking-wider px-10 sm:px-14 py-5 sm:py-6 rounded-full transition-all duration-200 shadow-2xl shadow-red-600/30 w-full sm:w-auto"
          >
            <span>GARANTIR MINHA VAGA</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="text-white">✓</span> Garantia de 7 dias
            </span>
            <span className="hidden sm:block text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-white">✓</span> Acesso imediato ao grupo
            </span>
            <span className="hidden sm:block text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-white">✓</span> Compra segura
            </span>
          </div>
        </div>

        {/* Bottom urgency */}
        <div className="reveal reveal-delay-4 mt-16 inline-flex items-center gap-3 bg-white/15 border border-white/25 rounded-2xl px-6 py-4">
          <span className="text-white text-xl">⚡</span>
          <p className="text-white/90 text-sm">
            <strong className="text-white">Vagas se esgotando.</strong>{" "}
            Vagas se esgotando. Garante a sua agora.
          </p>
        </div>
      </div>
    </section>
  );
}
