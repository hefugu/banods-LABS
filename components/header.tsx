import Link from "next/link";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/services", label: "サービス" },
  { href: "/works", label: "実績" },
  { href: "/pricing", label: "料金" },
  { href: "/contact", label: "問い合わせ" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="brand-name">Banods LABS</span>
          <span className="brand-sub">
            Discord構築・Bot開発・運営改善
          </span>
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary">
            相談する
          </Link>
        </nav>
      </div>
    </header>
  );
}