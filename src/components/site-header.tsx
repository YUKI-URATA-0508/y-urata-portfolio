import { navigation } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Y.URATA トップ">
          Y.URATA
        </a>
        <nav aria-label="メインナビゲーション">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
