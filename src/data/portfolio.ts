import { publicPath } from "@/lib/paths";

/** Replace local files or update these paths. Keep crop adjustments alongside each image. */
export const images = {
  hero: {
    src: publicPath("/images/hero-architecture.jpg"),
    alt: "空へ向かって伸びる建築物",
    position: "center 46%",
  },
  about: {
    src: publicPath("/images/about-workspace.jpg"),
    alt: "光が差し込む静かなワークスペース",
    position: "center",
  },
  contact: {
    src: publicPath("/images/contact-mountains.jpg"),
    alt: "幾重にも連なる山の稜線",
    position: "center 48%",
  },
} as const;

export interface Work {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  monochrome: boolean;
  /** Set only when a real detail page is implemented. */
  href?: string;
}

export const works: Work[] = [
  {
    id: "01",
    title: "Branding",
    description: "ブランド設計 / CI・VI",
    image: publicPath("/images/work-branding.jpg"),
    alt: "ブルーの光が映る抽象的なテクノロジーイメージ",
    monochrome: false,
  },
  {
    id: "02",
    title: "Web Design",
    description: "Webサイト制作",
    image: publicPath("/images/work-web.jpg"),
    alt: "ノートパソコンのキーボード",
    monochrome: true,
  },
  {
    id: "03",
    title: "Product Design",
    description: "プロダクトデザイン",
    image: publicPath("/images/work-product.jpg"),
    alt: "スマートフォンのプロダクトイメージ",
    monochrome: true,
  },
];

export type SkillIcon = "monitor" | "grid" | "code" | "pen";
export interface Skill {
  title: string;
  lines: string[];
  icon: SkillIcon;
}
export const skills: Skill[] = [
  {
    title: "Web Design",
    lines: ["UI/UX設計・Webサイト制作", "デザインシステム"],
    icon: "monitor",
  },
  {
    title: "UI/UX Design",
    lines: ["ユーザーリサーチ・UI設計", "プロトタイピング"],
    icon: "grid",
  },
  {
    title: "Front-End",
    lines: ["HTML / CSS / JavaScript", "React / Next.js"],
    icon: "code",
  },
  {
    title: "Graphic Design",
    lines: ["ロゴ / グラフィック", "ビジュアルデザイン"],
    icon: "pen",
  },
];

export const navigation = [
  { id: "about", label: "ABOUT" },
  { id: "works", label: "WORKS" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
] as const;

/** Configure these when real contact details are supplied. Unset destinations stay disabled. */
export const destinations: {
  email: string | null;
  x: string | null;
  instagram: string | null;
} = {
  email: null,
  x: null,
  instagram: null,
};
