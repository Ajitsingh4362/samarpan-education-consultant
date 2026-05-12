import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  GraduationCap,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Building2,
  Users,
  ShieldCheck,
  MessageCircle,
  Star,
  Award,
  FileText,
  Sparkles,
  Menu,
  X,
  ClipboardCheck,
  Handshake,
  Landmark,
  Clock3
} from 'lucide-react';
import './styles.css';

const phone = '918789558223';
const displayPhone = '+91 878 955 8223';
const whatsappText = encodeURIComponent('Hello Samarpan Swarrnim Foundation, I want information about admission guidance and the Bihar Student Credit Card Scheme.');
const whatsappLink = `https://wa.me/${phone}?text=${whatsappText}`;

const courses = [
  'B.Tech', 'M.Tech', 'Polytechnic', 'B.Ed', 'D.El.Ed', 'BBA', 'BCA', 'MBA', 'MCA', 'B.Sc Nursing', 'Paramedical', 'ITI', 'Diploma Courses', 'Pharmacy', 'Hotel Management', 'Many More'
];

const services = [
  {
    icon: GraduationCap,
    title: 'Admission Guidance',
    text: 'Personal guidance for selecting the right course and college based on marks, budget, eligibility, and career goals.'
  },
  {
    icon: Landmark,
    title: 'Student Credit Card Scheme Support',
    text: 'Clear guidance for Bihar Student Credit Card Scheme process, document checklist, and admission-related steps.'
  },
  {
    icon: BookOpen,
    title: 'Career Counselling',
    text: 'Career roadmap support for B.Tech, Polytechnic, B.Ed, D.El.Ed, professional, diploma, and technical courses.'
  },
  {
    icon: Building2,
    title: 'College Selection',
    text: 'Guidance for admission in reputed colleges outside Bihar with course details and future scope.'
  }
];

const processSteps = [
  { icon: MessageCircle, title: 'Connect With Us', text: 'Call or WhatsApp your basic details, course interest, location preference, and budget.' },
  { icon: ClipboardCheck, title: 'Profile Review', text: 'We review your marks, documents, eligibility, and suitable admission options.' },
  { icon: Building2, title: 'College Shortlisting', text: 'You receive suitable college and course options with clear guidance.' },
  { icon: Handshake, title: 'Admission Support', text: 'We guide you step-by-step from counselling to admission confirmation.' }
];

const whyChoose = [
  'Complete admission and career guidance under one roof',
  'Support for Bihar Student Credit Card Scheme related queries',
  'Guidance for multiple professional and technical courses',
  'Student and parent-friendly counselling approach',
  'Clear process support from inquiry to admission'
];

