"use client";

const benefits = [
  "21 áudios diários com o Zeu",
  "21 desafios de fala progressivos",
  "Grupo exclusivo de alunos",
  "1 live por semana ao vivo",
  "Feedback real da comunidade",
  "Acesso imediato ao grupo após a compra",
];

function NavyCheck() {
  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-500 flex items-center justify-center">
      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function Offer() {
  return (
    <section id="oferta" className="py-24 px-4 bg-surface relative overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="reveal mb-10">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-500 text-sm font-semibold">Vagas limitadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 text-balance text-navy-500">
            Garanta sua&nbsp;vaga{" "}
            <span className="text-red-500">agora</span>
          </h2>
          <p className="text-navy-500/50 text-lg text-pretty">
            Turma começa dia <span className="text-navy-500 font-semibold">2 de junho</span>. Não deixa pra última hora.
          </p>
        </div>

        {/* Pricing card */}
        <div className="reveal reveal-delay-1 relative bg-white border-t-4 border-red-500 rounded-2xl p-8 sm:p-10 mb-6 shadow-2xl">
          {/* Best seller badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-black uppercase tracking-wider px-6 py-2 rounded-full shadow-md">
            Mais popular
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="text-navy-500/40 text-sm mb-1 line-through">De R$97,00</div>
            <div className="flex items-end justify-center gap-2">
              <span className="text-navy-500/60 text-2xl font-bold self-start mt-3">R$</span>
              <span className="text-6xl sm:text-7xl font-black text-navy-500 leading-none">29</span>
              <span className="text-navy-500/60 text-2xl font-bold self-end mb-2">,90</span>
            </div>
            <p className="text-red-500 text-sm font-semibold mt-2">
              Pagamento único • Sem mensalidade
            </p>
          </div>

          {/* Benefits list */}
          <ul className="text-left space-y-3 mb-8">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <NavyCheck />
                <span className="text-navy-500/80 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <a
            href="https://pay.kiwify.com.br/BFhYtDe"
            className="group flex items-center justify-center gap-3 w-full bg-red-500 hover:bg-red-600 text-white font-black text-base sm:text-lg uppercase tracking-wider py-5 rounded-full transition-all duration-200 shadow-lg shadow-red-500/30"
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

          {/* Guarantee */}
          <div className="mt-5 flex items-center justify-center gap-2 text-navy-500/40 text-xs text-center">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            <span>Garantia de satisfação de 7 dias. Se não gostar, devolvemos 100%.</span>
          </div>
        </div>

        {/* Guarantees */}
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-navy-500/50">
          {[
            { text: "Satisfação garantida por 7 dias" },
            { text: "Suporte pelo grupo" },
            { text: "Acesso imediato ao grupo" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <NavyCheck />
              {item.text}
            </div>
          ))}
        </div>

        {/* Security badges */}
        <div className="reveal reveal-delay-3 mt-8 flex items-center justify-center gap-3 text-navy-500/30 text-xs">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
          <span>Compra 100% segura</span>
          <span>•</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
          </svg>
          <span>Pagamento protegido</span>
        </div>
      </div>
    </section>
  );
}
