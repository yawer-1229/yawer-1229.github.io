import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../../data/portfolio';

const links = [['about', 'About'], ['research', 'Research'], ['projects', 'Projects'], ['education', 'Education'], ['skills', 'Skills'], ['leadership', 'Leadership'], ['contact', 'Contact']];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');
  useEffect(() => {
    const update = () => {
      const current = [...links].reverse().find(([id]) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 180);
      setActive(current?.[0] ?? 'about');
    };
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('keydown', close);
    update();
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('keydown', close); };
  }, []);
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#about" onClick={() => setOpen(false)} aria-label="Yawer Nazir home"><span>Yawer Nazir<span className="brand-caption">CYBERSECURITY & AI</span></span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'}>{links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cv" href={profile.cv} target="_blank" rel="noreferrer">CV <ArrowUpRight size={14}/></a></nav>
  </div></header>;
}
