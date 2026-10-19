import type { ReactNode } from "react";
import type { SkillIcon } from "@/data/portfolio";

export function Arrow({ long = false }: { long?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={long ? "0 0 50 16" : "0 0 20 16"}
      className={long ? "arrow arrow-long" : "arrow"}
      fill="none"
    >
      <path
        d={long ? "M1 8h46m-6-5 6 5-6 5" : "M2 8h14m-5-5 5 5-5 5"}
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="label-rule" />
      <span>{children}</span>
    </div>
  );
}

export function SideLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="side-label" aria-hidden="true">
      <span>{children}</span>
      <span className="side-rule" />
      <span>{number}</span>
    </div>
  );
}

export function FutureLink({
  children,
  href,
  filled = false,
}: {
  children: ReactNode;
  href?: string | null;
  filled?: boolean;
}) {
  const className = `text-link ${filled ? "contact-button" : ""}`;
  return href ? (
    <a href={href} className={className}>
      {children}
      <Arrow long />
    </a>
  ) : (
    <span
      className={className}
      role="link"
      aria-disabled="true"
      aria-label={`${children}（準備中）`}
    >
      {children}
      <Arrow long />
    </span>
  );
}

export function LineIcon({ name }: { name: SkillIcon }) {
  const paths: Record<SkillIcon, ReactNode> = {
    monitor: (
      <>
        <rect x="4" y="4" width="24" height="17" rx=".5" />
        <path d="M16 21v6m-6 0h12" />
      </>
    ),
    grid: (
      <>
        <path d="M5 4h8v9H5zM19 4h8v9h-8zM5 19h8v9H5zM19 19h8v9h-8z" />
      </>
    ),
    code: (
      <>
        <path d="m10 8-7 8 7 8m12-16 7 8-7 8M19 5l-6 22" />
      </>
    ),
    pen: (
      <>
        <path d="m5 23 1-6L22 2l6 6L12 23l-7 1Zm2-7 6 6M19 5l6 6M4 28h25" />
      </>
    ),
  };
  return (
    <svg
      className="skill-icon"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
