"use client";

export default function Footer() {
  return (
    <footer className="py-10 px-4 bg-navy-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center">
            <span className="text-white font-black text-xs">Z</span>
          </div>
          <span className="font-bold text-white/60 text-sm">
            Fala em 21 dias —{" "}
            <span className="text-white/40">English by Zeu</span>
          </span>
        </div>

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
