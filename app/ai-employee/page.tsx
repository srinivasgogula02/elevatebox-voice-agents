import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight, BadgeCheck, BarChart3, Building2, CalendarCheck2, Check, Clock3,
  DatabaseZap, GraduationCap, Headphones, HeartPulse, Languages, PhoneCall,
  RefreshCw, ShieldCheck, Sparkles, Target, UserRoundCheck, UsersRound, Zap,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'ElevateBox AI Sales Employee — Calls, Qualifies & Books',
  description: 'A done-for-you AI calling employee for Indian B2B teams. Launch in 24 hours, starting with a ₹500 Revenue Audit.',
};

const industries = [
  { icon: Building2, name: 'Real estate', line: 'Qualify property enquiries and schedule site visits.' },
  { icon: GraduationCap, name: 'Education', line: 'Call course leads, answer basics and book counsellor slots.' },
  { icon: HeartPulse, name: 'Clinics', line: 'Handle appointment enquiries and follow-up reminders.' },
  { icon: Target, name: 'B2B services', line: 'Qualify decision-makers before your sales team joins.' },
  { icon: UsersRound, name: 'Recruitment', line: 'Pre-screen candidates and arrange recruiter conversations.' },
  { icon: BarChart3, name: 'Agencies', line: 'Respond to ad leads quickly and protect campaign ROI.' },
];

const faqs = [
  ['What does the ₹500 cover?', 'It covers a Revenue Leak Audit and a practical call-flow blueprint for your first use case. If you proceed, the ₹500 is adjusted against the setup fee.'],
  ['What is included in the ₹24,999 setup?', 'One production voice agent, two call flows, English plus one Indian language, your approved knowledge base, calendar setup, one standard CRM or webhook connection, 300 connected minutes, testing and 14 days of optimisation.'],
  ['Can the agent really launch in 24 hours?', 'A standard first workflow can launch within 24 hours after we receive your approved script, FAQs, qualification rules and required access. Custom systems or complex multilingual flows may take longer; we confirm that before you proceed.'],
  ['Will customers know they are speaking to an AI?', 'We recommend a clear, simple introduction. The agent is designed to sound natural and helpful without pretending to be human. You approve the test calls before launch.'],
  ['What happens after the included 300 minutes?', 'You move to a prepaid connected-minute pack. The starter pack is ₹3,499 for 500 minutes; larger volumes are quoted at a lower per-minute rate. Telephony or special number charges, if any, are confirmed upfront.'],
  ['Can it transfer a call to a person?', 'Yes. The agent can route qualified, urgent or sensitive conversations to the right teammate based on the rules you approve.'],
];

