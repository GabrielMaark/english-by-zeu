"use client";

export default function Hero() {
  return (
    <section className="relative bg-navy-500 flex flex-col min-h-screen">
      {/* Emoji texture background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="absolute top-20 left-6 text-7xl opacity-10 rotate-12">🇺🇸</span>
        <span className="absolute top-36 right-10 text-8xl opacity-10 -rotate-6">🎧</span>
        <span className="absolute bottom-40 left-14 text-6xl opacity-10 rotate-6">💬</span>
        <span className="absolute bottom-24 right-14 text-6xl opacity-10 -rotate-12">🗣️</span>
        <span className="absolute top-1/2 -translate-y-1/2 right-1/4 text-[10rem] opacity-[0.04]">🌎</span>
        <span className="absolute top-24 left-1/2 -translate-x-1/2 text-5xl opacity-[0.07]">✈️</span>
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-24">
          <div className="flex flex-col items-center text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500 rounded-full px-5 py-2 mb-8 animate-[fadeIn_0.6s_ease-out_forwards]">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-sm font-bold tracking-wide uppercase">
                Turma começa 2 de junho
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-white text-balance animate-[fadeUp_0.6s_ease-out_0.1s_both]">
              Você entende inglês.{" "}
              <br className="hidden md:block" />
              Agora é hora de{" "}
              <span className="text-red-400">falar.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/80 max-w-lg mb-10 leading-relaxed text-pretty animate-[fadeUp_0.6s_ease-out_0.2s_both]">
              O desafio de 21 dias que vai destravar sua fala de uma vez por todas.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center gap-3 w-full sm:w-auto animate-[fadeUp_0.6s_ease-out_0.3s_both]">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-black text-base sm:text-lg uppercase tracking-wider px-10 sm:px-14 py-4 sm:py-5 rounded-full transition-all duration-200 shadow-2xl shadow-red-500/40 w-full sm:w-auto"
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
              <p className="text-white/50 text-sm">
                Turma começa dia 2 de junho{" "}
                <span className="text-white/30">•</span>{" "}
                Vagas limitadas
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Full-width banner — outside any container */}
      <div className="relative z-10 w-full" style={{ backgroundColor: "#E63329" }}>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center py-4">

          {/* Item 1 */}
          <div className="flex items-center justify-center gap-3 px-8 py-3 sm:py-0">
            <span className="text-xl">🗣️</span>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Saia do entender para o falar</p>
              <p className="text-white/70 text-xs">em 21 dias</p>
            </div>
          </div>

          {/* Divider desktop */}
          <div className="hidden sm:block w-px self-stretch bg-white/30 mx-4" />
          {/* Divider mobile */}
          <div className="sm:hidden h-px bg-white/30 mx-8" />

          {/* Item 2 */}
          <div className="flex items-center justify-center gap-3 px-8 py-3 sm:py-0">
            <span className="text-xl">📅</span>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Turma começa</p>
              <p className="text-white/70 text-xs">2 de junho</p>
            </div>
          </div>

          {/* Divider desktop */}
          <div className="hidden sm:block w-px self-stretch bg-white/30 mx-4" />
          {/* Divider mobile */}
          <div className="sm:hidden h-px bg-white/30 mx-8" />

          {/* Item 3 */}
          <div className="flex items-center justify-center gap-3 px-8 py-3 sm:py-0">
            <span className="text-xl">🔒</span>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Vagas limitadas</p>
              <p className="text-white/70 text-xs">garante a sua</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
