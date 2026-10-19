import { SiteHeader } from "@/components/site-header";
import { Hero, About, Works, Skills, Contact } from "@/components/sections";
import { SiteFooter } from "@/components/site-footer";
import { MotionProvider } from "@/components/motion-provider";

export default function Home() {
  return (
    <MotionProvider>
      <div id="top">
        <a className="skip-link" href="#main">
          本文へスキップ
        </a>
        <SiteHeader />
        <main id="main">
          <Hero />
          <About />
          <Works />
          <Skills />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </MotionProvider>
  );
}
