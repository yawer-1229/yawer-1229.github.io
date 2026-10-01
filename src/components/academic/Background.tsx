import { education, leadership, skills } from '../../data/portfolio';

export function Background() {
  return <>
    <section id="education" className="section background-section">
      <div className="container">
        <div className="section-heading"><div><div className="eyebrow"><span>03 /</span> Academic background</div><h2>Education</h2></div></div>
        <div className="education-list">{education.map(item => <article className="education-entry" key={item.level}>
          <div className="education-period"><span className="mono">{item.period}</span><span className="eyebrow">{item.level}</span></div>
          <div className="degree"><h3>{item.degree}</h3><p className="institution">{item.institution}</p><p>{item.location}</p><div className="degree-meta"><span>{item.result}</span></div><p className="coursework">{item.detail}</p></div>
        </article>)}</div>
      </div>
    </section>
    <section id="skills" className="section container">
      <div className="section-heading"><div><div className="eyebrow"><span>04 /</span> Technical background</div><h2>Skills & Technologies</h2></div></div>
      <div className="expanded-skills">{skills.map((skill, index) => <article className="skill-panel" key={skill.title}><span className="mono">0{index + 1}</span><h3>{skill.title}</h3><div className="tags">{skill.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
      <div className="learning-record"><h3 className="small-heading">Certifications & Training</h3><div className="learning-grid"><p><strong>Certified in Cybersecurity (CC) Training</strong><span>ISC²</span></p><p><strong>Cybersecurity Fundamentals</strong><span>HarvardX · edX</span></p><p><strong>Building RAG Agents with LLMs</strong><span>NVIDIA · December 2025</span></p><p><strong>Arduino Timers & Interrupts</strong><span>Udemy</span></p></div></div>
    </section>
    <section id="leadership" className="section background-section">
      <div className="container"><div className="section-heading"><div><div className="eyebrow"><span>05 /</span> Academic & community service</div><h2>Leadership & Activities</h2></div></div>
        <div className="leadership-list">{leadership.map(item => <article className="leadership-entry" key={item.title}><div><h3>{item.title}</h3><p className="institution">{item.organization}</p>{item.date && <span className="mono">{item.date}</span>}</div><p>{item.description}</p></article>)}</div>
      </div>
    </section>
  </>;
}
