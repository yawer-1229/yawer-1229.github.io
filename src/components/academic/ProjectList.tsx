import { useState } from 'react';
import { ArrowUpRight, Cloud, Cpu, ShieldCheck, Terminal } from 'lucide-react';
import { projects, profile } from '../../data/portfolio';
const filters = ['All work', 'AI & Security', 'Systems', 'Embedded'];
const icons = { security: ShieldCheck, cloud: Cloud, terminal: Terminal, embedded: Cpu };
export function ProjectList() {
  const [filter, setFilter] = useState('All work');
  const shown = projects.filter(project => filter === 'All work' || project.category === filter);
  return <><div className="project-toolbar"><div className="filters" role="group" aria-label="Filter projects">{filters.map(item => <button key={item} aria-pressed={item === filter} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="project-count" aria-live="polite">{String(shown.length).padStart(2, '0')} projects</span></div><div className="project-grid">{shown.map(project => {
    const Icon = icons[project.kind as keyof typeof icons];
    return <article className="project-card" key={project.title}><div className="project-top"><span className={`project-icon ${project.kind}`}><Icon size={23} strokeWidth={1.5}/></span><span className="mono">{project.year}</span></div><span className="eyebrow project-category">{project.note}</span><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.url ?? profile.github} target="_blank" rel="noreferrer">{project.url ? 'View repository' : 'Explore GitHub profile'}<ArrowUpRight size={16}/></a></article>;
  })}</div></>;
}
