import {
  ArrowUpRight, Clock3, Image, Layers3, Plus, Sparkles, WandSparkles,
  LayoutTemplate, Upload, ChevronRight
} from "lucide-react";

const quickActions = [
  { title: "Social media post", size: "1080 × 1080", icon: Image },
  { title: "Story / Reel cover", size: "1080 × 1920", icon: Layers3 },
  { title: "YouTube thumbnail", size: "1280 × 720", icon: LayoutTemplate },
  { title: "Custom canvas", size: "Choose your size", icon: Plus }
];

const tools = [
  { title: "AI Image Generator", desc: "Turn a written idea into an image.", icon: Sparkles, tag: "AI GENERATION" },
  { title: "AI Photo Editor", desc: "Enhance and transform your photos.", icon: WandSparkles, tag: "AI EDITING" },
  { title: "Design Editor", desc: "Build a design from a blank canvas.", icon: Layers3, tag: "DESIGN" }
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <section className="welcome-row">
        <div>
          <p className="eyebrow">YOUR CREATIVE WORKSPACE</p>
          <h1>Create beyond <span>limits.</span></h1>
          <p className="subheading">Your ideas, your canvas. Make something remarkable today.</p>
        </div>
        <div className="welcome-badge"><Sparkles size={16}/> CREATIVE MODE</div>
      </section>

      <section className="hero-panel">
        <div className="hero-copy">
          <span className="hero-kicker"><span className="live-dot"/> YOUR NEXT IDEA STARTS HERE</span>
          <h2>Make your next<br/><em>great design.</em></h2>
          <p>Start with a blank canvas, explore templates, or bring an idea to life with AI.</p>
          <a className="primary-button" href="/design"><Plus size={17}/> Start creating</a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="art-glass"><div className="art-glyph">N<span>✳</span></div><div className="art-lines"><i/><i/><i/></div></div>
          <div className="art-spark spark-a">✦</div><div className="art-spark spark-b">✧</div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading"><div><p className="eyebrow">QUICK START</p><h2>What would you like to create?</h2></div><a href="/design">Open editor <ArrowUpRight size={15}/></a></div>
        <div className="quick-grid">
          {quickActions.map(({title,size,icon:Icon}) => (
            <button className="quick-card" key={title} onClick={() => window.location.href="/design"}>
              <span className="quick-icon"><Icon size={20}/></span><strong>{title}</strong><small>{size}</small>
              <ChevronRight className="quick-arrow" size={17}/>
            </button>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading"><div><p className="eyebrow">CREATIVE TOOLS</p><h2>Explore your studio</h2></div></div>
        <div className="tools-grid">
          {tools.map(({title,desc,icon:Icon,tag}) => (
            <a className="tool-card" href={title==="Design Editor"?"/design":title==="AI Image Generator"?"/ai-studio":"/ai-studio"} key={title}>
              <div className="tool-card-top"><span className="tool-icon"><Icon size={21}/></span><span className="tool-tag">{tag}</span></div>
              <strong>{title}</strong><p>{desc}</p><span className="tool-link">Explore tool <ArrowUpRight size={14}/></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block recent-block">
        <div className="section-heading"><div><p className="eyebrow">YOUR WORK</p><h2>Recent projects</h2></div><a href="/projects">View all <ArrowUpRight size={15}/></a></div>
        <div className="empty-state"><div className="empty-icon"><Clock3 size={23}/></div><strong>Your creative space is ready.</strong><p>Your saved designs will appear here when project saving is connected.</p><a href="/design"><Plus size={15}/> Create your first project</a></div>
      </section>

      <footer className="page-footer"><span>NEXUS CREATIVE STUDIO</span><span>CREATE BEYOND LIMITS.</span></footer>
    </div>
  );
}
