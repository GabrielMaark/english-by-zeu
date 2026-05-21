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
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-red-500">
                <img src="/foto.png" alt="Zeu" className="w-full h-full object-cover" />
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
              <span className="text-red-400">entende esse&nbsp;travamento</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 text-pretty">
              Sou professor de inglês há mais de 3 anos e ajudo alunos a desenvolverem confiança e fluência através da conversação. Minhas aulas são personalizadas de acordo com os objetivos, nível e interesses de cada aluno, tornando o aprendizado mais leve, natural e eficiente. Meu foco é ensinar o inglês da vida real, trabalhando comunicação, pronúncia e compreensão de forma prática e dinâmica.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
