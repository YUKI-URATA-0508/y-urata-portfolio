import Image from "next/image";
import { images, works, skills, destinations } from "@/data/portfolio";
import { Arrow, FutureLink, LineIcon, SectionLabel, SideLabel } from "./ui";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="hero-image"
        style={{ objectPosition: images.hero.position }}
      />
      <div className="hero-wash" />
      <div className="container hero-content">
        <p className="portfolio-label">
          PORTFOLIO
          <span />
        </p>
        <h1 id="hero-heading">
          CREATE
          <br />A BETTER
          <br />
          <span>TOMORROW</span>.
        </h1>
        <p className="hero-copy">
          デザインとテクノロジーで、
          <br />
          より良い未来をつくる。
        </p>
        <a href="#about" className="scroll-indicator">
          <span />
          SCROLL
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="section about"
      aria-labelledby="about-heading"
    >
      <div className="container split-layout">
        <div className="about-copy" data-reveal>
          <SectionLabel number="01">ABOUT</SectionLabel>
          <h2 id="about-heading">
            つくることで、
            <br />
            価値を生み出す。
          </h2>
          <p className="body-copy">
            デザインとテクノロジーで、
            <br />
            日常の課題を解決し、価値ある体験をつくることを目指しています。
            <br />
            ユーザーに寄り添い、本質的な課題に向き合いながら、
            <br />
            企画から実装まで一貫して取り組んでいます。
          </p>
          <FutureLink>ABOUT ME</FutureLink>
        </div>
        <div className="image-with-label" data-reveal>
          <div className="about-image image-frame">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              sizes="(max-width: 760px) 90vw, 38vw"
              style={{ objectPosition: images.about.position }}
            />
          </div>
          <SideLabel number="01">ABOUT</SideLabel>
        </div>
      </div>
    </section>
  );
}

export function Works() {
  return (
    <section
      id="works"
      className="section works"
      aria-labelledby="works-heading"
    >
      <div className="container">
        <div className="works-intro" data-reveal>
          <div>
            <SectionLabel number="02">WORKS</SectionLabel>
            <h2 id="works-heading">
              課題を見つけ、
              <br />
              最適なかたちで解決する。
            </h2>
            <p className="body-copy">
              Webサイト・サービス・プロダクトなど、
              <br />
              幅広い領域での制作実績を掲載しています。
              <br />
              ユーザー視点とビジネス視点を両立したデザイン・開発を心がけています。
            </p>
          </div>
          <FutureLink>VIEW ALL</FutureLink>
        </div>
        <div className="work-grid">
          {works.map((work) => (
            <article className="work-card" key={work.id} data-reveal>
              <div
                className={`work-image image-frame ${work.monochrome ? "monochrome" : ""}`}
              >
                <Image
                  src={work.image}
                  alt={work.alt}
                  fill
                  sizes="(max-width: 760px) 90vw, 29vw"
                />
              </div>
              <div className="work-caption">
                <span className="work-number">{work.id}</span>
                <div>
                  <h3>
                    {work.href ? (
                      <a href={work.href}>{work.title}</a>
                    ) : (
                      work.title
                    )}
                  </h3>
                  <p>{work.description}</p>
                </div>
                <span className="work-arrow" aria-hidden="true">
                  <Arrow />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="section skills"
      aria-labelledby="skills-heading"
    >
      <div className="container skills-layout">
        <div data-reveal>
          <SectionLabel number="03">SKILLS</SectionLabel>
          <h2 id="skills-heading">
            アイデアを形にする
            <br />
            幅広いスキルセット。
          </h2>
          <p className="body-copy">
            デザインから開発まで、
            <br />
            一気通貫で対応できるスキルを活かし、
            <br />
            課題に合わせた最適なソリューションを提供します。
          </p>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title} data-reveal>
              <LineIcon name={skill.icon} />
              <h3>{skill.title}</h3>
              <p>
                {skill.lines.map((line, index) => (
                  <span key={line}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-heading"
    >
      <div className="container contact-layout">
        <div data-reveal>
          <SectionLabel number="04">CONTACT</SectionLabel>
          <h2 id="contact-heading">
            一緒に、新しい価値を
            <br />
            つくりませんか？
          </h2>
          <p className="body-copy">
            プロジェクトのご相談やお仕事のご依頼など、
            <br />
            お気軽にお問い合わせください。
          </p>
          <FutureLink
            filled
            href={destinations.email ? `mailto:${destinations.email}` : null}
          >
            CONTACT
          </FutureLink>
        </div>
        <div className="image-with-label" data-reveal>
          <div className="contact-image image-frame">
            <Image
              src={images.contact.src}
              alt={images.contact.alt}
              fill
              sizes="(max-width: 760px) 90vw, 46vw"
              style={{ objectPosition: images.contact.position }}
            />
          </div>
          <SideLabel number="04">CONTACT</SideLabel>
        </div>
      </div>
    </section>
  );
}
