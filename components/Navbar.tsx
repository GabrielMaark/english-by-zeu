export default function Navbar() {
  return (
    <nav className="w-full bg-navy-500 shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-xl text-white tracking-tight"
          style={{ fontFamily: "var(--font-brand)", fontWeight: 900 }}
        >
          English by <span className="text-red-400">Zeu</span>
        </span>

        {/* CTA */}
        <a
          href="https://pay.kiwify.com.br/BFhYtDe"
          className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm"
        >
          Garantir minha vaga
        </a>
      </div>
    </nav>
  );
}
