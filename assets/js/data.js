export const services = [
  {
    id: "operational-strategy",
    title: "Operational Strategy",
    tag: "Structure",
    summary: "Clarify roles, workflows, decision paths, and execution priorities.",
    details: "Useful when a team is doing many things but still feels blocked. We map the operating model, identify bottlenecks, and design a cleaner structure for execution.",
    deliverables: ["Operating map", "Responsibility matrix", "Priority roadmap", "Decision workflow"]
  },
  {
    id: "compliance-support",
    title: "Compliance Support",
    tag: "Risk",
    summary: "Organize requirements, policies, risks, and documentation into usable systems.",
    details: "Useful when rules, policies, or obligations exist across multiple sources and need to be translated into practical internal controls or documentation.",
    deliverables: ["Risk map", "Policy inventory", "Documentation checklist", "Review-ready summary"]
  },
  {
    id: "process-optimization",
    title: "Process Optimization",
    tag: "Efficiency",
    summary: "Reduce duplicated work, unclear handoffs, and avoidable operating costs.",
    details: "Useful when the organization already has a process, but it is slow, expensive, fragile, or too dependent on individual memory.",
    deliverables: ["Workflow audit", "Bottleneck analysis", "Cost-friction notes", "Improvement plan"]
  },
  {
    id: "research-analysis",
    title: "Research & Analysis",
    tag: "Intelligence",
    summary: "Turn complex information into concise research, options, and next steps.",
    details: "Useful when leadership needs to understand a market, policy, vendor, competitor, jurisdiction, or strategic option before committing resources.",
    deliverables: ["Research memo", "Comparative table", "Source log", "Recommendation brief"]
  }
];

export const processSteps = [
  {
    title: "Intake",
    text: "Collect the messy facts: goals, constraints, stakeholders, current documents, deadlines, and risks."
  },
  {
    title: "Map",
    text: "Convert the situation into a clear structure: responsibilities, workflows, risk points, and missing information."
  },
  {
    title: "Design",
    text: "Build practical tools: checklists, operating maps, process notes, decision trees, or implementation roadmaps."
  },
  {
    title: "Transfer",
    text: "Deliver a usable system so the organization can continue without depending on informal memory."
  }
];

export const useCases = [
  {
    title: "Founder needs structure",
    text: "A business has momentum but decisions, workflows, and documents are scattered."
  },
  {
    title: "Team keeps repeating work",
    text: "The same questions, approvals, and mistakes keep happening because the process is not visible."
  },
  {
    title: "New project has risk",
    text: "A new service, partnership, or operation requires policy, documentation, and responsibility mapping."
  },
  {
    title: "Costs feel irrational",
    text: "The current process works, but the unit economics or operational flow need redesign."
  }
];

export const values = [
  {
    title: "Clarity first",
    text: "A good system should make the problem easier to see before it tries to solve everything."
  },
  {
    title: "Practical over theatrical",
    text: "Deliverables should be usable by real operators, not just impressive in a slide deck."
  },
  {
    title: "Risk-aware execution",
    text: "Compliance and risk are treated as operating realities, not abstract checkboxes."
  },
  {
    title: "Scalable documentation",
    text: "A process should survive turnover, growth, and pressure without relying on one person's memory."
  }
];

export const insights = [
  {
    title: "The first sign of operational debt",
    category: "Operations",
    date: "2026-06-10",
    excerpt: "When a team needs a meeting to remember how a basic process works, the problem is not people — it is missing structure."
  },
  {
    title: "Compliance support is not the same as legal representation",
    category: "Compliance",
    date: "2026-06-10",
    excerpt: "Research, documentation, risk mapping, and process support can help organizations prepare better while preserving professional boundaries."
  },
  {
    title: "A good process reduces decisions",
    category: "Systems",
    date: "2026-06-10",
    excerpt: "The point of structure is not to control everything. The point is to reduce repetitive decision cost so attention can move to higher-value work."
  }
];

export const faqs = [
  {
    q: "Can Kairesa provide legal advice?",
    a: "No. Kairesa provides strategy, operational, research, and compliance support. When legal advice is required, we recommend review by a qualified licensed attorney."
  },
  {
    q: "What should I send first?",
    a: "Send a plain-language description of the problem, the deadline, the people involved, and any documents or systems currently being used."
  },
  {
    q: "Can you work on a small project?",
    a: "Yes. The website is designed around modular support, so a focused sprint can be scoped around one problem area."
  },
  {
    q: "How does the form send email?",
    a: "By default, it opens a prepared email through your mail app. If you add a free Formspree endpoint in assets/js/config.js, the form can send directly from the webpage."
  }
];
