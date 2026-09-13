/* ==================================================================
   pages.jsx — one component per route.
   ================================================================== */
import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  PROFILE, RESEARCH, EXPERIENCE, PROJECTS, AWARDS, VOLUNTEER,
} from "./data";
import {
  Reveal, SectionHead, PageHead, Tag, TagList, usePageMeta,
  ExperienceCard, ProjectCard, AwardCard,
  GitHubIcon, Arrow, BackArrow, MailIcon, LinkedInIcon, ExternalIcon,
} from "./ui";

const SITE = "Anaya";

/* ---------------- home ---------------- */

const Hero = () => (
  <section className="hero">
    <div className="orb orb-a" />
    <div className="orb orb-b" />
    <div className="hero-inner hero-split">
      {PROFILE.photo && (
        <div className="hero-photo">
          <img src={PROFILE.photo} alt={PROFILE.fullName} />
        </div>
      )}
      <div className="hero-text">
        <h1 className="hero-name">
          <span className="ln-1">{PROFILE.first}</span>
          {PROFILE.last && <span className="ln-2">{PROFILE.last}</span>}
        </h1>
        <p className="hero-tag">{PROFILE.tagline}</p>
        <div className="cta-row">
          <Link className="btn btn-primary" to="/research">See My Research <Arrow /></Link>
          <a className="btn btn-ghost" href={PROFILE.cv} download>View My Resume</a>
        </div>
      </div>
    </div>
  </section>
);

const ConnectPanel = () => (
  <Reveal>
    <div className="connect">
      <h2 className="connect-title">Let's Connect</h2>
      <p>
        For research collaborations, mentorship, or opportunities, or just to talk about
        machine learning, astronomy, or getting more girls into STEM, I'd love to hear from you.
      </p>
      <div className="cta-row">
        <Link className="btn btn-primary" to="/contact">Get in Touch <Arrow /></Link>
        <Link className="btn btn-ghost" to="/about">More About Me</Link>
      </div>
    </div>
  </Reveal>
);

/* Compact research card — used on the home page and on the Research
   index. Links through to that study's own page. */
const ResearchCard = ({ r }) => (
  <Link className="research-card" to={`/research/${r.slug}`}>
    <div className="research-card-top">
      <span className="research-status">{r.status}</span>
      <span className="research-dates">{r.dates}</span>
    </div>
    <h3>{r.title}</h3>
    <p className="research-sub">{r.subtitle}</p>
    <p className="card-org">{r.org}</p>
    <p className="card-desc">{r.lead}</p>
    <div className="tags">{r.tags.slice(0, 5).map((t) => <Tag key={t}>{t}</Tag>)}</div>
  </Link>
);

