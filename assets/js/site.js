(() => {
  'use strict';

  const SITE = {
    email: 'hello@kairesa.com',
    domain: 'https://kairesa.com/',
    name: 'Kairesa'
  };

  const NAV = [
    ['capabilities.html', 'Capabilities', 'capabilities'],
    ['work.html', 'Work', 'work'],
    ['methodology.html', 'Methodology', 'methodology'],
    ['about.html', 'About', 'about'],
    ['insights.html', 'Insights', 'insights']
  ];

  const DISCIPLINES = {
    compliance: {
      type: 'Primary capability', title: 'Compliance', short: 'Regulatory clarity, mapped to action.',
      problem: 'Regulatory obligations are fragmented across jurisdictions, official sources, product lines, and internal owners. Without a controlled structure, teams rely on ad-hoc interpretation and incomplete evidence trails.',
      build: 'Requirement maps, regulatory source hierarchies, obligations registers, control matrices, documentation trackers, escalation logic, and market-entry preparation systems.',
      deliverables: ['AML / KYC / KYB workflow maps', 'CDD / EDD decision trees', 'UBO and beneficial ownership data models', 'OFAC, PEP, sanctions and adverse-media screening checkpoints', 'Policy-to-control mapping', 'Regulatory horizon-scanning register', 'Risk, issue and remediation tracker'],
      connects: ['Legal Operations', 'Research & Advisory', 'Operations'],
      terms: ['AML', 'KYC', 'KYB', 'CDD', 'EDD', 'UBO', 'PEP', 'OFAC', 'RBA', 'Control Matrix']
    },
    operations: {
      type: 'Primary capability', title: 'Operations', short: 'Daily work, made repeatable.',
      problem: 'High-throughput environments become fragile when performance depends on individual memory, undocumented handoffs, and improvised exception handling.',
      build: 'Operating architectures that connect roles, process sequence, capacity, inventory, quality, safety, handoffs, and exception response.',
      deliverables: ['RACI and responsibility matrix', 'Standard work and SOP architecture', 'Critical control points', 'Shift handover protocols', 'Capacity and queue-management logic', 'Reorder points and safety-stock rules', 'Exception paths and escalation matrix'],
      connects: ['Digital Systems', 'Cost Intelligence', 'Compliance'],
      terms: ['RACI', 'Standard Work', 'SLA', 'KPI', 'Critical Controls', 'Safety Stock', 'Escalation Matrix']
    },
    digital: {
      type: 'Primary capability', title: 'Digital Systems', short: 'Tools designed around the real workflow.',
      problem: 'Generic software often forces a specific workflow into a broad product. Teams then recreate the missing logic in spreadsheets, messages, and memory.',
      build: 'Purpose-built websites, dashboards, planning systems, automation, databases, calendar integrations, and lightweight internal tools.',
      deliverables: ['Information architecture', 'Responsive interface and accessibility system', 'State and progress model', 'Data schema and validation logic', 'Event-driven workflow automation', 'Modular component architecture', 'Deployment and handoff documentation'],
      connects: ['Operations', 'Compliance', 'Research & Advisory'],
      terms: ['IA', 'Data Schema', 'State Model', 'API', 'ICS', 'Automation', 'WCAG', 'Progressive Enhancement']
    },
    cost: {
      type: 'Supporting capability', title: 'Cost Intelligence', short: 'Opaque prices, decomposed into decisions.',
      problem: 'A unit price or supplier quote hides its structure. Teams cannot tell which variables actually move the outcome or where redesign is possible.',
      build: 'Cost decomposition, supplier comparison, logistics and packaging models, cost-to-serve analysis, break-even logic, and scenario modelling.',
      deliverables: ['Total landed cost model', 'Activity-based costing structure', 'Fixed / variable cost separation', 'Sensitivity and scenario analysis', 'Vendor scorecard and TCO comparison', 'Break-even and margin model', 'Cost-driver dashboard'],
      connects: ['Operations', 'Research & Advisory', 'Digital Systems'],
      terms: ['TCO', 'Landed Cost', 'ABC', 'Cost-to-Serve', 'Sensitivity', 'Break-even', 'DIM Weight']
    },
    legal: {
      type: 'Supporting capability', title: 'Legal Operations', short: 'Documents connected to execution.',
      problem: 'Commercial and administrative documents fail when drafting, approval, version control, and the actual delivery process are disconnected.',
      build: 'Document intake, first-draft commercial materials, clause structures, approval workflows, matter files, research memoranda, and version-control systems.',
      deliverables: ['Contract intake and issue list', 'Clause library and fallback positions', 'Approval and signature matrix', 'Document naming and version protocol', 'Matter lifecycle tracker', 'Evidence and retention structure', 'Client communication scripts'],
      connects: ['Compliance', 'Operations', 'Research & Advisory'],
      terms: ['Intake', 'Playbook', 'Clause Matrix', 'Approval Gate', 'Version Control', 'Matter Lifecycle']
    },
    advisory: {
      type: 'Supporting capability', title: 'Research & Advisory', short: 'Evidence structured for decision-making.',
      problem: 'Decisions stall when information is unstructured, contradictory, untraceable, or disconnected from the question that must be answered.',
      build: 'Policy, market, industry, competitor, feasibility, supplier, pricing, and risk research with source hierarchies and decision matrices.',
      deliverables: ['Primary-source research map', 'Evidence and citation matrix', 'Market and competitor scan', 'Supplier due-diligence framework', 'Feasibility and risk analysis', 'Decision matrix and recommendation logic', 'Phased implementation roadmap'],
      connects: ['Compliance', 'Cost Intelligence', 'Digital Systems'],
      terms: ['Source Hierarchy', 'Evidence Matrix', 'Triangulation', 'Due Diligence', 'Feasibility', 'Decision Matrix']
    }
  };

  const PROJECTS = [
    {
      id: 'operational', page: 'case-operational.html', index: '01', category: 'Systems',
      title: 'Operational System Architecture',
      summary: 'A complete operating system for a high-throughput physical service environment where quality, speed, staffing, inventory, safety, and handoffs had to function as one coordinated structure.',
      challenge: 'Daily performance depended too heavily on individual memory and improvised decisions. Roles, training, quality checks, inventory logic, and exception response were fragmented.',
      built: 'Role architecture, RACI ownership, opening-to-close workflows, production sequencing, safety-stock logic, training modules, quality checkpoints, break-allocation rules, and peak-load exception paths.',
      outcome: 'A repeatable, manager-independent operating model that made execution easier to train, monitor, and improve.',
      tags: ['RACI', 'Standard Work', 'Inventory Controls', 'Exception Logic'], visual: 'grid', featured: true
    },
    {
      id: 'cost', page: 'case-cost.html', index: '02', category: 'Cost',
      title: 'Cold-Chain Cost Intelligence',
      summary: 'A decision system that decomposed nationwide frozen-product fulfilment into controllable cost components.',
      challenge: 'A single supplier price obscured storage, pick-and-pack, packaging, refrigerant, dimensional weight, delivery speed, loss, and returns.',
      built: 'Total-landed-cost model, cost-to-serve analysis, DIM-weight logic, warehouse comparison, packaging scenarios, vendor scorecard, and sensitivity analysis.',
      outcome: 'An opaque quote became a transparent decision model with individually controllable variables.',
      tags: ['TCO', 'Cost-to-Serve', 'DIM Weight', 'Scenario Analysis'], visual: 'bars'
    },
    {
      id: 'learning', page: 'case-learning.html', index: '03', category: 'Digital',
      title: 'Learning & Application Operating System',
      summary: 'A personalized digital environment that converted a complex long-term objective into milestones, daily actions, financial targets, progress records, and contingency plans.',
      challenge: 'Deadlines, study, work, finances, applications, and recovery plans existed as separate decisions rather than one operating model.',
      built: 'Milestone engine, task-state model, progress dashboard, financial checkpoints, calendar logic, local persistence, and contingency triggers.',
      outcome: 'An abstract multi-year goal became an executable personal operating system.',
      tags: ['Milestone Engine', 'State Model', 'Dashboard', 'Automation'], visual: 'timeline'
    },
    {
      id: 'compliance', page: 'case-compliance.html', index: '04', category: 'Compliance',
      title: 'Market-Entry Compliance Control System',
      summary: 'A structured research and documentation system for an international organization preparing for North American operations.',
      challenge: 'Official requirements, forms, risk triggers, screening obligations, and internal ownership were distributed across sources and jurisdictions.',
      built: 'Obligations register, AML/KYC/KYB intake map, UBO data structure, CDD/EDD triggers, PEP and OFAC screening checkpoints, control matrix, evidence trail, and remediation tracker.',
      outcome: 'Fragmented requirements became a controlled, traceable preparation sequence that could be coordinated with licensed professionals.',
      tags: ['AML / KYC / KYB', 'CDD / EDD', 'OFAC / PEP', 'Control Matrix'], visual: 'matrix', featured: true
    },
    {
      id: 'calendar', page: 'case-calendar.html', index: '05', category: 'Digital',
      title: 'Economic Calendar Automation',
      summary: 'A web-based information system that normalized high-impact economic events and delivered them into personal calendars through subscription logic.',
      challenge: 'Critical events required repeated manual checking, interpretation, and calendar entry.',
      built: 'Source normalization, classification rules, calendar-feed generation, ICS subscription, GitHub deployment, update workflow, and mobile calendar compatibility.',
      outcome: 'Recurring monitoring moved from manual administration into an automatically updated tool.',
      tags: ['ICS', 'Normalization', 'Automation', 'GitHub Pages'], visual: 'flow'
    }
  ];

  const METHODS = [
    {title:'Research', inputs:['Operating context','Constraints','Stakeholders','Existing artefacts'], questions:['What is actually happening today?','Where do decisions stall?','Which sources are authoritative?'], outputs:['Problem map','Source hierarchy','Key questions'], risks:['Mistaking opinion for evidence','Under-scoping edge cases'], handoff:'All material questions are answered, assigned, or explicitly bounded.'},
    {title:'Structure', inputs:['Research findings','Decision points','Dependencies','Risk appetite'], questions:['What must be standardized?','Where is human judgment still required?','Who owns each control?'], outputs:['System architecture','RACI / control map','Workflow and exception paths'], risks:['Designing for the ideal case only','Creating ownership gaps'], handoff:'The operating logic and ownership model are clear enough to build.'},
    {title:'Build', inputs:['Approved architecture','Content and source material','Technical constraints','Delivery format'], questions:['What is the smallest useful system?','What should be automated?','What must remain editable?'], outputs:['Documents, SOPs or models','Interface and data structure','Implementation package'], risks:['Overbuilding before validation','Hiding logic inside the tool'], handoff:'The system is usable, testable, documented, and ready for deployment.'},
    {title:'Implement', inputs:['Finished assets','Users and owners','Training needs','Deployment environment'], questions:['Who maintains the system?','What indicates failure?','How are exceptions escalated?'], outputs:['Handoff and training','Deployment checklist','Iteration roadmap'], risks:['Weak ownership after delivery','No feedback or revision loop'], handoff:'The system is in use, owned, and capable of controlled improvement.'}
  ];

  const CASE_LAYERS = {
    operational: {
      People: {title:'People and ownership', summary:'Roles are treated as system nodes, not informal job descriptions.', bullets:['RACI ownership by task and control','Training sequence and competency checkpoints','Break and coverage allocation','Escalation authority and handoff rules'], logic:'Clarifies who decides, who executes, who verifies, and who receives the handoff.'},
      Process: {title:'Process sequence', summary:'The work is expressed as a time-aware operating flow.', bullets:['Opening, active-operation, handoff, and closing states','Dependencies and parallel work','Standard work with defined completion conditions','Critical-path and bottleneck visibility'], logic:'Replaces repeated “what happens next?” decisions with visible sequence logic.'},
      Inventory: {title:'Inventory control', summary:'Materials are connected to demand, lead time, and exception thresholds.', bullets:['Par levels and safety stock','Reorder points and cycle-count cadence','Waste and variance capture','Supplier and substitution rules'], logic:'Moves inventory decisions from intuition into observable control thresholds.'},
      Control: {title:'Quality and control', summary:'Checks occur at the moment risk is created, not only after failure.', bullets:['Critical control points','Quality acceptance criteria','Completion evidence','Shift and management review'], logic:'Builds verification into the workflow instead of relying on retrospective inspection.'},
      Exceptions: {title:'Exception architecture', summary:'Peak load and abnormal events receive predefined paths.', bullets:['Demand surge modes','Staff shortage response','Stockout and substitution path','Safety or quality stop-work trigger'], logic:'Preserves flexibility without returning the team to improvisation.'}
    },
    learning: {
      Timeline:{title:'Milestone timeline',summary:'A long horizon becomes dependent milestones with slack and deadline logic.',bullets:['Ten-day milestone cycles','Dependency-aware sequencing','Deadline and buffer calculation','Missed-threshold recovery paths'],logic:'The system asks what the current milestone requires, not what feels urgent.'},
      Tasks:{title:'Task state engine',summary:'Daily actions are generated from milestone state and available time.',bullets:['Priority and effort fields','Completion and rollover states','Focus-day and recovery-day logic','Mobile-first interaction'],logic:'Daily planning is derived from the operating model rather than rebuilt each morning.'},
      Finance:{title:'Financial checkpoints',summary:'Cash-flow constraints become part of the plan instead of an external disruption.',bullets:['Income and savings targets','Deadline-linked financial checkpoints','Work-hour allocation','Cash-shortage contingency mode'],logic:'The plan adapts when financial capacity changes.'},
      Progress:{title:'Progress intelligence',summary:'Completion data reveals drift early.',bullets:['Milestone completion rate','Backlog and delay indicators','Trend and consistency view','Manual notes for context'],logic:'Simple analytics support intervention before a deadline is missed.'},
      Contingencies:{title:'Contingency logic',summary:'Recovery paths are designed before they are needed.',bullets:['Missed milestone protocol','Emergency time allocation','Reduced-capacity mode','Re-entry sequence after disruption'],logic:'The plan remains usable under real-life variance.'}
    },
    compliance: {
      Sources:{title:'Source hierarchy',summary:'Primary law, regulation, regulator guidance, forms, and internal interpretations are separated.',bullets:['Authoritative-source classification','Jurisdiction and effective-date fields','Citation and change log','Regulatory horizon scanning'],logic:'Every requirement can be traced to a source and reviewed when the source changes.'},
      Intake:{title:'AML / KYC / KYB intake',summary:'Identity, entity, ownership, and purpose information are captured in a controlled sequence.',bullets:['Customer vs. business classification','UBO / beneficial ownership fields','Business purpose and expected activity','Document completeness checks'],logic:'The intake structure creates a consistent evidence base for risk review.'},
      Screening:{title:'Screening checkpoints',summary:'PEP, sanctions, OFAC, restricted-party, and adverse-media checks are mapped to defined stages.',bullets:['Initial and periodic screening points','Potential-match disposition','False-positive documentation','Escalation and approval gates'],logic:'Screening becomes a repeatable workflow with an auditable decision trail.'},
      Diligence:{title:'CDD / EDD logic',summary:'Risk-based triggers determine the level of due diligence and approval.',bullets:['Risk-rating factors','CDD baseline requirements','EDD trigger conditions','Review frequency and refresh events'],logic:'A risk-based approach (RBA) connects evidence requirements to the actual risk profile.'},
      Controls:{title:'Control and remediation',summary:'Requirements are connected to owners, evidence, testing, issues, and corrective action.',bullets:['Policy-to-control mapping','RACI and control owner','Evidence and retention fields','Issue severity and remediation tracker'],logic:'The system makes compliance status visible rather than implicit.'}
    },
    calendar: {
      Source:{title:'Source intake',summary:'Events are collected from defined information sources.',bullets:['Source identifier','Publication timestamp','Raw event fields','Availability and error handling'],logic:'The workflow begins with traceable source data.'},
      Normalize:{title:'Normalization',summary:'Dates, currencies, countries, names, and numeric fields are standardized.',bullets:['Timezone conversion','Field normalization','Duplicate detection','Missing-data rules'],logic:'Different source formats become one consistent event model.'},
      Classify:{title:'Impact classification',summary:'Events are tagged by significance and category.',bullets:['Impact level','Region and asset class','Forecast / previous fields','User-facing description'],logic:'Classification determines which events enter the final calendar feed.'},
      Web:{title:'Web presentation',summary:'The website provides a readable, shareable event interface.',bullets:['Responsive calendar view','Filtering and detail state','Accessible event descriptions','Static-site deployment'],logic:'The web layer makes the same structured data easy to inspect.'},
      ICS:{title:'ICS subscription',summary:'Calendar-compatible events are generated and published as a subscription feed.',bullets:['UID and recurrence handling','Timezone-aware DTSTART','DESCRIPTION metadata','Update and cancellation logic'],logic:'Users receive updates in the calendar they already use.'}
    }
  };

  const INSIGHTS = [
    {category:'Compliance Systems',title:'Treat regulation as a control system, not a document',time:'6 min',summary:'Requirement maps are most useful when they connect source, owner, evidence, risk, status, and remediation—not when they merely summarize a rule.',body:'A practical compliance system should make five questions answerable at any time: what is required, where the requirement came from, who owns it, what evidence demonstrates performance, and what happens when the control fails. AML/KYC programs illustrate the point. A policy alone does not execute customer identification, UBO collection, PEP or OFAC screening, CDD/EDD triggers, periodic review, and issue escalation. The operating value sits in the connections between those elements.'},
    {category:'Operational Design',title:'SOPs fail when exception paths are implicit',time:'5 min',summary:'Standard work is incomplete until peak demand, shortages, quality failures, and ownership conflicts have defined responses.',body:'A useful SOP does more than describe the normal sequence. It identifies completion conditions, critical controls, handoffs, escalation authority, and the point at which the standard path must stop. This turns an SOP from a reference document into an operating control.'},
    {category:'Cost Intelligence',title:'A supplier quote is not a cost model',time:'5 min',summary:'A price becomes actionable only after it is decomposed into controllable variables and compared under consistent assumptions.',body:'Total landed cost, cost-to-serve, packaging, labour, minimums, loss, returns, and integration requirements often move independently. A good comparison model normalizes those components, exposes sensitivity, and prevents a low headline price from hiding a high operating cost.'},
    {category:'Practical Technology',title:'Internal tools beat all-purpose software when the workflow is specific',time:'6 min',summary:'A narrow tool can create more value than a broad platform when it mirrors the actual decisions, states, and handoffs of the user.',body:'The goal is not custom software for its own sake. The question is whether a lightweight tool can remove repeated administrative decisions, preserve operating logic, and remain easier to change than a patchwork of generic products.'}
  ];

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function pageName(){ return document.body.dataset.page || 'home'; }

  function renderShell(){
    const active = pageName();
    const header = $('#site-header');
    const footer = $('#site-footer');
    if(header){
      header.innerHTML = `
        <div class="site-progress" aria-hidden="true"></div>
        <header class="site-header" data-header>
          <div class="shell header-inner">
            <a class="brand" href="index.html" aria-label="Kairesa home"><span class="brand-mark" aria-hidden="true"></span><span class="brand-word">KAIRESA</span></a>
            <nav class="desktop-nav" aria-label="Primary navigation">
              ${NAV.map(([href,label,key])=>`<a href="${href}" class="${active===key?'is-active':''}">${label}</a>`).join('')}
            </nav>
            <div class="header-actions">
              <button class="theme-toggle" type="button" data-theme-toggle aria-label="Toggle light and dark mode">◐</button>
              <a class="button button--solid" href="contact.html">Start a project <span>↗</span></a>
              <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-panel" aria-label="Open menu">☰</button>
            </div>
          </div>
        </header>
        <div class="mobile-panel" id="mobile-panel" aria-hidden="true">
          <nav aria-label="Mobile navigation">${NAV.map(([href,label])=>`<a href="${href}">${label}</a>`).join('')}<a href="contact.html">Start a project</a></nav>
          <div class="mobile-meta"><span>Compliance · Operations · Digital</span><a href="mailto:${SITE.email}">${SITE.email}</a></div>
        </div>`;
    }
    if(footer){
      footer.innerHTML = `
        <footer class="site-footer">
          <div class="shell footer-grid">
            <div class="footer-brand">
              <a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true"></span><span class="brand-word">KAIRESA</span></a>
              <h2>Bring us the complex part.</h2>
              <p class="muted">We will help define it, structure it, build it, and put it into use.</p>
              <div><a class="button button--solid" href="contact.html">Start a project <span>↗</span></a></div>
            </div>
            <div class="footer-col"><h3>Sitemap</h3><a href="index.html">Home</a>${NAV.map(([href,label])=>`<a href="${href}">${label}</a>`).join('')}<a href="contact.html">Contact</a></div>
            <div class="footer-col"><h3>Disciplines</h3>${Object.values(DISCIPLINES).map(d=>`<a href="capabilities.html#${d.title.toLowerCase().replaceAll(' ','-')}">${d.title}</a>`).join('')}</div>
          </div>
          <div class="shell footer-bottom"><span>© ${new Date().getFullYear()} Kairesa. Technology, structured for real life.</span><span>v1.618 — built as a system.</span></div>
        </footer>`;
    }
  }

  function setupGlobal(){
    const root=document.documentElement;
    let saved=''; try{saved=localStorage.getItem('kairesa-theme')||'';}catch(_){ }
    root.dataset.theme=saved || (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
    $('[data-theme-toggle]')?.addEventListener('click',()=>{
      root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
      try{localStorage.setItem('kairesa-theme',root.dataset.theme);}catch(_){ }
      toast(`${root.dataset.theme==='dark'?'Dark':'Light'} mode enabled`);
    });
    const menu=$('[data-menu-toggle]'),panel=$('#mobile-panel');
    menu?.addEventListener('click',()=>{
      const open=menu.getAttribute('aria-expanded')==='true';
      menu.setAttribute('aria-expanded',String(!open)); panel?.classList.toggle('is-open',!open); panel?.setAttribute('aria-hidden',String(open));
      document.body.style.overflow=!open?'hidden':'';
    });
    const header=$('[data-header]'),progress=$('.site-progress');
    const onScroll=()=>{
      header?.classList.toggle('is-compact',scrollY>24);
      const max=document.documentElement.scrollHeight-innerHeight;
      if(progress) progress.style.width=`${max>0?scrollY/max*100:0}%`;
    }; onScroll(); addEventListener('scroll',onScroll,{passive:true});
    const items=$$('[data-reveal]');
    if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver'in window)) items.forEach(x=>x.classList.add('is-visible'));
    else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -35px'});items.forEach(x=>io.observe(x));}
    $$('[data-copy-email]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(SITE.email);toast('Email copied');}catch(_){location.href=`mailto:${SITE.email}`;}}));
    $$('[data-share]').forEach(b=>b.addEventListener('click',async()=>{const data={title:'Kairesa',text:'Kairesa — We systematize complexity.',url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(location.href);toast('Link copied');}}catch(_){}}));
  }

  function toast(message){
    let el=$('.toast'); if(!el){el=document.createElement('div');el.className='toast';document.body.append(el);} el.textContent=message;el.classList.add('is-visible');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('is-visible'),2200);
  }

  function networkMarkup(){
    return `<div class="network-layout" data-network>
      <div class="discipline-network">
        <svg viewBox="0 0 700 560" preserveAspectRatio="none" aria-hidden="true">
          ${['compliance','operations','digital','cost','legal','advisory'].map(id=>`<line data-line="${id}" x1="350" y1="269" x2="${({compliance:[350,68],operations:[610,300],digital:[90,300],cost:[350,500],legal:[160,150],advisory:[540,150]})[id][0]}" y2="${({compliance:[350,68],operations:[610,300],digital:[90,300],cost:[350,500],legal:[160,150],advisory:[540,150]})[id][1]}"/>`).join('')}
        </svg>
        <div class="network-core">KAIRESA<br>SYSTEM</div>
        ${Object.entries(DISCIPLINES).map(([id,d])=>`<button class="discipline-node ${id==='compliance'?'is-active':''}" type="button" data-node="${id}"><span>${d.title}</span><small>${d.type.startsWith('Primary')?'PRIMARY':'SUPPORT'}</small></button>`).join('')}
      </div>
      <aside class="network-panel" data-network-panel></aside>
    </div>`;
  }

  function networkPanel(d){
    return `<p class="kicker">${esc(d.type)}</p><h3>${esc(d.title)}</h3><p class="body-lg">${esc(d.short)}</p>
      <dl class="network-fields"><div class="network-field"><dt>Problem</dt><dd>${esc(d.problem)}</dd></div><div class="network-field"><dt>What we build</dt><dd>${esc(d.build)}</dd></div><div class="network-field"><dt>Deliverables</dt><dd>${d.deliverables.slice(0,5).map(esc).join(' · ')}</dd></div><div class="network-field"><dt>Connects to</dt><dd>${d.connects.map(esc).join(' · ')}</dd></div></dl>
      <div class="term-cloud">${d.terms.map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div><a class="text-link" href="capabilities.html#${d.title.toLowerCase().replaceAll(' ','-')}">Open capability <span>↗</span></a>`;
  }

  function setupNetwork(root=document){
    $$('[data-network]',root).forEach(net=>{
      const panel=$('[data-network-panel]',net); const activate=id=>{
        const d=DISCIPLINES[id]; if(!d)return; panel.innerHTML=networkPanel(d);
        $$('[data-node]',net).forEach(n=>n.classList.toggle('is-active',n.dataset.node===id));
        $$('[data-line]',net).forEach(l=>l.classList.toggle('is-active',l.dataset.line===id||d.connects.some(c=>DISCIPLINES[l.dataset.line]?.title===c)));
      }; activate('compliance');
      $$('[data-node]',net).forEach(n=>{n.addEventListener('mouseenter',()=>activate(n.dataset.node));n.addEventListener('focus',()=>activate(n.dataset.node));n.addEventListener('click',()=>activate(n.dataset.node));});
    });
  }

  function setupSystemCore(){
    const core=$('[data-system-core]'); if(!core)return;
    const nodes=$$('[data-system-node]',core),paths=$$('[data-system-path]',core);let idx=0,timer;
    const activate=n=>{nodes.forEach(x=>x.classList.toggle('is-active',x===n));paths.forEach(p=>p.classList.toggle('is-active',p.dataset.systemPath===n.dataset.systemNode));};
    nodes.forEach(n=>{n.addEventListener('mouseenter',()=>{clearInterval(timer);activate(n)});n.addEventListener('mouseleave',start);n.addEventListener('focus',()=>activate(n));});
    function start(){clearInterval(timer);timer=setInterval(()=>{activate(nodes[idx++%nodes.length]);},1800);} start();
    core.addEventListener('pointermove',e=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const r=core.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;$('.core-node',core)?.style.setProperty('transform',`translate(${x*10}px,${y*10}px)`);});
  }

  function projectVisual(p){
    if(p.visual==='grid')return `<div class="mini-grid">${Array.from({length:24},(_,i)=>`<span></span>`).join('')}</div>`;
    if(p.visual==='bars')return `<div class="bar-stack">${[23,39,54,68,82].map(w=>`<i style="--w:${w}%"></i>`).join('')}</div>`;
    if(p.visual==='timeline')return `<div class="timeline-viz">${Array.from({length:9},(_,i)=>`<span class="${i===4?'is-hot':''}"></span>`).join('')}</div>`;
    if(p.visual==='matrix')return `<div class="mini-grid">${Array.from({length:24},(_,i)=>`<span></span>`).join('')}</div>`;
    return `<div class="flow-viz"><span>SOURCE</span><span>NORMALIZE</span><span>CLASSIFY</span><span>WEB</span><span>ICS</span></div>`;
  }

  function projectCard(p){return `<article class="project-card ${p.featured?'is-featured':'is-wide'}" data-project data-category="${p.category}">
    <div class="project-visual">${projectVisual(p)}</div><div class="project-content"><div class="project-meta"><span>${p.index} · ${p.category}</span><span>${p.tags[0]}</span></div><h3>${esc(p.title)}</h3><p class="project-summary">${esc(p.summary)}</p>
    <div class="project-reveal"><div><div class="project-details"><p><strong>Challenge</strong><br>${esc(p.challenge)}</p><p><strong>System built</strong><br>${esc(p.built)}</p><p><strong>Outcome</strong><br>${esc(p.outcome)}</p><div class="term-cloud">${p.tags.map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div></div></div></div>
    <div class="project-actions"><button class="project-expand" type="button" aria-expanded="false">Explore summary +</button><a class="text-link" href="${p.page}">Open case ↗</a></div></div></article>`;}

  function renderProjects(mount,limit=0){
    if(!mount)return; const list=limit?PROJECTS.slice(0,limit):PROJECTS;
    mount.innerHTML=list.map(projectCard).join('');
    $$('[data-project]',mount).forEach(card=>{$('.project-expand',card)?.addEventListener('click',e=>{const open=card.classList.toggle('is-open');e.currentTarget.setAttribute('aria-expanded',String(open));e.currentTarget.textContent=open?'Close summary −':'Explore summary +';});});
  }

  function setupFilters(){
    const mount=$('[data-project-library]'); if(!mount)return; renderProjects($('.project-grid',mount));
    $$('[data-filter]',mount).forEach(btn=>btn.addEventListener('click',()=>{const cat=btn.dataset.filter;$$('[data-filter]',mount).forEach(b=>b.classList.toggle('is-active',b===btn));let c=0;$$('[data-project]',mount).forEach(card=>{const show=cat==='All'||card.dataset.category===cat;card.hidden=!show;if(show)c++;});$('[data-project-count]',mount).textContent=String(c).padStart(2,'0')+' projects';}));
  }

  function setupCompare(){
    $$('[data-compare]').forEach(box=>{const input=$('input',box);const update=()=>box.style.setProperty('--split',`${input.value}%`);input.addEventListener('input',update);update();});
  }

  function methodologyMarkup(){
    return `<div class="method-shell" data-methodology><div class="method-nav">${METHODS.map((m,i)=>`<button class="method-btn ${i===0?'is-active':''}" data-method="${i}" type="button"><span>0${i+1}</span><strong>${m.title}</strong></button>`).join('')}</div><div class="method-stage" data-method-stage></div></div>`;
  }
  function methodStage(m){
    const card=(title,items)=>`<article class="method-card"><h3>${title}</h3><ul>${items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article>`;
    return `${card('Inputs',m.inputs)}${card('Key questions',m.questions)}${card('Outputs',m.outputs)}${card('Risks to watch',m.risks)}<article class="method-card handoff"><h3>Handoff</h3><p>${esc(m.handoff)}</p></article>`;
  }
  function setupMethodology(root=document){
    $$('[data-methodology]',root).forEach(mount=>{const stage=$('[data-method-stage]',mount);const activate=i=>{stage.innerHTML=methodStage(METHODS[i]);$$('[data-method]',mount).forEach((b,j)=>b.classList.toggle('is-active',i===j));stage.animate([{opacity:.2,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:260,easing:'ease-out'});};activate(0);$$('[data-method]',mount).forEach(b=>b.addEventListener('click',()=>activate(Number(b.dataset.method))));});
  }

  function setupAccordions(){
    $$('[data-accordion-trigger]').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.accordion-item');const open=item.classList.toggle('is-open');btn.setAttribute('aria-expanded',String(open));$('.accordion-icon',btn).textContent=open?'−':'+';}));
  }

  function renderCapabilitiesPage(){
    const mount=$('[data-capability-page]'); if(!mount)return;
    mount.innerHTML=`<aside class="capability-menu">${Object.entries(DISCIPLINES).map(([id,d],i)=>`<button type="button" data-cap-menu="${id}" class="${i===0?'is-active':''}">${d.title}</button>`).join('')}</aside><div class="capability-detail" data-cap-detail></div>`;
    const detail=$('[data-cap-detail]',mount);
    const render=id=>{const d=DISCIPLINES[id];detail.innerHTML=`<div class="capability-detail-head"><div><p class="kicker">${d.type}</p><h2>${d.title}</h2><p class="body-lg">${d.short}</p></div><p class="body-lg">${d.build}</p></div>
      <div class="capability-detail-grid"><article class="info-card"><h3>Core problem</h3><p>${d.problem}</p></article><article class="info-card"><h3>What Kairesa builds</h3><p>${d.build}</p></article><article class="info-card"><h3>Deliverables</h3><ul>${d.deliverables.map(x=>`<li>${x}</li>`).join('')}</ul></article><article class="info-card is-third"><h3>Professional language</h3><div class="term-cloud">${d.terms.map(x=>`<span class="chip">${x}</span>`).join('')}</div></article><article class="info-card is-third"><h3>Connected capabilities</h3><ul>${d.connects.map(x=>`<li>${x}</li>`).join('')}</ul></article><article class="info-card is-third"><h3>Typical engagement flow</h3><ol><li>Scope & source map</li><li>Gap / dependency analysis</li><li>System architecture</li><li>Build & validation</li><li>Handoff</li></ol></article></div>
      ${id==='compliance'?`<div class="disclaimer"><strong>Professional boundary:</strong> Kairesa structures compliance research, documentation, workflows, and internal controls. It does not provide legal representation, certify regulatory compliance, conduct regulated screening, or replace licensed legal counsel or a qualified compliance officer.</div>`:''}
      <div><a class="button button--solid" href="contact.html?discipline=${encodeURIComponent(d.title)}">Discuss a ${d.title.toLowerCase()} system ↗</a></div>`;};
    render('compliance');$$('[data-cap-menu]',mount).forEach(btn=>btn.addEventListener('click',()=>{$$('[data-cap-menu]',mount).forEach(b=>b.classList.toggle('is-active',b===btn));render(btn.dataset.capMenu);}));
    const hash=location.hash.slice(1);const match=Object.entries(DISCIPLINES).find(([,d])=>d.title.toLowerCase().replaceAll(' ','-')===hash);if(match){const btn=$(`[data-cap-menu="${match[0]}"]`,mount);btn?.click();}
  }

  function renderCase(){
    const root=$('[data-case-root]'); if(!root)return; const id=document.body.dataset.caseId; const p=PROJECTS.find(x=>x.id===id); if(!p)return;
    const next=PROJECTS[(PROJECTS.indexOf(p)+1)%PROJECTS.length];
    root.innerHTML=`<section class="case-hero"><div class="shell case-hero-grid"><div data-reveal><p class="eyebrow">${p.index} · ${p.category}</p><h1 class="page-title">${p.title}</h1><p class="body-lg">${p.summary}</p><div class="case-tags">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div></div><div class="case-visual" data-reveal>${projectVisual(p)}</div></div></section>
      <section class="section section--border"><div class="shell case-context" data-reveal><p class="kicker">Context</p><div><p class="lead">${p.summary}</p><p class="body-lg">${p.challenge}</p></div></div></section>
      <section class="section section--border"><div class="shell layer-explorer" data-case-explorer="${id}"><div class="layer-canvas"><div data-layer-visual></div><div class="layer-controls" data-layer-controls></div></div><div class="layer-copy" data-layer-copy></div></div></section>
      ${id==='cost'?`<section class="section section--border"><div class="shell"><div class="section-head"><div><p class="kicker">Illustrative scenario model</p><h2 class="section-title">See how cost drivers move.</h2></div><p class="body-lg">Demonstration values only. This calculator shows the structure of a cost-to-serve model; it does not reproduce client data or constitute a quotation.</p></div><div class="cost-calculator" data-cost-calc></div></div></section>`:''}
      <section class="section section--border"><div class="shell outcome-grid" data-reveal><article class="outcome-card"><p class="kicker">Outcome</p><strong>${p.outcome}</strong></article><article class="outcome-card"><p class="kicker">Future scalability</p><p class="body-lg">The architecture can be extended with additional owners, jurisdictions, workflows, data sources, integrations, and reporting without rebuilding the core logic.</p></article></div></section>
      ${id==='compliance'?`<section class="section--tight"><div class="shell disclaimer"><strong>Important:</strong> This case describes system design, research organization, and workflow architecture. Kairesa does not provide legal representation, certify AML/KYC compliance, or conduct regulated screening services.</div></section>`:''}
      <section class="section section--border"><div class="shell related-grid"><div><p class="kicker">Related capabilities</p><div class="term-cloud">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div></div><a class="next-case" href="${next.page}"><p class="kicker">Next project</p><h2 class="card-title">${next.title} ↗</h2></a></div></section>`;
    setupCaseExplorer(id); if(id==='cost')setupCostCalc();
  }

  function setupCaseExplorer(id){
    const mount=$(`[data-case-explorer="${id}"]`);if(!mount)return;
    let data=CASE_LAYERS[id];
    if(id==='cost') data={Cost:{title:'Cost-driver model',summary:'Each cost is separated into a named driver, unit, assumption, and scenario.',bullets:['Storage and handling','Packaging and refrigerant','DIM-weight shipping','Loss and returns'],logic:'A price becomes a model when each component can be changed independently.'},Scenario:{title:'Scenario comparison',summary:'Warehouse, package, service, and volume assumptions can be compared consistently.',bullets:['Baseline vs. alternative','Sensitivity to weight and zone','Volume-tier effects','Service-level tradeoffs'],logic:'Alternatives are evaluated under the same assumptions.'},Vendor:{title:'Vendor scorecard',summary:'Price is considered alongside operating fit.',bullets:['TCO and minimums','Integration and communication','Service coverage','Quality and claims process'],logic:'The lowest quote is not automatically the lowest cost-to-serve.'}};
    const controls=$('[data-layer-controls]',mount),copy=$('[data-layer-copy]',mount),visual=$('[data-layer-visual]',mount);const keys=Object.keys(data);
    controls.innerHTML=keys.map((k,i)=>`<button class="layer-btn ${i===0?'is-active':''}" type="button" data-layer="${k}">${k}</button>`).join('');
    function draw(key){const d=data[key];copy.innerHTML=`<p class="kicker">Layer · ${key}</p><h2>${d.title}</h2><p class="body-lg">${d.summary}</p><section><h3>What Kairesa built</h3><ul>${d.bullets.map(x=>`<li>${x}</li>`).join('')}</ul></section><section><h3>Decision logic</h3><p>${d.logic}</p></section>`;
      if(id==='learning')visual.innerHTML=`<div class="timeline-grid">${Array.from({length:9},(_,i)=>`<span class="${i===keys.indexOf(key)+2?'is-active':''}"></span>`).join('')}</div>`;
      else if(id==='compliance')visual.innerHTML=`<div class="control-matrix">${['Source','Obligation','Owner','Control','Evidence','KYC','KYB','UBO','PEP','OFAC','CDD','EDD','Risk','Issue','Remediation','Review','Approval','Retention','Status','Change'].map(x=>`<button class="${x.toLowerCase().includes(key.toLowerCase().slice(0,3))?'is-active':''}" type="button">${x}</button>`).join('')}</div>`;
      else if(id==='calendar')visual.innerHTML=`<div class="flow-viz"><span>SOURCE</span><span>NORMALIZE</span><span>CLASSIFY</span><span>WEB</span><span>ICS</span></div>`;
      else visual.innerHTML=`<div class="case-diagram"><i class="axis x"></i><i class="axis y"></i>${d.bullets.map((x,i)=>`<span class="node ${i===0?'is-active':''}" style="left:${10+(i%2)*52}%;top:${10+Math.floor(i/2)*38}%">${x}</span>`).join('')}</div>`;
    }draw(keys[0]);$$('[data-layer]',mount).forEach(b=>b.addEventListener('click',()=>{$$('[data-layer]',mount).forEach(x=>x.classList.toggle('is-active',x===b));draw(b.dataset.layer);}));
  }

  function setupCostCalc(){
    const mount=$('[data-cost-calc]');if(!mount)return;const fields=[['Storage & handling',5,0,20],['Packaging',10,0,30],['Refrigerant',7,0,25],['Shipping',35,5,80],['Loss allowance',3,0,20]];
    mount.innerHTML=`<div class="calc-controls"><p class="kicker">Scenario inputs</p>${fields.map((f,i)=>`<label class="range-row"><span>${f[0]}</span><output data-out="${i}">$${f[1].toFixed(2)}</output><input type="range" min="${f[2]}" max="${f[3]}" step=".5" value="${f[1]}" data-range="${i}"></label>`).join('')}</div><div class="calc-output"><p class="kicker">Illustrative cost per order</p><div class="calc-total" data-total>$60.00</div><div class="calc-bars">${fields.map((f,i)=>`<div class="calc-bar"><span>${f[0]}</span><i><span data-bar="${i}"></span></i><b data-val="${i}"></b></div>`).join('')}</div><p class="calc-note">Demonstration data only. Taxes, product cost, discounts, claims, minimums, and other commercial terms are excluded.</p></div>`;
    const update=()=>{const vals=$$('[data-range]',mount).map(r=>Number(r.value)),total=vals.reduce((a,b)=>a+b,0);$('[data-total]',mount).textContent=`$${total.toFixed(2)}`;vals.forEach((v,i)=>{$(`[data-out="${i}"]`,mount).textContent=`$${v.toFixed(2)}`;$(`[data-val="${i}"]`,mount).textContent=`$${v.toFixed(2)}`;$(`[data-bar="${i}"]`,mount).style.width=`${total?v/total*100:0}%`;});};$$('[data-range]',mount).forEach(r=>r.addEventListener('input',update));update();
  }

  function setupPlanner(){
    const mount=$('[data-engagement-planner]');if(!mount)return;const options={
      unclear:['Discovery & Mapping','Start with a focused diagnostic sprint to define the problem, sources, constraints, ownership, and smallest useful next phase.',['Intake and material review','Problem and dependency map','Priority and risk register','Recommended build scope']],
      structure:['System Design','The problem is known; the next step is to design the operating architecture, ownership, workflows, controls, and output specification.',['System architecture','RACI / control matrix','Workflow and exception paths','Build specification']],
      build:['Implementation Build','The architecture exists and needs to become documents, models, interfaces, automation, or a working internal tool.',['Production-ready assets','Interface or document system','Testing and validation','Deployment package']],
      fragile:['Optimization Review','The system operates but is expensive, fragile, or dependent on repeated manual decisions.',['Performance and failure-point review','Cost and control analysis','Redesign options','Phased improvement roadmap']]
    };const result=$('[data-planner-result]',mount);function show(k){const [title,text,items]=options[k];result.innerHTML=`<p class="kicker">Suggested starting point</p><h3>${title}</h3><p>${text}</p><ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul><a class="button button--solid" href="contact.html?start=${encodeURIComponent(title)}">Use this starting point ↗</a>`;}show('unclear');$$('[data-plan]',mount).forEach(b=>b.addEventListener('click',()=>{$$('[data-plan]',mount).forEach(x=>x.classList.toggle('is-active',x===b));show(b.dataset.plan);}));
  }

  function renderInsights(){
    const mount=$('[data-insights]');if(!mount)return;mount.innerHTML=INSIGHTS.map((x,i)=>`<div class="insight-row" data-insight-row><p class="kicker">${x.category}</p><button type="button" aria-expanded="false">${x.title}</button><span>${x.time}</span></div><div class="insight-expand"><div><div class="insight-copy"><p class="body-lg">${x.summary}</p><p>${x.body}</p></div></div></div>`).join('');$$('[data-insight-row]',mount).forEach(row=>$('button',row).addEventListener('click',e=>{const open=row.classList.toggle('is-open');e.currentTarget.setAttribute('aria-expanded',String(open));}));
  }

  function setupWizard(){
    const mount=$('[data-wizard]');if(!mount)return;let step=0;const state={complexity:'',outcome:'',today:'',timeline:'',budget:'',name:'',email:'',organization:'',notes:''};
    const steps=['Complexity','Outcome','Today','Scope','You'];
    const screens=[
      {title:'What kind of complexity are you dealing with?',type:'options',key:'complexity',options:[['Compliance','Requirements, controls, documentation, or market entry'],['Operations','Roles, SOPs, handoffs, inventory, or quality'],['Cost Intelligence','Suppliers, logistics, unit economics, or cost drivers'],['Digital Systems','Website, dashboard, automation, or internal tool'],['Integrated / Not sure','The problem crosses more than one discipline']]},
      {title:'What outcome do you need?',type:'options',key:'outcome',options:[['Clarity','A map, research brief, or decision structure'],['Operating system','SOPs, controls, roles, and repeatable workflow'],['Working tool','A website, dashboard, automation, or internal system'],['Optimization','Lower cost, lower risk, or stronger performance'],['Implementation plan','A phased roadmap with clear next actions']]},
      {title:'What exists today?',type:'options',key:'today',options:[['Mostly informal','Knowledge is in people, messages, and memory'],['Documents exist','Materials exist but are fragmented or outdated'],['A process exists','The workflow runs but is inconsistent or fragile'],['A tool exists','A spreadsheet or system needs redesign'],['Starting from zero','The structure has not been created yet']]},
      {title:'Timeline and approximate budget',type:'scope'},
      {title:'Your details',type:'details'}
    ];
    function screen(){
      const s=screens[step];$$('[data-wstep]',mount).forEach((x,i)=>{x.classList.toggle('is-active',i===step);x.classList.toggle('is-done',i<step);});
      let body='';
      if(s.type==='options')body=`<div class="option-grid">${s.options.map(([a,b])=>`<button type="button" class="select-card ${state[s.key]===a?'is-selected':''}" data-select="${esc(a)}"><strong>${a}</strong><span>${b}</span></button>`).join('')}</div>`;
      if(s.type==='scope')body=`<div class="option-grid"><div><p class="kicker">Timeline</p>${['< 1 month','1–3 months','3–6 months','6+ months'].map(x=>`<button type="button" class="select-card ${state.timeline===x?'is-selected':''}" data-scope="timeline" data-value="${x}">${x}</button>`).join('')}</div><div><p class="kicker">Approximate budget</p>${['To discuss','Small','Medium','Large'].map(x=>`<button type="button" class="select-card ${state.budget===x?'is-selected':''}" data-scope="budget" data-value="${x}">${x}</button>`).join('')}</div></div>`;
      if(s.type==='details')body=`<div class="field-grid"><div class="field"><label>Name</label><input data-field="name" value="${esc(state.name)}" autocomplete="name"></div><div class="field"><label>Email</label><input data-field="email" type="email" value="${esc(state.email)}" autocomplete="email"></div><div class="field is-full"><label>Organization (optional)</label><input data-field="organization" value="${esc(state.organization)}" autocomplete="organization"></div><div class="field is-full"><label>Anything we should know?</label><textarea data-field="notes">${esc(state.notes)}</textarea></div><div class="field is-full"><div class="summary-box">${summaryRows()}</div></div></div>`;
      $('[data-wizard-card]',mount).innerHTML=`<div class="wizard-head"><div><p class="kicker">Step ${step+1} of 5</p><h2>${s.title}</h2></div><span class="kicker">${steps[step]}</span></div>${body}<div class="wizard-actions">${step?'<button class="button" type="button" data-back>← Back</button>':'<span></span>'}<button class="button button--solid" type="button" data-next>${step===4?'Create inquiry email':'Continue →'}</button></div>`;
      $$('[data-select]',mount).forEach(b=>b.addEventListener('click',()=>{state[s.key]=b.dataset.select;$$('[data-select]',mount).forEach(x=>x.classList.toggle('is-selected',x===b));}));
      $$('[data-scope]',mount).forEach(b=>b.addEventListener('click',()=>{state[b.dataset.scope]=b.dataset.value;$$(`[data-scope="${b.dataset.scope}"]`,mount).forEach(x=>x.classList.toggle('is-selected',x===b));}));
      $$('[data-field]',mount).forEach(f=>f.addEventListener('input',()=>{state[f.dataset.field]=f.value;const summary=$('.summary-box',mount);if(summary)summary.innerHTML=summaryRows();}));
      $('[data-back]',mount)?.addEventListener('click',()=>{step--;screen();scrollIntoView();});
      $('[data-next]',mount)?.addEventListener('click',()=>{if(step<4){const key=s.key;if(key&&!state[key])return toast('Choose one option to continue');if(s.type==='scope'&&(!state.timeline||!state.budget))return toast('Choose a timeline and budget range');step++;screen();scrollIntoView();}else submit();});
    }
    function summaryRows(){return [['Complexity',state.complexity],['Outcome',state.outcome],['Today',state.today],['Timeline',state.timeline],['Budget',state.budget],['Contact',state.email||'—'],['Organization',state.organization||'—']].map(([a,b])=>`<div class="summary-row"><span>${a}</span><strong>${esc(b||'—')}</strong></div>`).join('');}
    function scrollIntoView(){mount.scrollIntoView({behavior:'smooth',block:'start'});}
    function submit(){
      $$('[data-field]',mount).forEach(f=>state[f.dataset.field]=f.value);if(!state.name||!state.email)return toast('Add your name and email');
      const subject=`Kairesa project inquiry — ${state.complexity}`;const body=`Name: ${state.name}\nEmail: ${state.email}\nOrganization: ${state.organization||'—'}\n\nComplexity: ${state.complexity}\nDesired outcome: ${state.outcome}\nCurrent state: ${state.today}\nTimeline: ${state.timeline}\nBudget range: ${state.budget}\n\nAdditional context:\n${state.notes||'—'}`;location.href=`mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    mount.innerHTML=`<aside class="wizard-steps">${steps.map((x,i)=>`<div class="wizard-step ${i===0?'is-active':''}" data-wstep><span>0${i+1}</span><strong>${x}</strong></div>`).join('')}</aside><div class="wizard-card" data-wizard-card></div>`;screen();
  }

  function initPage(){
    const page=pageName();
    if(page==='home'){
      const net=$('[data-home-network]');if(net)net.innerHTML=networkMarkup();setupNetwork();setupSystemCore();renderProjects($('[data-home-projects]'),4);setupCompare();const method=$('[data-home-method]');if(method)method.innerHTML=methodologyMarkup();setupMethodology();setupAccordions();
    }
    if(page==='capabilities'){renderCapabilitiesPage();const net=$('[data-cap-network]');if(net)net.innerHTML=networkMarkup();setupNetwork();}
    if(page==='work')setupFilters();
    if(page==='methodology'){const mount=$('[data-method-page]');if(mount)mount.innerHTML=methodologyMarkup();setupMethodology();setupPlanner();}
    if(page==='insights')renderInsights();
    if(page==='contact')setupWizard();
    if(page==='case')renderCase();
  }

  renderShell();setupGlobal();initPage();
})();
