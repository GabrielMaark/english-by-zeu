export default function Navbar() {
  return (
    <nav className="w-full bg-navy-500 shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center">
        {/* Logo */}
        <span
          className="text-xl text-white tracking-tight"
          style={{ fontFamily: "var(--font-brand)", fontWeight: 900 }}
        >
          English by <span className="text-red-400">Zeu</span>
        </span>
      </div>
    </nav>
  );
}
