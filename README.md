# The Rise of Cybersecurity

Museum-style final project built as a guided digital exhibit about how cybersecurity grew from early network trust problems into modern infrastructure, governance, and zero-trust practice.

## Topic

The museum topic is **The Rise of Cybersecurity**. The main story is that cybersecurity did not appear as one invention. It developed through a sequence of pressures: networks connected machines, self-replicating code exposed new risks, major incidents forced public attention, routine defense became part of system administration, and modern frameworks turned cyber risk into an organizational responsibility.

## Required Reference Notes

I studied the required design system, reference repository, and example museum site before building.

- The design system emphasizes audience, vibe, visual direction, proof, page planning, and publishing. I adapted that into a museum plan with a clear audience, visual system, proof room, and route structure.
- The reference repository emphasizes spec-driven AI work, bounded implementation, QA passes, and durable documentation. I adapted that into a lighter workflow: research, route planning, visual system, build, review, and README documentation.
- The example museum site uses a main chronological route with companion routes for evidence, people, and concepts. I adapted that pattern into a cybersecurity chronology with companion rooms for proof, operators, and AI process.

## Design Style

The design style is **Swiss editorial modernism with a security operations edge**.

This shows up through a strong grid, high contrast, restrained typography, exhibit labels, numbered route stops, disciplined spacing, and a limited palette of charcoal, off-white, signal red, cyan, brass, and green.

## Brand Archetype

The brand archetype is **Sage**.

The site is meant to feel intelligent, clear, and investigative. It does not treat cybersecurity as fear-based spectacle. It teaches visitors how to read systems, trace causes, and understand why security became essential infrastructure.

## Cialdini Principle

The site uses **commitment and consistency** with a **curiosity gap**.

Visitors are invited to start a guided route. Each exhibit answers a pressure created by the previous exhibit, which encourages the visitor to continue so the larger argument stays intact.

## Museum Structure

- **Homepage / entry:** introduces the thesis and establishes the museum atmosphere.
- **Main route:** seven chronological exhibit stops from ARPANET to NIST CSF 2.0.
- **Featured exhibit panel:** lets the visitor select each stop and read its artifact, claim, and explanation.
- **Companion routes:** proof room, operator room, and AI process room.
- **Process section:** explains how the project was orchestrated with AI under human direction.

## Research Anchors

The exhibit uses these sources as factual anchors:

- DARPA ARPANET history: https://www.darpa.mil/news/features/arpanet
- FBI Morris Worm case: https://www.fbi.gov/history/cases-and-criminals/morris-worm
- CISA establishment notice: https://www.cisa.gov/news-events/alerts/2018/11/19/cybersecurity-and-infrastructure-security-agency
- NIST Zero Trust Architecture SP 800-207: https://www.nist.gov/publications/zero-trust-architecture-0
- NIST Cybersecurity Framework 2.0: https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework
- Guinness World Records Creeper worm entry: https://www.guinnessworldrecords.com/world-records/106836-first-computer-worm

## AI Orchestration Process

AI was used intentionally across separate stages:

1. **Interpretation:** broke the assignment brief into requirements: research, planning, narrative, visual system, archetype, persuasion, AI process, README, and hosted-ready site.
2. **Reference study:** reviewed the required design system, reference repository, and example museum structure.
3. **Topic selection:** selected cybersecurity because it supports a guided historical experience and aligns with system administration knowledge.
4. **Research planning:** identified primary source anchors and turned them into exhibit stops.
5. **Visual planning:** chose a Swiss editorial security style, Sage archetype, and commitment/curiosity engagement strategy.
6. **Image generation:** generated one museum hero image to support the exhibit mood.
7. **Implementation:** built the React interface with route stops, responsive layout, SEO metadata, and README documentation.
8. **Revision logic:** checked that the site is not a portfolio, not random pages, and not just facts. The final structure is a curated visitor path.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Submission

Submit the GitHub repository link and the hosted Vercel live site link.
