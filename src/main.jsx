import { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  FileText,
  Fingerprint,
  Landmark,
  LockKeyhole,
  Network,
  Route,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import './styles.css';

const exhibits = [
  {
    era: '1969',
    title: 'The Network Opens',
    icon: Network,
    claim: 'Security becomes a new kind of problem when machines begin trusting distant machines.',
    artifact: 'ARPANET first message log',
    detail:
      'The first ARPANET message made networked computing real. The exhibit begins here because cybersecurity is not just about malware; it is about trust stretched across distance.',
    source: 'DARPA',
  },
  {
    era: '1971',
    title: 'Self-Replication Appears',
    icon: Cpu,
    claim: 'The Creeper/Reaper story turns a network experiment into a warning about autonomous code.',
    artifact: 'Creeper worm and Reaper remover',
    detail:
      'Early worm behavior showed that code could move through connected systems. The defensive answer arrived almost immediately: find, contain, remove.',
    source: 'Guinness World Records',
  },
  {
    era: '1988',
    title: 'The Internet Gets Hurt',
    icon: Sparkles,
    claim: 'The Morris Worm makes computer security a public, legal, and operational concern.',
    artifact: 'Morris Worm case',
    detail:
      'A program intended to measure the internet spread widely enough to become a landmark incident. It exposed the cost of small assumptions in shared systems.',
    source: 'FBI',
  },
  {
    era: '2000s',
    title: 'Defense Becomes Routine',
    icon: LockKeyhole,
    claim: 'Security shifts from emergency response to daily administration, patching, identity, and monitoring.',
    artifact: 'Patch cycles, firewalls, SIEM dashboards',
    detail:
      'As businesses moved online, security became a normal operating discipline. The system administrator became one of the museum story’s quiet central figures.',
    source: 'Operational synthesis',
  },
  {
    era: '2018',
    title: 'Critical Infrastructure Enters Frame',
    icon: Landmark,
    claim: 'CISA formalizes cyber defense as infrastructure protection, not just IT cleanup.',
    artifact: 'Cybersecurity and Infrastructure Security Agency Act',
    detail:
      'The creation of CISA made the connection between software systems, physical systems, government, and private-sector coordination much harder to ignore.',
    source: 'CISA',
  },
  {
    era: '2020',
    title: 'Trust Becomes Conditional',
    icon: Fingerprint,
    claim: 'Zero trust reframes access around continuous verification instead of network location.',
    artifact: 'NIST SP 800-207',
    detail:
      'The modern museum turn is conceptual: assume breach, verify explicitly, limit access, and design systems around identity, devices, telemetry, and policy.',
    source: 'NIST',
  },
  {
    era: '2024',
    title: 'Governance Joins the Core',
    icon: ShieldCheck,
    claim: 'NIST CSF 2.0 adds Govern, making leadership and accountability part of cyber practice.',
    artifact: 'NIST Cybersecurity Framework 2.0',
    detail:
      'Cybersecurity becomes an organizational language. Risk, responsibility, and resilience are no longer side notes; they shape the whole tour.',
    source: 'NIST',
  },
];

const companionRoutes = [
  {
    label: 'Proof Room',
    icon: FileText,
    text:
      'Primary sources anchor the exhibit: DARPA for ARPANET, FBI for the Morris Worm, CISA for infrastructure, and NIST for zero trust and CSF 2.0.',
  },
  {
    label: 'Operator Room',
    icon: ShieldCheck,
    text:
      'This route follows the practical work: inventory, patching, identity, network segmentation, monitoring, incident response, and governance.',
  },
  {
    label: 'AI Process Room',
    icon: BookOpen,
    text:
      'The build process used AI as a research, planning, visual, drafting, critique, and implementation assistant, with human direction over scope and quality.',
  },
];

const principles = [
  'Design style: Swiss editorial modernism with a security operations edge.',
  'Brand archetype: Sage, because the exhibit teaches visitors to read systems clearly.',
  'Cialdini principle: Curiosity gap plus commitment. Visitors choose a route, then each exhibit answers the pressure created by the previous one.',
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = exhibits[activeIndex];
  const progress = useMemo(() => `${activeIndex + 1}`.padStart(2, '0'), [activeIndex]);

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand">
          <span className="brand-mark">RC</span>
          <span>Rise of Cybersecurity</span>
        </a>
        <nav aria-label="Museum navigation">
          <a href="#route">Route</a>
          <a href="#exhibits">Exhibits</a>
          <a href="#proof">Proof</a>
          <a href="#process">Process</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img src="/images/cybersecurity-museum-hero.png" alt="" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Digital Museum / Guided Exhibit</p>
          <h1>The Rise of Cybersecurity</h1>
          <p className="lede">
            A guided tour through the moment computers stopped being isolated tools and became
            infrastructure that had to be defended.
          </p>
          <div className="hero-actions">
            <a href="#route" className="button primary">
              Start the tour <ArrowRight size={18} />
            </a>
            <a href="#process" className="button secondary">
              View process <Route size={18} />
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Museum thesis">
          <span>Thesis</span>
          <p>
            Cybersecurity grows from a technical afterthought into an operating system for trust:
            network by network, incident by incident, policy by policy.
          </p>
        </aside>
      </section>

      <section className="route-section" id="route">
        <div className="section-kicker">Main Route</div>
        <div className="section-heading">
          <h2>Follow one argument, not a pile of facts.</h2>
          <p>
            The tour moves from connection, to exploitation, to routine defense, to governance.
            Companion rooms give proof and process without breaking the chronology.
          </p>
        </div>
        <div className="route-grid">
          {exhibits.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                className={`route-stop ${activeIndex === index ? 'active' : ''}`}
                key={item.title}
                onClick={() => setActiveIndex(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon size={22} />
                <strong>{item.title}</strong>
                <small>{item.era}</small>
              </button>
            );
          })}
        </div>
      </section>

      <section className="feature-exhibit" id="exhibits">
        <div className="exhibit-index">{progress}</div>
        <div>
          <p className="eyebrow">Featured Exhibit / {active.era}</p>
          <h2>{active.title}</h2>
          <p className="claim">{active.claim}</p>
        </div>
        <div className="artifact-card">
          <span>Artifact</span>
          <h3>{active.artifact}</h3>
          <p>{active.detail}</p>
          <small>Research anchor: {active.source}</small>
        </div>
      </section>

      <section className="companion" id="proof">
        <div className="section-kicker">Companion Routes</div>
        <div className="section-heading">
          <h2>Branch when a question needs proof.</h2>
          <p>
            The reference museum uses side routes without losing the main thread. This site uses
            the same pattern: proof, operators, and process are available, but the timeline remains
            the spine.
          </p>
        </div>
        <div className="companion-grid">
          {companionRoutes.map((route) => {
            const Icon = route.icon;
            return (
              <article className="companion-card" key={route.label}>
                <Icon size={24} />
                <h3>{route.label}</h3>
                <p>{route.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="system" id="process">
        <div>
          <div className="section-kicker">Design System</div>
          <h2>Visual logic, emotional logic, engagement logic.</h2>
        </div>
        <div className="system-list">
          {principles.map((principle) => (
            <p key={principle}>
              <CheckCircle2 size={18} />
              {principle}
            </p>
          ))}
        </div>
      </section>

      <section className="process-log">
        <div className="section-kicker">AI Orchestration</div>
        <h2>Structured workflow used for the build.</h2>
        <ol>
          <li>Studied the required design framework, reference repository, and example museum.</li>
          <li>Selected a topic with a real historical arc and operational relevance.</li>
          <li>Researched primary anchors from DARPA, FBI, CISA, and NIST.</li>
          <li>Planned the route as chronology first, companion rooms second.</li>
          <li>Generated one hero image, then built the React interface around it.</li>
          <li>Documented design choices, AI use, research, and revision logic in README.</li>
        </ol>
      </section>

      <footer>
        <p>Built as an informational museum experience with React, narrative planning, and AI-directed design support.</p>
        <a href="#top">Return to entry</a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
