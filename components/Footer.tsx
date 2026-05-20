"use client";

export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-navy-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span
          className="text-xl text-white/70 tracking-tight"
          style={{ fontFamily: "var(--font-brand)", fontWeight: 900 }}
        >
          English by <span className="text-red-400">Zeu</span>
        </span>

        {/* Links */}
        <div className="flex items-center gap-6 text-white/30 text-xs">
          <a href="#" className="hover:text-white/70 transition-colors">
            Termos de uso
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            Política de privacidade
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            Contato
          </a>
        </div>

        <p className="text-white/20 text-xs">
          © 2025 English by Zeu. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
