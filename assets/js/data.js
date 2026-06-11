// Modular content file.
// To add or remove website content later, edit these arrays instead of rebuilding the full site.

export const services = [
  {
    id: "operational-strategy",
    title: "Operational Strategy",
    tag: "Structure",
    summary: "Clarify roles, workflows, decision paths, and execution priorities.",
    details: "Useful when a team is doing many things but still feels blocked. We map the operating model, identify bottlenecks, and design a cleaner structure for execution.",
    deliverables: ["Operating map", "Responsibility matrix", "Priority roadmap", "Decision workflow"],
    examples: ["Founder operating model", "Internal approval flow", "New service launch plan"]
  },
  {
    id: "compliance-support",
    title: "Compliance Support",
    tag: "Risk",
    summary: "Organize requirements, policies, risks, and documentation into usable systems.",
    details: "Useful when rules, policies, or obligations exist across multiple sources and need to be translated into practical internal controls or documentation.",
    deliverables: ["Risk map", "Policy inventory", "Documentation checklist", "Review-ready summary"],
    examples: ["Vendor requirement review", "Internal compliance checklist", "Entity boundary notes"]
  },
  {
    id: "process-optimization",
    title: "Process Optimization",
    tag: "Efficiency",
    summary: "Reduce duplicated work, unclear handoffs, and avoidable operating costs.",
    details: "Useful when the organization already has a process, but it is slow, expensive, fragile, or too dependent on individual memory.",
    deliverables: ["Workflow audit", "Bottleneck analysis", "Cost-friction notes", "Improvement plan"],
    examples: ["Fulfillment cost review", "Kitchen / operations SOP", "Back-office process cleanup"]
  },
  {
    id: "research-analysis",
    title: "Research & Analysis",
    tag: "Intelligence",
    summary: "Turn complex information into concise research, options, and next steps.",
    details: "Useful when leadership needs to understand a market, policy, vendor, competitor, jurisdiction, or strategic option before committing resources.",
    deliverables: ["Research memo", "Comparative table", "Source log", "Recommendation brief"],
    examples: ["Vendor comparison", "Market scan", "Regulatory research brief"]
  },
  {
    id: "documentation-systems",
    title: "Documentation Systems",
    tag: "Memory",
    summary: "Create reusable SOPs, templates, checklists, and operating manuals.",
    details: "Useful when critical information lives in messages, individual memory, or scattered documents. We convert it into durable operating assets.",
    deliverables: ["SOP library", "Template set", "Role-based checklist", "Version-control plan"],
    examples: ["Restaurant SOP", "Client onboarding manual", "Internal compliance binder"]
  },
  {
    id: "decision-support",
    title: "Decision Support",
    tag: "Options",
    summary: "Compare tradeoffs, structure choices, and prepare clear recommendations.",
    details: "Useful when a decision has many moving parts: cost, risk, speed, operations, vendors, or stakeholder impact.",
    deliverables: ["Decision matrix", "Scenario map", "Tradeoff memo", "Recommended next steps"],
    examples: ["Build vs buy", "Vendor selection", "Expansion timing"]
  }
];

export const metrics = [
  { value: "01", label: "Find the real bottleneck before adding more work." },
  { value: "02", label: "Turn scattered information into repeatable systems." },
  { value: "03", label: "Create tools that survive turnover and pressure." },
  { value: "04", label: "Reduce decision cost without adding bureaucracy." }
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

export const packages = [
  {
    title: "Diagnostic Sprint",
    note: "Best first step",
    summary: "A focused review that turns a messy problem into a clear map, risk list, and next-step plan.",
    items: ["Intake call and document review", "Problem map and friction notes", "Priority roadmap", "Recommended work scope"]
  },
  {
    title: "System Build",
    note: "Most complete",
    summary: "A deeper engagement to build usable operating assets for a workflow, department, or launch.",
    items: ["Workflow and responsibility design", "SOPs, checklists, templates", "Decision and escalation logic", "Implementation support notes"],
    featured: true
  },
  {
    title: "Research Brief",
    note: "Fast clarity",
    summary: "A compact research deliverable for market, vendor, policy, compliance, or strategic decisions.",
    items: ["Source-backed research memo", "Comparison table", "Risk and opportunity notes", "Concise recommendation"]
  }
];

export const modules = [
  {
    icon: "M",
    title: "Map",
    text: "Visualize the operating structure, stakeholders, risks, gaps, and repeated decision points."
  },
  {
    icon: "S",
    title: "Systemize",
    text: "Convert repeated work into checklists, SOPs, templates, decision trees, and ownership rules."
  },
  {
    icon: "R",
    title: "Reduce risk",
    text: "Make unclear requirements, documentation gaps, and responsibility boundaries visible."
  },
  {
    icon: "E",
    title: "Execute",
    text: "Deliver practical next steps that can be used immediately by operators, founders, or teams."
  }
];

export const lensRows = [
  {
    title: "What is the current system doing?",
    text: "Not what people think it does, but how work actually moves through the organization."
  },
  {
    title: "Where does uncertainty create cost?",
    text: "Repeated questions, approvals, delays, rework, vendor confusion, and hidden risk."
  },
  {
    title: "Which decisions should become rules?",
    text: "A good operating system removes unnecessary decisions while preserving strategic judgment."
  },
  {
    title: "What should be documented once?",
    text: "If a team keeps explaining the same thing, that knowledge needs a reusable home."
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
  },
  {
    title: "Information is scattered",
    text: "Requirements, notes, vendor messages, and decisions live across different tools and people."
  },
  {
    title: "Leadership needs options",
    text: "A decision needs a clear comparison of cost, risk, timeline, and operational impact."
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
  },
  {
    title: "Modular work",
    text: "Projects are scoped so one useful component can be completed without overbuilding the whole organization."
  },
  {
    title: "Clean boundaries",
    text: "Research, strategy, and compliance support stay clearly separated from licensed legal representation."
  }
];

export const proofPoints = [
  {
    title: "For operators",
    text: "Translate daily friction into SOPs, checklists, roles, and exception rules."
  },
  {
    title: "For founders",
    text: "Turn unclear ideas into service structures, entity boundaries, roadmaps, and client-ready scopes."
  },
  {
    title: "For decision-makers",
    text: "Condense research and tradeoffs into clean options with practical next steps."
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
    title: "Compliance support is not legal representation",
    category: "Compliance",
    date: "2026-06-10",
    excerpt: "Research, documentation, risk mapping, and process support can help organizations prepare better while preserving professional boundaries."
  },
  {
    title: "A good process reduces decisions",
    category: "Systems",
    date: "2026-06-10",
    excerpt: "The point of structure is not to control everything. The point is to reduce repetitive decision cost so attention can move to higher-value work."
  },
  {
    title: "Why cheap operations become expensive",
    category: "Cost",
    date: "2026-06-10",
    excerpt: "A low-cost workflow can become expensive when every exception requires manual judgment, repeated communication, and emergency correction."
  },
  {
    title: "Documentation should be designed, not dumped",
    category: "Documentation",
    date: "2026-06-10",
    excerpt: "A folder full of files is not a system. Good documentation tells people what to do, when to do it, who owns it, and when to escalate."
  },
  {
    title: "Structure is a growth constraint",
    category: "Strategy",
    date: "2026-06-10",
    excerpt: "A company can sell more and still break internally if ownership, handoffs, and risk controls do not scale with demand."
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
  },
  {
    q: "Can content be added later?",
    a: "Yes. Services, packages, insights, FAQ items, and homepage modules are stored in assets/js/data.js so the site can grow without changing every page."
  }
];
