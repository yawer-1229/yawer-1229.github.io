export function ResearchGraphic() {
  const nodes = Array.from({ length: 28 }, (_, i) => {
    const angle = i * 2.39996;
    const radius = 29 + Math.sqrt(i / 28) * 111;
    return { x: 200 + Math.cos(angle) * radius, y: 163 + Math.sin(angle) * radius * .84 };
  });
  return <div className="research-art" aria-hidden="true"><div className="art-label"><span className="tiny-dot"/> REPRESENTATIONS / CONNECTIONS</div><svg viewBox="0 0 400 335" fill="none"><defs><radialGradient id="glow"><stop stopColor="#b7c8ab" stopOpacity=".4"/><stop offset="1" stopColor="#b7c8ab" stopOpacity="0"/></radialGradient></defs><circle cx="200" cy="165" r="150" fill="url(#glow)"/>{[60, 104, 143].map(r => <ellipse key={r} cx="200" cy="163" rx={r} ry={r * .84} stroke="#728673" strokeOpacity=".19" strokeDasharray="3 6"/>)}{nodes.map((n, i) => nodes.slice(i + 1).map((m, j) => Math.hypot(n.x - m.x, n.y - m.y) < 88 ? <line key={`${i}-${j}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="#56775d" strokeOpacity=".28"/> : null))}{nodes.map((n,i) => <g key={i}><circle cx={n.x} cy={n.y} r={i % 4 === 0 ? 8 : 4} fill={i % 4 === 0 ? '#c7a36d' : '#44664e'} fillOpacity={i % 4 === 0 ? '.22' : '.12'}/><circle cx={n.x} cy={n.y} r={i % 4 === 0 ? 3.5 : 2} fill={i % 4 === 0 ? '#a3804e' : '#44664e'}/></g>)}<path d="M24 299h42l6-8 7 16 7-34 8 49 8-28 8 5h51l7-12 8 23 8-33 8 25 7-3h53l7-8 8 15 7-24 8 19 8-2h40" stroke="#6f8870" strokeWidth="1.3"/></svg><div className="art-footer"><span>Signals to understanding.</span><span>EEG / ML</span></div></div>;
}
