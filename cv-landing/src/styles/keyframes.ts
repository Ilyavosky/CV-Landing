export const globalKeyframes = `
  @keyframes heroLine   { from { width: 0 } to { width: 100% } }
  @keyframes blink      { 0%,100% { opacity:1 } 50% { opacity:0 } }
  @keyframes fadeInUp   { from { opacity:0; transform:translateY(30px) } to { opacity:1; transform:translateY(0) } }
  @keyframes scanline   { 0% { transform:translateY(-100%) } 100% { transform:translateY(100vh) } }
  @keyframes drift      {
    0%,100% { transform:translate(0,0) scale(1) }
    33%     { transform:translate(40px,-30px) scale(1.05) }
    66%     { transform:translate(-25px,20px) scale(0.95) }
  }
  @keyframes glitch {
    0%   { clip-path:inset(0 0 98% 0); transform:translate(-4px,0) }
    10%  { clip-path:inset(30% 0 50% 0); transform:translate(4px,0) }
    20%  { clip-path:inset(80% 0 5% 0); transform:translate(-2px,0) }
    30%  { clip-path:inset(0 0 0 0); transform:translate(0,0) }
    100% { clip-path:inset(0 0 0 0); transform:translate(0,0) }
  }
  @keyframes pulseGlow {
    0%,100% { opacity: 0.03; transform: scale(1) }
    50%     { opacity: 0.08; transform: scale(1.02) }
  }
  @keyframes borderPulse {
    0%,100% { border-color: rgba(255,255,255,0.06) }
    50%     { border-color: rgba(255,255,255,0.12) }
  }
  @keyframes slideInFromLeft {
    from { opacity:0; transform:translateX(-80px) }
    to   { opacity:1; transform:translateX(0) }
  }
  @keyframes slideInFromRight {
    from { opacity:0; transform:translateX(80px) }
    to   { opacity:1; transform:translateX(0) }
  }
  @keyframes revealLine {
    from { transform: scaleX(0) }
    to   { transform: scaleX(1) }
  }
  @keyframes floatIcon {
    0%,100% { transform: translateY(0) rotate(0deg) }
    50%     { transform: translateY(-8px) rotate(3deg) }
  }

  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0 }
  html  { scroll-behavior:smooth }
  body  { background:#000; color:#fff; font-family:'DM Sans',sans-serif }

  ::-webkit-scrollbar       { width:4px }
  ::-webkit-scrollbar-track { background:#000 }
  ::-webkit-scrollbar-thumb { background:#00ff88; border-radius:2px }

  .hero-name { animation: fadeInUp 1s ease 0.3s both; transition: transform 0.4s ease, text-shadow 0.4s ease; }
  .hero-name:hover { transform: scale(1.02) translateY(-4px); text-shadow: 0 0 60px rgba(0,255,136,0.2) !important; }

  a { color:inherit; text-decoration:none }
  a:hover { color:#00ff88 }
`;
