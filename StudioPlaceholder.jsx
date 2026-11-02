import { ArrowLeft, Construction, Sparkles } from "lucide-react";

export default function StudioPlaceholder({ title }) {
  return (
    <section className="placeholder-page">
      <div className="placeholder-icon"><Construction size={28}/></div>
      <p className="eyebrow">FOUNDATION 01</p>
      <h1>{title}</h1>
      <p>This section has been reserved in the project architecture. Its working features will be added in the next development phases.</p>
      <div className="placeholder-note"><Sparkles size={17}/> The foundation is ready for the next build step.</div>
      <a href="/" className="back-link"><ArrowLeft size={16}/> Back to dashboard</a>
    </section>
  );
}
