/* ==================================================================
   ui.jsx — icons, small primitives, and reusable cards.
   ================================================================== */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ---------------- icons ---------------- */

const Ico = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);

export const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 20c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19 5.8a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.8 0C5.8 1.9 4.7 2.2 4.7 2.2A4.9 4.9 0 0 0 4.6 5.8 5.2 5.2 0 0 0 3.2 9.4c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V23"/>
  </svg>
);

export const ScholarIcon = ({ size = 18 }) => (
  <Ico size={size} d={<><path d="M22 10 12 4 2 10l10 6 10-6Z"/><path d="M6 12.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"/></>} />
);

export const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05A4.2 4.2 0 0 1 16.6 8.7c4 0 4.7 2.5 4.7 5.8V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9Z"/>
  </svg>
);

export const CFIcon = ({ size = 18 }) => (
  <Ico size={size} d={<><rect x="3" y="10" width="4" height="10" rx="1"/><rect x="10" y="4" width="4" height="16" rx="1"/><rect x="17" y="13" width="4" height="7" rx="1"/></>} />
);

export const Chevron = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"
       strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 5, opacity: 0.75 }}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Arrow = ({ size = 15 }) => (
  <Ico size={size} d={<><path d="M5 12h14M13 6l6 6-6 6"/></>} />
);

export const BackArrow = ({ size = 15 }) => (
  <Ico size={size} d={<><path d="M19 12H5M11 18l-6-6 6-6"/></>} />
);

export const DownloadIcon = ({ size = 14 }) => (
  <Ico size={size} d={<><path d="M12 3v12M7 11l5 5 5-5M4 21h16"/></>} />
);

export const ExternalIcon = ({ size = 14 }) => (
  <Ico size={size} d={<><path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></>} />
);

export const MailIcon = ({ size = 18 }) => (
  <Ico size={size} d={<><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6.5 9 6.5 9-6.5"/></>} />
);

export const SECTION_ICONS = {
  briefcase: <Ico size={26} d={<><rect x="2.5" y="7" width="19" height="13" rx="2"/><path d="M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><path d="M2.5 12.5h19"/></>} />,
  code: <Ico size={26} d={<><path d="m9 7-6 5 6 5"/><path d="m15 7 6 5-6 5"/></>} />,
  medal: <Ico size={26} d={<><circle cx="12" cy="15" r="5.5"/><path d="M8.5 10 6 2.5M15.5 10 18 2.5"/></>} />,
  book: <Ico size={26} d={<><path d="M4 4.5A2 2 0 0 1 6 2.5h13v17H6a2 2 0 0 0-2 2Z"/></>} />,
  people: <Ico size={26} d={<><circle cx="9" cy="8" r="3.4"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M17 5.2a3.4 3.4 0 0 1 0 6.6M18 14.5a6.4 6.4 0 0 1 3.5 5.5"/></>} />,
  spark: <Ico size={26} d={<><path d="M12 2.5 14.2 9l6.8 2.2-6.8 2.2L12 20l-2.2-6.6L3 11.2 9.8 9Z"/></>} />,
  user: <Ico size={26} d={<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>} />,
  bookSm: <Ico size={14} d={<><path d="M4 4.5A2 2 0 0 1 6 2.5h13v17H6a2 2 0 0 0-2 2Z"/></>} />,
  trophy: <Ico size={26} d={<><path d="M7 4h10v5a5 5 0 0 1-10 0Z"/><path d="M7 6H4.5a2.5 2.5 0 0 0 2.5 4M17 6h2.5a2.5 2.5 0 0 1-2.5 4"/><path d="M12 14v4M9 21h6"/></>} />,
};

/* ---------------- primitives ---------------- */

export function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal${shown ? " in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* Sets <title> and the meta description for each route. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}

export const SectionHead = ({ icon, title, to }) => (
  <div className="sec-head">
    <h2><span className="sec-ico">{SECTION_ICONS[icon]}</span>{title}</h2>
    {to && <Link className="view-all" to={to}>View All <Arrow /></Link>}
  </div>
);

export const PageHead = ({ icon, title, lead }) => (
  <header className="page-head">
    <h1><span className="sec-ico">{SECTION_ICONS[icon]}</span>{title}</h1>
    {lead && <p>{lead}</p>}
  </header>
);

export const Tag = ({ children }) => <span className="tag">{children}</span>;

export const TagList = ({ items, max = 5 }) => {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? items : items.slice(0, max);
  const hidden = items.length - max;
  return (
    <div className="tags flat">
      {shown.map((t) => <Tag key={t}>{t}</Tag>)}
      {hidden > 0 && (
        <button
          type="button"
          className="tag tag-more"
          onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); setExpanded(!expanded); }}
        >
          {expanded ? "−" : `+${hidden}`}
        </button>
      )}
    </div>
  );
};

/* ---------------- cards ---------------- */

export const ExperienceCard = ({ e }) => (
  <Link className="card card-link" to={`/work/${e.slug}`}>
    <h3>{e.role}</h3>
    <p className="card-org">{e.org}</p>
    <p className="card-meta">{e.meta} <span className="badge">{e.badge}</span></p>
    <p className="card-desc">{e.desc}</p>
    <div className="tags">{e.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
  </Link>
);

export const ProjectCard = ({ p, wide = false }) => (
  <article className={`card${wide ? " card-wide" : ""}`}>
    <div className="card-top">
      <div>
        <h3>{p.name}</h3>
        <p className="card-org">{p.org}</p>
      </div>
      {wide && <span className="date-pill">{p.meta}</span>}
    </div>
    {!wide && <p className="card-meta">{p.meta}</p>}
    <p className="card-desc">{p.desc}</p>
    {wide && p.bullets && (
      <ul className="bullets">
        {p.bullets.map((b) => <li key={b}><span className="bullet-arrow">→</span>{b}</li>)}
      </ul>
    )}
    <div className="card-foot">
      <div className="tags">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      <div className="icon-links">
        {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer" aria-label="Source code"><GitHubIcon size={16} /></a>}
        {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live site"><ExternalIcon size={16} /></a>}
      </div>
    </div>
  </article>
);

export const AwardCard = ({ a, showDetail = false }) => {
  const inner = (
    <>
      <span className="award-ico">{a.icon}</span>
      <div>
        <h4>{a.title}</h4>
        <p>{a.meta}</p>
        {showDetail && a.detail && <p className="award-detail">{a.detail}</p>}
      </div>
    </>
  );
  return a.link ? (
    <a className="award" href={a.link} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <article className="award">{inner}</article>
  );
};

export const ArticleRow = ({ a }) => {
  const inner = (
    <>
      <div>
        <h3>{a.title}</h3>
        <p className="article-meta">
          <span className="article-outlet">{SECTION_ICONS.bookSm} {a.outlet}</span>
          {a.date && <span className="article-date">{a.date}</span>}
        </p>
      </div>
      {a.link && <span className="icon-box"><ExternalIcon size={16} /></span>}
    </>
  );
  return a.link ? (
    <a className="article-row" href={a.link} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <article className="article-row">{inner}</article>
  );
};