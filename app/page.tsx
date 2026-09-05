'use client';

import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  DatabaseZap,
  Headphones,
  Languages,
  PhoneCall,
  Quote,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';

const useCases = [
  { icon: Building2, title: 'B2B lead qualification', copy: 'Calls form fills and ad leads, asks your qualification questions, and sends sales only the opportunities worth pursuing.' },
  { icon: CalendarCheck, title: 'Demo & consultation booking', copy: 'Finds a suitable slot, books it on your team calendar and sends reminders so more qualified prospects actually show up.' },
  { icon: RefreshCw, title: 'Dormant lead revival', copy: 'Works through old CRM lists with a respectful, consistent follow-up sequence and surfaces renewed buying intent.' },
  { icon: Headphones, title: 'Inbound call answering', copy: 'Answers FAQs, captures the caller’s requirement and routes urgent or high-value conversations to the right person.' },
];

const caseStories = [
  { label: 'Inbound lead', title: 'Website enquiry → qualified demo', accent: '42 sec', metric: 'first response', copy: 'The agent calls while intent is high, confirms company size, need and timeline, then books the right salesperson.', result: 'Qualified meeting booked · Thursday, 3 PM' },
  { label: 'Old CRM list', title: 'Dormant prospect → active opportunity', accent: '186', metric: 'leads followed up', copy: 'A respectful reactivation sequence finds buyers whose priorities changed—without pulling your team into repetitive calls.', result: '17 interested buyers surfaced for follow-up' },
  { label: 'Missed call', title: 'After-hours caller → next-day appointment', accent: '24/7', metric: 'answering', copy: 'The agent understands the requirement, answers approved questions and secures the next step even when your office is closed.', result: 'Requirement captured · reminder sent' },
];

const testimonialExamples = [
  { initials: 'AM', role: 'Operations head · B2B services', quote: 'The biggest win was not “AI”. It was knowing every enquiry received a consistent first conversation before our sales team stepped in.' },
  { initials: 'RK', role: 'Founder · Industrial supplier', quote: 'It gave our salespeople a cleaner list: who is interested, what they need and when they want to speak. That is where the time saving becomes revenue.' },
  { initials: 'PS', role: 'Growth lead · Professional services', quote: 'We could finally see which leads were being lost because of slow follow-up—and what a better calling process could recover.' },
];

const faqs = [
  ['Will it sound robotic?', 'We configure natural pacing, interruptions, short responses and your preferred business vocabulary. Voice quality depends on the selected language and voice; you approve the test calls before launch.'],
  ['What exactly is included in the ₹24,999 setup?', 'Discovery, call strategy, one production voice agent, up to two call flows, English plus one Indian language, knowledge-base setup, calendar integration, one CRM or webhook integration, testing, launch and 14 days of optimisation.'],
  ['Is the ₹500 booking amount extra?', 'No. It pays for your Revenue Leak Audit and solution blueprint. If you proceed, the full ₹500 is adjusted against the ₹24,999 setup fee.'],
  ['Are calling minutes included?', 'Yes. The setup includes 300 connected launch minutes. After that you choose a transparent prepaid call pack based on your expected volume.'],
  ['Can it update our CRM?', 'Yes. The standard setup includes one CRM, calendar or webhook integration. More complex or custom systems are scoped separately before you approve anything.'],
  ['How quickly can we go live?', 'A standard first-use-case agent can go live within 24 hours after we receive your approved script, FAQs, qualification rules and required access. Complex CRM work, multilingual flows or custom integrations may need additional time, which we confirm before you proceed.'],
];

function formatInr(value: number) {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.round(value));
}