export function Home() {
  usePageMeta(
    `${SITE} | ML Research · Computer Vision · STEM Leadership`,
    "High school researcher applying machine learning to real-world science - image-derived disease severity analysis, hyperlocal air quality mapping, and founder of HERizon."
  );
  return (
    <>
      <Hero />

      <section className="section">
        <SectionHead icon="medal" title="Awards" to="/awards" />
        <div className="grid-2">
          {AWARDS.filter((a) => a.featured).map((a, i) => (
            <Reveal key={a.title} delay={i * 70}><AwardCard a={a} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead icon="flask" title="Research" to="/research" />
        <div className="stack">
          {RESEARCH.filter((r) => r.featured).map((r, i) => (
            <Reveal key={r.slug} delay={i * 80}><ResearchCard r={r} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead icon="code" title="Projects" to="/projects" />
        <div className="grid-3">
          {PROJECTS.filter((p) => p.featured).map((p, i) => (
            <Reveal key={p.name} delay={i * 90}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead icon="briefcase" title="Programmes" to="/work" />
        <div className="grid-3">
          {EXPERIENCE.filter((e) => e.featured).map((e, i) => (
            <Reveal key={e.slug} delay={i * 90}><ExperienceCard e={e} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead icon="people" title="Leadership & Impact" to="/volunteering" />
        <Reveal>
          <div className="vol-panel">
            <div className="vol-stats">
              {VOLUNTEER.stats.map((s) => (
                <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
              ))}
            </div>
            <div className="vol-orgs">
              {VOLUNTEER.orgs.map((o) => <span key={o.name} className="vol-chip">{o.name}</span>)}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section"><ConnectPanel /></section>
    </>
  );
}

/* ---------------- about ---------------- */

export function About() {
  usePageMeta(`About | ${SITE}`, "Background, research interests, and STEM leadership.");
  return (
    <section className="section">
      <PageHead icon="user" title="About" lead="" />
      <Reveal>
        <div className="about-split">
          <div className="prose">
            {PROFILE.bio.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          {PROFILE.aboutPhoto && (
            <figure className="about-photo">
              <img src={PROFILE.aboutPhoto} alt="" />
            </figure>
          )}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- research index ---------------- */

export function Research() {
  usePageMeta(
    `Research | ${SITE}`,
    "Image-derived severity analysis of rice leaf disease using DenseNet-121 and Grad-CAM, and a poster presented at IEEE MIT URTC 2025."
  );
  return (
    <section className="section">
      <PageHead icon="flask" title="Research" lead={PROFILE.tagline} />
      <div className="stack">
        {RESEARCH.map((r, i) => (
          <Reveal key={r.slug} delay={i * 80}><ResearchCard r={r} /></Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- research detail ---------------- */

export function ResearchDetail() {
  const { slug } = useParams();
  const r = RESEARCH.find((x) => x.slug === slug);
  usePageMeta(r ? `${r.title} | ${SITE}` : `Not found | ${SITE}`, r ? r.lead : undefined);
  if (!r) return <Navigate to="/research" replace />;

  return (
    <section className="section">
      <Link className="back-link" to="/research"><BackArrow /> Back to Research</Link>

      <Reveal>
        <article className="research-full" id={r.slug}>
          <header className="research-head">
            <div className="research-card-top">
              <span className="research-status">{r.status}</span>
              <span className="research-dates">{r.dates}</span>
            </div>
            <h1>{r.title}</h1>
            <p className="research-sub">{r.subtitle}</p>
            <p className="research-org">{r.org}</p>
          </header>

          <p className="research-lead">{r.lead}</p>

          {r.sections && r.sections.map((s) => (
            <div className="research-block" key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          ))}

          {r.pipeline && (
            <div className="research-block">
              <h3>The pipeline</h3>
              <ul className="bullets">
                {r.pipeline.map((p) => (
                  <li key={p}><span className="bullet-arrow">▸</span>{p}</li>
                ))}
              </ul>
            </div>
          )}

          {r.outcomes && (
            <div className="research-block">
              <h3>Outcomes</h3>
              <ul className="outcomes">
                {r.outcomes.map((o) => (
                  <li key={o}><span className="outcome-dot" />{o}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="research-foot">
            <div className="tags">{r.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            {r.link && (
              <a className="research-link" href={r.link} target="_blank" rel="noopener noreferrer">
                Read the paper <ExternalIcon size={14} />
              </a>
            )}
          </div>
        </article>
      </Reveal>
    </section>
  );
}

/* ---------------- programmes ---------------- */

export function Work() {
  usePageMeta(`Programmes | ${SITE}`, "Academic programmes, placements, and field visits.");
  return (
    <section className="section">
      <PageHead icon="briefcase" title="Programmes" lead="" />
      <div className="stack">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.slug} delay={i * 70}>
            <Link className="org-card" to={`/work/${e.slug}`}>
              <div className="org-head">
                {e.logo
                  ? <img className="org-logo" src={e.logo} alt="" />
                  : <span className="org-logo org-logo-fallback">{e.org.charAt(0)}</span>}
                <div>
                  <h3>{e.org}</h3>
                  <p className="org-loc">{e.location}</p>
                </div>
              </div>
              <div className="org-body">
                <div className="org-role-row">
                  <h4>{e.role}</h4>
                  <div className="org-role-meta">
                    <span className="badge badge-solid">{e.badge.toUpperCase()}</span>
                    <span>{e.dates}</span>
                  </div>
                </div>
                <p className="card-desc">{e.desc}</p>
                {e.bullets && (
                  <ul className="bullets small">
                    {e.bullets.map((b) => <li key={b}><span className="bullet-arrow">▸</span>{b}</li>)}
                  </ul>
                )}
                <TagList items={e.tags} />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WorkDetail() {
  const { slug } = useParams();
  const e = EXPERIENCE.find((x) => x.slug === slug);
  usePageMeta(e ? `${e.role} — ${e.org} | ${SITE}` : `Not found | ${SITE}`);
  if (!e) return <Navigate to="/work" replace />;

  return (
    <section className="section">
      <Link className="back-link" to="/work"><BackArrow /> Back to Programmes</Link>

      <header className="detail-head">
        {e.logo
          ? <img className="detail-logo" src={e.logo} alt="" />
          : <span className="detail-logo org-logo-fallback">{e.org.charAt(0)}</span>}
        <div>
          <h1>{e.role}</h1>
          <p className="detail-org">{e.org}</p>
          <div className="detail-meta">
            <span className="badge">{e.badge}</span>
            <span>{e.dates}</span>
            <span>{e.location}</span>
          </div>
        </div>
      </header>

      <Reveal>
        <div className="detail-panel">
          <h2>Overview</h2>
          <p>{e.desc}</p>

          {e.bullets && (
            <>
              <h2>Key Contributions &amp; Outcomes</h2>
              <ul className="bullets">
                {e.bullets.map((b) => <li key={b}><span className="bullet-arrow">▸</span>{b}</li>)}
              </ul>
            </>
          )}

          <h2>Areas &amp; Skills</h2>
          <div className="tags centered">{e.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- projects ---------------- */

export function Projects() {
  usePageMeta(`Projects | ${SITE}`, "Machine learning, full-stack, and IoT projects.");
  return (
    <section className="section">
      <PageHead icon="code" title="Projects" lead="" />
      <div className="stack">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}><ProjectCard p={p} wide /></Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- awards ---------------- */

export function Awards() {
  usePageMeta(`Awards | ${SITE}`, "Academic, essay, and co-curricular recognition.");
  return (
    <section className="section">
      <PageHead icon="medal" title="Awards" lead="" />
      <div className="grid-2">
        {AWARDS.map((a, i) => (
          <Reveal key={a.title} delay={i * 70}><AwardCard a={a} showDetail /></Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- leadership ---------------- */

export function Volunteering() {
  usePageMeta(`Leadership & Impact | ${SITE}`, "Founding HERizon, tutoring, and community leadership.");
  return (
    <section className="section">
      <PageHead icon="people" title="Leadership & Impact" lead="" />
      <Reveal>
        <div className="vol-panel">
          <div className="vol-stats">
            {VOLUNTEER.stats.map((s) => (
              <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="grid-2 spaced">
        {VOLUNTEER.orgs.map((o, i) => (
          <Reveal key={o.name} delay={i * 80}>
            <article className="card">
              <h3>{o.name}</h3>
              <p className="card-org">{o.role}</p>
              <p className="card-desc">{o.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- contact form ----------------

   The contact form is a Google Form embedded in an iframe. No API key,
   no third-party form service, nothing to configure in the code.

   To change the questions, edit the form at forms.google.com — the
   site picks up the change automatically.

   Responses land in the form's Responses tab. Make sure email alerts
   are on: Responses -> three dots -> "Get email notifications for new
   responses". Without that, submissions arrive silently. */

const GOOGLE_FORM_URL = "https://forms.gle/D1hbBMBfRpkfPCtS8";

function ContactForm() {
  return (
    <div className="form-embed">
      <iframe src={GOOGLE_FORM_URL} title="Contact form" loading="lazy">
        Loading the contact form…
      </iframe>
    </div>
  );
}

/* ---------------- contact ---------------- */

export function Contact() {
  const ghHandle = PROFILE.socials.github?.split("/").filter(Boolean).pop();
  const hasCards = PROFILE.email || PROFILE.socials.linkedin || PROFILE.socials.github;
  usePageMeta(`Contact | ${SITE}`, "Get in touch about research collaborations, mentorship, or opportunities.");
  return (
    <section className="section">
      <PageHead icon="user" title="Get in Touch" lead="For research collaborations, mentorship, or opportunities." />

      <Reveal>
        <ContactForm />
      </Reveal>

      {hasCards && (
        <Reveal delay={120}>
          <div className="contact-grid spaced">
            {PROFILE.email && (
              <a className="contact-card" href={`mailto:${PROFILE.email}`}>
                <MailIcon size={22} />
                <div><h4>Email</h4><p>{PROFILE.email}</p></div>
              </a>
            )}
            {PROFILE.socials.linkedin && (
              <a className="contact-card" href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon size={22} />
                <div><h4>LinkedIn</h4><p>Professional updates and messages</p></div>
              </a>
            )}
            {PROFILE.socials.github && (
              <a className="contact-card" href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon size={22} />
                <div><h4>GitHub</h4><p>@{ghHandle}</p></div>
              </a>
            )}
          </div>
        </Reveal>
      )}
    </section>
  );
}

/* ---------------- 404 ---------------- */

export function NotFound() {
  usePageMeta(`Page not found | ${SITE}`);
  return (
    <section className="section notfound">
      <h1>404</h1>
      <p>That page doesn't exist. It may have been renamed or moved.</p>
      <Link className="btn btn-primary" to="/">Back to home <Arrow /></Link>
    </section>
  );
}