const documents = [
  'Aadhaar Card', '10th & 12th Marksheet', 'Passport Size Photo', 'Bank Details', 'Residence Proof', 'Course/College Documents'
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = ['Home', 'Courses', 'Scheme', 'Process', 'Director', 'Contact'];
  const href = (name) => name === 'Home' ? '#home' : `#${name.toLowerCase()}`;
  return (
    <header className="header">
      <div className="container nav">
        <a href="#home" className="brand">
          <img src="/assets/logo.png" alt="Samarpan Swarrnim Foundation logo" />
          <div>
            <b>SAMARPAN</b>
            <span>Swarrnim Foundation</span>
          </div>
        </a>
        <nav className={open ? 'navlinks active' : 'navlinks'}>
          {links.map((item) => <a key={item} href={href(item)} onClick={() => setOpen(false)}>{item}</a>)}
          <a className="nav-btn" href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp Now</a>
        </nav>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="hero-bg-one"></div>
      <div className="hero-bg-two"></div>
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge"><Sparkles size={17}/> A Complete Information & Career Guidance Organization</div>
          <h1>Premium admission guidance for a better college and career</h1>
          <p className="lead">Samarpan Swarrnim Foundation helps students with admission guidance, course selection, career counselling, and Bihar Student Credit Card Scheme related support for higher education in reputed colleges.</p>
          <div className="hero-actions">
            <a className="primary-btn" href={whatsappLink} target="_blank" rel="noreferrer">Get Free Counselling <ArrowRight size={19}/></a>
            <a className="secondary-btn" href={`tel:${phone}`}><Phone size={18}/> Call {displayPhone}</a>
          </div>
          <div className="stats">
            <div><b>15+</b><span>Course Options</span></div>
            <div><b>100%</b><span>Guidance Support</span></div>
            <div><b>843302</b><span>Sitamarhi, Bihar</span></div>
          </div>
        </div>
        <div className="hero-card-wrap">
          <div className="director-card premium-card">
            <img src="/assets/director.png" alt="Director R Pramodh Kushwaha" />
            <div className="director-info">
              <span>Director</span>
              <h3>R Pramodh Kushwaha</h3>
              <p>Admission & Career Guidance Expert</p>
            </div>
          </div>
          <div className="floating-card one"><Award size={24}/><span>Trusted Guidance</span></div>
          <div className="floating-card two"><ShieldCheck size={24}/><span>Student Support</span></div>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="courses section-pad">
      <div className="container">
        <div className="section-title">
          <span>Admission Open</span>
          <h2>Courses We Guide For</h2>
          <p>Admission guidance is available for engineering, diploma, teaching, management, medical allied, technical, and many other professional courses.</p>
        </div>
        <div className="course-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={course} style={{'--delay': `${index * 0.04}s`}}>
              <CheckCircle2 size={20}/>
              <span>{course}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="scheme" className="services section-pad">
      <div className="container service-grid">
        <div className="scheme-box premium-card">
          <span className="small-label">Bihar Government Scheme</span>
          <h2>Bihar Student Credit Card Scheme Guidance</h2>
          <p>Get proper guidance for understanding the higher education support process, required documents, college selection, and admission steps.</p>
          <ul>
            <li><CheckCircle2/> Document checklist guidance</li>
            <li><CheckCircle2/> College and course selection support</li>
            <li><CheckCircle2/> Step-by-step admission process guidance</li>
            <li><CheckCircle2/> Career counselling and future roadmap</li>
          </ul>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="primary-btn">Ask on WhatsApp <MessageCircle size={18}/></a>
        </div>
        <div className="service-cards">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div className="service-card" key={item.title}>
                <div className="icon-box"><Icon size={26}/></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="process-section section-pad">
      <div className="container">
        <div className="section-title">
          <span>Simple Process</span>
          <h2>How We Help Students</h2>
          <p>From the first enquiry to final admission guidance, the process is designed to be simple, transparent, and student-friendly.</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="process-card" key={step.title}>
                <div className="step-no">0{index + 1}</div>
                <div className="icon-box"><Icon size={26}/></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="why-section section-pad">
      <div className="container why-grid">
        <div>
          <span className="small-label">Why Choose Us</span>
          <h2>Reliable counselling for students and parents</h2>
          <p>We focus on clear information, practical admission options, and proper guidance so students can take confident decisions for their higher education.</p>
          <div className="why-list">
            {whyChoose.map((item) => <div key={item}><CheckCircle2/><span>{item}</span></div>)}
          </div>
        </div>
        <div className="documents-card premium-card">
          <div className="doc-head"><FileText/><h3>Basic Documents Usually Required</h3></div>
          <div className="doc-grid">
            {documents.map((item) => <span key={item}>{item}</span>)}
          </div>
          <p><Clock3 size={18}/> Contact us for a proper checklist according to your selected course and college.</p>
        </div>
      </div>
    </section>
  );
}

function Director() {
  return (
    <section id="director" className="director-section section-pad">
      <div className="container director-grid">
        <div className="director-photo premium-card">
          <img src="/assets/director.png" alt="R Pramodh Kushwaha" />
        </div>
        <div className="director-text">
          <span className="small-label">Leadership</span>
          <h2>Director: R Pramodh Kushwaha</h2>
          <p>The mission of Samarpan Swarrnim Foundation is to guide students with the right information, the right course, and the right college options. We make the admission journey simple, transparent, and supportive for students and parents.</p>
          <div className="feature-list">
            <div><Users/><span>Personal counselling for students and parents</span></div>
            <div><Star/><span>Premium guidance for admission in colleges outside Bihar</span></div>
            <div><ShieldCheck/><span>Clear process support from inquiry to admission</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section-pad">
      <div className="container contact-card premium-card">
        <div>
          <span className="small-label">Contact Us</span>
          <h2>Start your admission counselling today</h2>
          <p>Call or WhatsApp us to get information about courses, college options, admission process, and Bihar Student Credit Card Scheme guidance.</p>
        </div>
        <div className="contact-info">
          <a href={`tel:${phone}`}><Phone/> {displayPhone}</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp Admission Query</a>
          <p><MapPin/> Pillikutti Ring Bandh, Sitamarhi, Bihar - 843302</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo.png" alt="Samarpan logo" />
          <div>
            <h3>SAMARPAN SWARRNIM FOUNDATION</h3>
            <p>A Complete Information & Career Guidance Organization</p>
          </div>
        </div>
        <p>© {new Date().getFullYear()} Samarpan Swarrnim Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <span className="wave"></span>
      <MessageCircle size={30}/>
    </a>
  );
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Courses />
      <Services />
      <Process />
      <WhyChoose />
      <Director />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