export default function Home() {
  const [leads, setLeads] = useState(150);
  const [dealValue, setDealValue] = useState(50000);
  const [closeRate, setCloseRate] = useState(8);
  const [checkoutReady, setCheckoutReady] = useState(false);
  const recovered = useMemo(() => leads * 0.2 * (closeRate / 100) * dealValue, [leads, closeRate, dealValue]);

  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand brand-logo" href="#top" aria-label="ElevateBox home">
            <img className="brand-symbol" src="/elevatebox-mark.png" alt="" />
            <span className="brand-name">elevatebox</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#how">How it works</a><a href="#use-cases">Use cases</a><a href="#proof">Why now</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a>
          </nav>
          <a className="button button-sm" href="#booking">Book for ₹500 <ArrowRight size={16} /></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> AI voice agents for B2B sales</div>
            <h1>Turn every enquiry into a <em>live sales conversation.</em></h1>
            <p className="hero-lede">ElevateBox calls new leads in seconds, qualifies genuine buyers and sends your team the conversations most likely to become revenue.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#booking">Book your ₹500 Revenue Audit <ArrowRight size={18} /></a>
              <a className="text-link" href="#pricing">View the ₹24,999 package</a>
            </div>
            <div className="offer-snapshot"><span><b>₹500</b> to start</span><i/><span><b>₹24,999</b> complete setup</span><i/><span><b>300</b> minutes included</span></div>
            <div className="micro-proof">
              <span><Check size={15} /> ₹500 adjusted in setup fee</span><span><Check size={15} /> No technical work for you</span><span><Check size={15} /> Standard agent live in 24 hours</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Example of ElevateBox qualifying and booking a lead">
            <div className="visual-topline"><span className="status-pill"><span className="live-dot" /> Agent live</span><span className="muted-label">Revenue desk · Today</span></div>
            <div className="lead-card"><div className="avatar"><PhoneCall size={19} /></div><div className="lead-copy"><span className="muted-label">NEW WEBSITE LEAD</span><strong>Arjun · Operations Head</strong><span>Manufacturing · 120 employees</span></div><span className="calling-state">Calling…</span></div>
            <div className="conversation-card">
              <div className="waveform" aria-hidden="true">{[20,35,58,28,68,44,76,31,54,23,61,40,72,29,49,34].map((height,index)=><span key={index} style={{height:`${height}%`}} />)}</div>
              <p>“Yes, Thursday at 3 works. Please send the calendar invite.”</p><span>00:54 · English + Hindi</span>
            </div>
            <div className="outcome-grid"><div><CalendarCheck size={18}/><span>Meeting booked</span><strong>Thu · 3:00 PM</strong></div><div><BadgeCheck size={18}/><span>Lead qualified</span><strong>High intent</strong></div><div><Clock3 size={18}/><span>Response time</span><strong>42 seconds</strong></div></div>
            <div className="revenue-strip"><span><TrendingUp size={17}/> Potential pipeline</span><strong>₹2,40,000</strong></div>
          </div>
        </div>
        <div className="shell trust-strip"><span><Sparkles size={17}/> One clear outcome: more qualified sales conversations</span><span>Inbound qualification</span><span>Lead follow-up</span><span>Appointment booking</span><span>CRM updates</span></div>
      </section>

      <section className="first-proof" id="proof">
        <div className="shell section-head centered"><span className="section-kicker">From click to calendar</span><h2>What happens after someone shows interest?</h2><p>No technical explanation. This is the complete journey your customer experiences.</p></div>
        <div className="shell plain-flow">
          <article><span>01</span><div className="flow-icon"><Sparkles size={22}/></div><h3>A lead arrives</h3><p>From your ad, website, CRM or missed call.</p></article>
          <i><ArrowRight/></i>
          <article><span>02</span><div className="flow-icon"><PhoneCall size={22}/></div><h3>ElevateBox calls</h3><p>The conversation starts while their interest is fresh.</p></article>
          <i><ArrowRight/></i>
          <article><span>03</span><div className="flow-icon"><BadgeCheck size={22}/></div><h3>It checks the fit</h3><p>Need, budget, timeline and your qualification rules.</p></article>
          <i><ArrowRight/></i>
          <article className="flow-win"><span>04</span><div className="flow-icon"><CalendarCheck size={22}/></div><h3>Your team gets the meeting</h3><p>With the buyer’s answers, summary and next step.</p></article>
        </div>
        <div className="shell simple-outcome"><div><span>Without ElevateBox</span><strong>Lead waits → interest drops → sales chases</strong></div><ArrowRight/><div><span>With ElevateBox</span><strong>Lead called → buyer qualified → meeting booked</strong></div></div>
      </section>

      <section className="dark-section" id="how">
        <div className="shell section-head split-head"><div><span className="section-kicker lime-kicker">Simple on your side</span><h2>We build the calling system. Your team receives the opportunities.</h2></div><p>No prompt engineering. No stitching together five tools. No asking your sales team to become AI experts.</p></div>
        <div className="shell steps-grid">
          {[['01','Map the money leak','We study your lead sources, sales process, FAQs and the exact outcome each call should create.'],['02','Build your agent','We write the call flow, train the knowledge base, configure the voice and connect your business tools.'],['03','Test real scenarios','We run objections, interruptions, edge cases and hand-offs until the conversations meet the agreed launch checklist.'],['04','Launch & improve','Your agent starts calling. We review the first conversations and optimise performance during the launch period.']].map(([n,title,copy])=><article className="step-card" key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="section" id="use-cases">
        <div className="shell section-head centered"><span className="section-kicker">Four proven starting points</span><h2>Start with the call your team keeps postponing.</h2><p>Best when the conversation is repetitive, time-sensitive and connected to a measurable next step.</p></div>
        <div className="shell usecase-grid">{useCases.map(({icon:Icon,title,copy},index)=><article className={`usecase-card usecase-${index+1}`} key={title}><div className="icon-box"><Icon size={21}/></div><span className="usecase-number">0{index+1}</span><h3>{title}</h3><p>{copy}</p><span>Explore this workflow <ChevronRight size={15}/></span></article>)}</div>
      </section>

      <section className="section compact-top">
        <div className="shell bento-grid">
          <article className="bento bento-large"><div><span className="section-kicker">A revenue operator, not a talking bot</span><h2>It listens, decides, acts and records.</h2><p>Your agent uses approved business knowledge and rules to move each call toward a useful outcome.</p></div><div className="logic-flow"><span><PhoneCall/>Talk</span><i/><span><Target/>Qualify</span><i/><span><CalendarCheck/>Book</span><i/><span><DatabaseZap/>Update</span></div></article>
          <article className="bento"><Languages/><h3>English + Indian languages</h3><p>Configure the language mix your buyers actually use.</p></article>
          <article className="bento orange-bento"><Zap/><h3>Calls while intent is fresh</h3><p>Trigger a conversation from forms, ads, CRM stages or call events.</p></article>
          <article className="bento"><ShieldCheck/><h3>Human guardrails</h3><p>Approved answers, escalation rules and call review before scale.</p></article>
          <article className="bento"><BarChart3/><h3>Every outcome visible</h3><p>Recordings, summaries, captured fields and next steps.</p></article>
        </div>
      </section>

      <section className="section human-section">
        <div className="shell human-grid">
          <div className="human-visual"><img src="/elevatebox-sales-team.jpg" alt="A business sales team reviewing a newly qualified opportunity"/><div className="handoff-card"><span><span className="live-dot"/> READY FOR SALES</span><strong>Qualified buyer booked for 3:00 PM</strong><small>Need, timeline and call summary included</small></div></div>
          <div className="human-copy"><span className="section-kicker lime-kicker">AI handles the repetition. People close the deal.</span><h2>Your team starts with context—not another cold lead.</h2><p>ElevateBox does the first conversation and hands over only when a real person can add value.</p><div className="human-benefits"><span><BadgeCheck/>Know what the buyer needs</span><span><Clock3/>Know when they want to act</span><span><CalendarCheck/>Meetings already on the calendar</span></div><a className="button button-lime" href="#booking">See if it fits your business <ArrowRight size={17}/></a></div>
        </div>
      </section>

      <section className="section story-section">
        <div className="shell section-head split-head light-split"><div><span className="section-kicker">Picture it in your business</span><h2>Three calls that should never depend on someone being free.</h2></div><p>Instead of another software demo, see the exact journey from unanswered lead to measurable sales action.</p></div>
        <div className="shell story-grid">{caseStories.map((story,index)=><article className={`story-card story-${index+1}`} key={story.title}><div className="story-top"><span>{story.label}</span><strong>{story.accent}<small>{story.metric}</small></strong></div><h3>{story.title}</h3><p>{story.copy}</p><div className="story-result"><BadgeCheck size={17}/><span>{story.result}</span></div></article>)}</div>
        <div className="shell example-proof"><div className="example-proof-intro"><span className="section-kicker">Illustrative buyer perspectives</span><h3>The kind of feedback a well-built calling process should earn.</h3><p>These are example composites—not customer endorsements. Replace them with approved quotes after your first launches.</p></div><div className="testimonial-grid">{testimonialExamples.map(item=><article key={item.initials}><Quote size={20}/><p>“{item.quote}”</p><div><span>{item.initials}</span><small>{item.role}</small></div></article>)}</div></div>
      </section>

      <section className="section roi-section">
        <div className="shell roi-grid">
          <div><span className="section-kicker lime-kicker">Make the decision with your numbers</span><h2>What could better follow-up be worth?</h2><p>This planning calculator models revenue if stronger calling recovers just 20% of your monthly leads. It is an illustration, not a guarantee.</p><div className="calc-result"><span>Illustrative monthly revenue recovered</span><strong>₹{formatInr(recovered)}</strong><small>At {closeRate}% close rate from {Math.round(leads*.2)} recovered conversations</small></div></div>
          <div className="calculator">
            <label><span>Monthly leads <b>{leads}</b></span><input type="range" min="25" max="1000" step="25" value={leads} onChange={e=>setLeads(Number(e.target.value))}/></label>
            <label><span>Average deal value <b>₹{formatInr(dealValue)}</b></span><input type="range" min="10000" max="500000" step="10000" value={dealValue} onChange={e=>setDealValue(Number(e.target.value))}/></label>
            <label><span>Your current close rate <b>{closeRate}%</b></span><input type="range" min="1" max="30" value={closeRate} onChange={e=>setCloseRate(Number(e.target.value))}/></label>
            <a className="button button-lime" href="#booking">Audit my revenue leak <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="shell section-head centered"><span className="section-kicker">Clear investment. No mystery proposal.</span><h2>Buy clarity for ₹500. Build only when the economics make sense.</h2><p>The booking creates a real deliverable: your Revenue Leak Audit and voice-agent blueprint. Proceed only if the use case is a fit.</p></div>
        <div className="shell price-journey">
          <article className="price-card booking-price"><span className="price-tag">STEP 1 · START HERE</span><h3>Revenue Leak Audit</h3><div className="price"><sup>₹</sup>500</div><p>60-minute working session + implementation blueprint.</p><ul><li><Check/>Lead-response and call-flow audit</li><li><Check/>Best first use case selected</li><li><Check/>ROI and monthly minute estimate</li><li><Check/>Implementation scope and timeline</li></ul><a className="button button-primary" href="#booking">Book the audit <ArrowRight size={17}/></a><small>100% adjusted against setup if you proceed</small></article>
          <div className="journey-arrow"><ArrowRight/></div>
          <article className="price-card setup-price"><span className="popular-label">MOST POPULAR</span><span className="price-tag">STEP 2 · DONE-FOR-YOU BUILD</span><h3>ElevateBox Launch</h3><div className="price"><sup>₹</sup>24,999 <small>one time</small></div><p>A production-ready voice agent configured around one revenue workflow.</p><div className="included-minutes"><PhoneCall/><div><strong>300 connected minutes included</strong><span>for testing and your first live campaign</span></div></div><ul><li><Check/>One AI voice agent + two call flows</li><li><Check/>English + one Indian language</li><li><Check/>One calendar, CRM or webhook integration</li><li><Check/>Custom script, FAQs and qualification rules</li><li><Check/>Testing, launch and 14-day optimisation</li><li><Check/>Call recordings, transcripts and summaries</li></ul><a className="button button-dark" href="#booking">Reserve with ₹500 <ArrowRight size={17}/></a><small>Balance ₹24,499 after blueprint approval</small></article>
        </div>
        <div className="shell packs-wrap"><div><span className="section-kicker">After your 300 launch minutes</span><h3>Simple prepaid calling packs</h3><p>Pay for connected conversation time. Final rates can vary by language, voice, telephony and volume.</p></div><div className="packs"><article><span>START</span><strong>1,000 min</strong><b>₹8,999</b><small>₹9.00/min</small></article><article className="pack-featured"><span>GROW</span><strong>3,000 min</strong><b>₹22,499</b><small>₹7.50/min</small></article><article><span>SCALE</span><strong>10,000+ min</strong><b>Custom</b><small>volume rate</small></article></div></div>
        <p className="shell pricing-note">Pricing shown is an introductory commercial proposal for the landing-page offer. GST, number rental, premium voices and non-standard integrations may apply and must be disclosed in the final order form.</p>
      </section>

      <section className="section comparison-section">
        <div className="shell comparison-grid"><div><span className="section-kicker">Why not build it yourself?</span><h2>A platform gives you parts. ElevateBox gives you a working revenue process.</h2><p>Leading infrastructure providers advertise usage pricing, but a live business system still needs call strategy, integrations, testing, monitoring and ongoing improvement.</p><div className="competitor-links"><a href="https://www.bolna.ai/pricing" target="_blank" rel="noreferrer">Bolna pricing</a><a href="https://www.retellai.com/pricing" target="_blank" rel="noreferrer">Retell pricing</a><a href="https://www.bland.ai/pricing" target="_blank" rel="noreferrer">Bland pricing</a></div></div><div className="compare-card"><div><span>DIY voice platform</span><span>ElevateBox</span></div>{[['Call strategy','You create it','Built with you'],['Conversation design','You write it','Included'],['Integrations','You connect it','1 included'],['Testing & guardrails','You manage it','Included'],['Launch optimisation','You monitor it','14 days included'],['Best for','Technical teams','Business owners']].map(row=><div key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><span className="good-cell">{row[2]}</span></div>)}</div></div>
      </section>

      <section className="section faq-section" id="faq"><div className="shell faq-grid"><div><span className="section-kicker">Questions business owners ask</span><h2>Clear answers before you spend.</h2><p>We would rather set the right expectation now than sell you the wrong automation.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="booking-section" id="booking">
        <div className="shell booking-card"><div><span className="section-kicker lime-kicker">Your next step costs ₹500—not ₹24,999</span><h2>Find out exactly where a voice agent can create revenue in your business.</h2><p>Leave with a call-flow blueprint, recommended use case, minute estimate and implementation plan. If you build with ElevateBox, the ₹500 is credited in full.</p><div className="booking-points"><span><Check/>60-minute working session</span><span><Check/>Custom revenue-leak audit</span><span><Check/>No obligation to proceed</span></div></div><div className="checkout-card"><span>Reserve one strategy slot</span><div className="checkout-price"><strong>₹500</strong><small>credited toward setup</small></div><div className="checkout-line"><span>Growth audit</span><b>₹500</b></div><div className="checkout-line total"><span>Due today</span><b>₹500</b></div><button className="button button-lime" type="button" onClick={()=>setCheckoutReady(true)}>{checkoutReady?'Payment link required':'Continue to secure booking'} <ArrowRight size={17}/></button>{checkoutReady&&<p className="checkout-message">This page is ready for your Razorpay or payment-link URL. Connect it before publishing paid traffic.</p>}<small>Secure checkout integration to be connected before campaign launch.</small></div></div>
      </section>

      <footer><div className="shell footer-grid"><div><a className="brand footer-brand brand-logo" href="#top"><img className="brand-symbol" src="/elevatebox-mark.png" alt=""/><span className="brand-name">elevatebox</span></a><p>Voice agents built around one goal: helping B2B teams respond, qualify and book more consistently.</p></div><div><strong>Explore</strong><a href="#how">How it works</a><a href="#use-cases">Use cases</a><a href="#pricing">Pricing</a></div><div><strong>Decision support</strong><a href="#proof">Why now</a><a href="#faq">FAQ</a><a href="#booking">Book your audit</a></div></div><div className="shell footer-bottom"><span>© 2026 ElevateBox. All rights reserved.</span><span>Built for practical B2B growth.</span></div></footer>
      <div className="mobile-cta-bar"><a className="button mobile-cta-button" href="#booking"><span><small>Start with a Revenue Audit</small>Book for ₹500</span><ArrowRight size={18}/></a></div>
    </main>
  );
}
