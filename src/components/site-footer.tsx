import { destinations, navigation } from "@/data/portfolio";

function SocialIcon({
  kind,
  href,
}: {
  kind: "x" | "instagram";
  href: string | null;
}) {
  const label = kind === "x" ? "X" : "Instagram";
  const icon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      {kind === "x" ? (
        <path d="M4 3h4l12 18h-4L4 3Zm16 0L4 21" />
      ) : (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
        </>
      )}
    </svg>
  );
  return href ? (
    <a href={href} aria-label={label} target="_blank" rel="noreferrer">
      {icon}
    </a>
  ) : (
    <span role="link" aria-disabled="true" aria-label={`${label}（準備中）`}>
      {icon}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="#top" className="brand">
          Y.URATA
        </a>
        <nav aria-label="フッターナビゲーション">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-end">
          <div className="socials">
            <SocialIcon kind="x" href={destinations.x} />
            <SocialIcon kind="instagram" href={destinations.instagram} />
          </div>
          <small>
            © {new Date().getFullYear()} Y.URATA. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