export default function AiEmployeePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.shell}>
          <a className={styles.brand} href="#top" aria-label="ElevateBox AI Sales Employee home"><Image src="/elevatebox-mark.png" width={35} height={34} alt="" /><span>elevatebox</span></a>
          <nav className={styles.nav} aria-label="Page navigation"><a href="#how">How it works</a><a href="#use-cases">Use cases</a><a href="#capabilities">Capabilities</a><a href="#pricing">Pricing</a></nav>
          <a className={styles.topCta} href="#pricing">Build my agent <ArrowRight size={16} /></a>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}><span /> Built for Indian B2B teams</div>
            <h1>Hire the sales follow-up that never slows down.</h1>
            <p>Your ElevateBox AI employee calls every new enquiry in seconds, finds genuine buyers and books the next conversation for your team.</p>
            <div className={styles.heroActions}><a className={styles.primaryButton} href="#pricing">Reserve your build for ₹500 <ArrowRight size={18} /></a><a className={styles.secondaryLink} href="#demo">See a call unfold</a></div>
            <div className={styles.heroFacts}><span><Check size={15} /> Live in 24 hours*</span><span><Check size={15} /> 300 minutes included</span><span><Check size={15} /> No technical setup for you</span></div>
          </div>
          <div className={styles.agentStage} id="demo" aria-label="Illustration of an ElevateBox agent handling a lead call">
            <div className={styles.stageGlow} />
            <div className={styles.agentBadge}><Sparkles size={15} /> ElevateBox agent is working</div>
            <div className={styles.phoneCard}>
              <div className={styles.callTop}><div className={styles.callerAvatar}>AK</div><div><span>Calling new enquiry</span><strong>Arun Kumar · Acme Industries</strong></div><div className={styles.liveCall}><span /> 01:18</div></div>
              <div className={styles.wave} aria-hidden="true">{[14,30,20,42,25,50,32,19,46,28,54,22,36,16,44,26,49,19,34,14].map((height,i)=><i key={i} style={{height}} />)}</div>
              <div className={styles.transcript}><span>ElevateBox</span><p>“Understood. You need the system for three branches and want to start this month. Shall I book a 20-minute demo for tomorrow?”</p></div>
              <div className={styles.callOutcome}><span><BadgeCheck size={17} /> Decision-maker</span><span><CalendarCheck2 size={17} /> Demo booked</span><span><DatabaseZap size={17} /> CRM updated</span></div>
            </div>
            <div className={styles.agentFoot}><Languages size={17} /> Speaks English, Hindi and your business language</div>
          </div>
        </div>
        <div className={styles.ticker}><div>CALLS IN SECONDS <span>•</span> QUALIFIES BUYERS <span>•</span> BOOKS MEETINGS <span>•</span> FOLLOWS UP <span>•</span> UPDATES YOUR CRM <span>•</span> WORKS 24/7 <span>•</span> CALLS IN SECONDS <span>•</span> QUALIFIES BUYERS</div></div>
      </section>

      <section className={styles.process} id="how"><div className={styles.shell}>
        <div className={styles.sectionIntro}><span className={styles.kicker}>Your easiest sales hire</span><h2>Skip the scripts, integrations and endless setup.</h2><p>Tell us how a good salesperson handles the first call. We turn that knowledge into a working agent.</p></div>
        <div className={styles.processGrid}>
          <article><div className={styles.stepNo}>01</div><div className={styles.stepIcon}><Headphones /></div><h3>We learn your sales process</h3><p>Your offer, ideal buyer, FAQs, qualification rules and desired next step.</p><span>60-minute working session</span></article>
          <article className={styles.processAgent}><div className={styles.miniHead}><span className={styles.onlineDot} /> Agent configuration</div><ConfigRow icon={<PhoneCall />} label="Opening" value="Natural brand introduction" /><ConfigRow icon={<Target />} label="Qualification" value="5 buyer-fit questions" /><ConfigRow icon={<CalendarCheck2 />} label="Conversion" value="Calendar + human handoff" /><div className={styles.readyBar}><Zap size={17} /> Ready for test calls</div></article>
          <article><div className={styles.stepNo}>02</div><div className={styles.stepIcon}><ShieldCheck /></div><h3>You approve the test call</h3><p>Hear the voice, challenge the answers and approve exactly what goes live.</p><span>No surprise conversations</span></article>
          <article><div className={styles.stepNo}>03</div><div className={styles.stepIcon}><Zap /></div><h3>Your agent starts calling</h3><p>Connect your lead source and let every enquiry receive a consistent first response.</p><span>Standard launch in 24 hours*</span></article>
        </div>
      </div></section>

      <section className={styles.modes}><div className={styles.shell}>
        <div className={styles.sectionIntro}><span className={styles.kicker}>Two ways to grow</span><h2>Catch today’s demand. Recover yesterday’s leads.</h2></div>
        <div className={styles.modeGrid}>
          <article className={styles.modeDark}><div className={styles.modeIcon}><Zap /></div><span>INSTANT RESPONSE</span><h3>Call new leads while they still remember your ad.</h3><p>Website forms, Meta leads, missed calls and new CRM entries can trigger a conversation immediately.</p><div className={styles.speedLine}><strong>00:07</strong><span>Example response time after enquiry</span></div></article>
          <article className={styles.modeLight}><div className={styles.modeIcon}><RefreshCw /></div><span>SMART FOLLOW-UP</span><h3>Wake up the leads your team never had time to chase.</h3><p>Import an approved list, set respectful call windows and let the agent surface renewed intent.</p><div className={styles.followList}><span><Check /> Retry unanswered calls</span><span><Check /> Stop when asked</span><span><Check /> Send interested leads to sales</span></div></article>
        </div>
      </div></section>

      <section className={styles.casesSection} id="use-cases"><div className={styles.shell}>
        <div className={styles.sectionIntro}><span className={styles.kicker}>Built around your outcome</span><h2>If your business gets enquiries, your agent has a job to do.</h2><p>These are practical first workflows—not technical experiments.</p></div>
        <div className={styles.industryGrid}>{industries.map(({icon:Icon,name,line})=><article key={name}><Icon /><div><h3>{name}</h3><p>{line}</p></div><ArrowRight /></article>)}</div>
      </div></section>

      <section className={styles.capabilities} id="capabilities"><div className={styles.shell}>
        <div className={styles.sectionIntro}><span className={styles.kicker}>More than a talking bot</span><h2>The small details that make it useful at work.</h2></div>
        <div className={styles.bento}>
          <article className={styles.bentoWide}><div className={styles.languageCloud}><span>Hello</span><span>नमस्ते</span><span>నమస్కారం</span><span>வணக்கம்</span><span>ನಮಸ್ಕಾರ</span></div><h3>Speak the language your buyers trust</h3><p>Start with English plus one Indian language, then expand as your campaigns grow.</p></article>
          <Capability icon={<Clock3 />} title="Never misses the window" copy="Call during approved hours, retry unanswered leads and stop automatically when the buyer asks." />
          <Capability icon={<DatabaseZap />} title="Leaves your CRM cleaner" copy="Save the summary, qualification answers, disposition and next action after each call." />
          <Capability icon={<UserRoundCheck />} title="Knows when to bring a person in" copy="Transfer hot, urgent or sensitive conversations using your escalation rules." />
          <article className={styles.photoCard}><Image src="/elevatebox-sales-team.jpg" width={900} height={600} alt="ElevateBox team collaborating on a customer workflow" /><div><ShieldCheck /><h3>Human-reviewed before launch</h3></div></article>
          <article className={styles.bentoAccent}><PhoneCall /><strong>24/7</strong><h3>Consistent first conversations</h3><p>Every buyer hears the same approved promise and qualification process.</p></article>
        </div>
      </div></section>

      <section className={styles.pricing} id="pricing"><div className={`${styles.shell} ${styles.priceLayout}`}>
        <div className={styles.priceCopy}><span className={styles.kicker}>A low-risk first step</span><h2>See where revenue leaks before you buy the build.</h2><p>We map the moment a lead arrives, the conversations your team must repeat and the next step worth automating.</p><div className={styles.auditIncludes}><span><Check /> Lead-response audit</span><span><Check /> First agent call flow</span><span><Check /> Savings and volume estimate</span><span><Check /> ₹500 adjusted if you proceed</span></div></div>
        <div className={styles.priceCard}><div className={styles.priceLabel}>DONE-FOR-YOU LAUNCH</div><div className={styles.reservation}><div><span>Reserve with</span><strong>₹500</strong></div><ArrowRight /></div><div className={styles.fullPrice}><span>Then, after you approve the blueprint</span><strong>₹24,999 <small>one-time setup</small></strong></div><ul><li><Check /> 1 production voice agent</li><li><Check /> 2 call flows</li><li><Check /> English + 1 Indian language</li><li><Check /> Calendar + 1 standard integration</li><li><Check /> 300 connected launch minutes</li><li><Check /> 14 days of launch optimisation</li></ul><a className={styles.priceButton} href="mailto:hello@elevatebox.in?subject=Reserve%20my%20%E2%82%B9500%20Revenue%20Audit">Book my ₹500 Revenue Audit <ArrowRight size={18} /></a><p className={styles.finePrint}>Calling after 300 minutes: from ₹3,499 for 500 connected minutes. Taxes and special telephony charges may apply. Final scope is confirmed before payment.</p></div>
      </div></section>

      <section className={styles.faq} id="faq"><div className={`${styles.shell} ${styles.faqGrid}`}><div><span className={styles.kicker}>Clear answers</span><h2>Before you put an AI employee on the phone.</h2><p>Nothing goes live until you approve the voice, script and boundaries.</p></div><div className={styles.faqList}>{faqs.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
      <section className={styles.finalCta}><div className={styles.shell}><div><span>YOUR NEXT LEAD COULD ARRIVE ANY SECOND.</span><h2>Make sure someone calls.</h2></div><a href="mailto:hello@elevatebox.in?subject=Reserve%20my%20%E2%82%B9500%20Revenue%20Audit">Reserve for ₹500 <ArrowRight /></a></div></section>
      <footer className={styles.footer}><div className={styles.shell}><div className={styles.brand}><Image src="/elevatebox-mark.png" width={29} height={28} alt="" /><span>elevatebox</span></div><p>AI voice agents for B2B growth.</p><span>© 2026 ElevateBox</span></div></footer>
      <div className={styles.mobileBar}><div><span>Reserve your build</span><strong>₹500</strong></div><a href="#pricing">See package <ArrowRight size={17} /></a></div>
    </main>
  );
}

function ConfigRow({icon,label,value}:{icon:React.ReactNode;label:string;value:string}) { return <div className={styles.configRow}>{icon}<div><small>{label}</small><strong>{value}</strong></div><BadgeCheck size={18} /></div>; }
function Capability({icon,title,copy}:{icon:React.ReactNode;title:string;copy:string}) { return <article>{icon}<h3>{title}</h3><p>{copy}</p></article>; }
