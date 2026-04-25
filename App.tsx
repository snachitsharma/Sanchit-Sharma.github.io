import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Target,
  Repeat,
  Palette,
  MessageSquare,
  CheckCircle,
  Star,
  Linkedin,
  Mail,
  Calendar,
  X,
  ChevronDown,
  Quote,
  Zap,
  Search,
  MousePointer,
  Cpu,
  Rocket
} from 'lucide-react';

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

// Animated Section Component
function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
      }}
    >
      {children}
    </div>
  );
}

// Animated Card Component with stagger effect
function AnimatedCard({ children, className = '', index = 0 }: { children: React.ReactNode; className?: string; index?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
      }}
    >
      {children}
    </div>
  );
}

// Animated Background Component - Premium Cyber-Noir
function AnimatedBackground() {
  return (
    <div className="animated-bg">
      {/* Ethereal Liquid Mesh blobs */}
      <div className="mesh-container">
        <div className="mesh-blob blob-1" />
        <div className="mesh-blob blob-2" />
        <div className="mesh-blob blob-3" />
      </div>
      
      {/* Subtle Perspective Grid */}
      <div className="perspective-grid" />
      
      {/* Scanning Light Leaks */}
      <div className="light-leak leak-1" />
      <div className="light-leak leak-2" />
      <div className="light-leak leak-3" />
      
      {/* Floating Particles for Depth */}
      <div className="particle-field">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const duration = Math.random() * 20 + 20;
          return (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: i % 2 === 0 ? 'rgba(37, 99, 235, 0.3)' : 'rgba(249, 115, 22, 0.2)',
                animation: `particle-float ${duration}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          );
        })}
      </div>
      
      {/* High-End Cinematic Grain */}
      <div className="grain-overlay" />
      
      {/* Edge Vignette */}
      <div className="vignette-outer" />
    </div>
  );
}

export function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    date: '',
    time: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringHeadline, setIsHoveringHeadline] = useState(false);

  const handleHeadlineMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/sanchitnandsharma7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          date: formData.date,
          time: formData.time,
          message: formData.message,
          _subject: `New Call Request from ${formData.name}`,
        })
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '', date: '', time: '' });
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-bold tracking-wider">
            <span className="text-blue-500">SANCHIT</span>
            <span className="text-white"> SHARMA</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors">Process</button>
            <button onClick={() => scrollToSection('work')} className="hover:text-white transition-colors">Work</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Testimonials</button>
          </div>
          <button
            onClick={() => scrollToSection('book-call')}
            className="neon-button bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Interactive Reveal Headline */}
          <div 
            className="relative mb-10 py-10"
            onMouseMove={handleHeadlineMouseMove}
            onMouseEnter={() => setIsHoveringHeadline(true)}
            onMouseLeave={() => setIsHoveringHeadline(false)}
          >
            {/* Background Easter Egg Layer */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
              style={{ 
                opacity: isHoveringHeadline ? 1 : 0,
                // The reveal radius is now slightly larger for a smoother feel
                clipPath: isHoveringHeadline ? `circle(100px at ${mousePos.x}px ${mousePos.y}px)` : 'circle(0% at 50% 50%)',
                WebkitClipPath: isHoveringHeadline ? `circle(100px at ${mousePos.x}px ${mousePos.y}px)` : 'circle(0% at 50% 50%)'
              }}
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight px-4 select-none text-center">
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 bg-clip-text text-transparent italic">
                  "You're already exploring why not just hit those dm's up"
                </span>
              </p>
            </div>
            
            {/* Foreground Main Headline Layer */}
            <h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight transition-all duration-300 select-none"
              style={{
                // SOFT EDGES mask without a visible circle div
                maskImage: isHoveringHeadline ? `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, transparent 60px, black 100px)` : 'none',
                WebkitMaskImage: isHoveringHeadline ? `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, transparent 60px, black 100px)` : 'none'
              }}
            >
              I help founders build a strong social media presence that feels{' '}
              <span className="text-blue-500">credible</span>,{' '}
              <span className="text-orange-500">intentional</span>, and{' '}
              <span className="text-blue-400">human</span>.
            </h1>
          </div>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-8">
            I work at the intersection of content strategy and design to help founders turn their social media into an <span className="text-orange-400">authority asset</span>, not just another posting channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('book-call')}
              className="neon-button bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium text-base transition-all flex items-center justify-center gap-2"
            >
              Let's work together <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="neon-button neon-button-secondary border border-gray-600 text-white px-6 py-3 rounded-lg font-medium text-base transition-all hover:border-blue-500"
            >
              View my work
            </button>
          </div>
          <button
            onClick={() => scrollToSection('intro')}
            className="mt-12 animate-bounce text-gray-500 hover:text-orange-500 transition-colors"
          >
            <ChevronDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </section>

      {/* Intro / Positioning */}
      <section id="intro" className="py-20 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Most founders don't struggle with <span className="text-blue-400">effort</span>.<br />
              They struggle with <span className="text-blue-500">direction</span>.
            </h2>
          </AnimatedSection>
          <div className="text-base text-gray-400 space-y-4">
            <AnimatedSection delay={100}>
              <p>
                They post consistently, try trends, copy what works for others, and still feel invisible.
                Not because they lack talent, but because their content lacks clarity and intent.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p>
                I help founders slow things down, get clear on what they stand for, and build a social media presence that actually reflects their expertise.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-4 mt-10">
              <AnimatedSection delay={300}>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-white font-medium text-sm">No gimmicks.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-white font-medium text-sm">No overposting.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={500}>
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-white font-medium text-sm">Just clear messaging, thoughtful design, and content that earns trust over time.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section id="services" className="py-20 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">What I Do</h2>
            <p className="text-gray-400 text-base text-center mb-12">I help founders in three core areas:</p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <AnimatedCard index={0}>
              <div className="interactive-card shimmer-card rounded-xl p-6 group h-full">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                  <Target className="w-6 h-6 text-blue-500 card-icon" />
                </div>
                <h3 className="text-lg font-bold mb-3">Authority-Driven Content Strategy</h3>
                <p className="text-gray-400 text-sm mb-4">
                  I help you define <span className="text-blue-400 font-medium">why</span> you're posting before deciding what to post.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Clarifying your positioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Identifying the emotions your content should create</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Shaping content themes that align with your business goals</span>
                  </li>
                </ul>
                <p className="mt-4 text-blue-400 font-medium text-sm">
                  The result is content that feels intentional, not random.
                </p>
              </div>
            </AnimatedCard>

            {/* Service 2 */}
            <AnimatedCard index={1}>
              <div className="interactive-card shimmer-card rounded-xl p-6 group h-full">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                  <Repeat className="w-6 h-6 text-blue-500 card-icon" />
                </div>
                <h3 className="text-lg font-bold mb-3">Short-Form Content Systems</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Instead of chasing virality, I help founders build <span className="text-blue-400 font-medium">repeatable systems</span> for short-form content.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Reduce overthinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Improve consistency naturally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Make your content easier to maintain long-term</span>
                  </li>
                </ul>
                <p className="mt-4 text-blue-400 font-medium text-sm">
                  This works across platforms while staying grounded in your voice.
                </p>
              </div>
            </AnimatedCard>

            {/* Service 3 */}
            <AnimatedCard index={2}>
              <div className="interactive-card shimmer-card rounded-xl p-6 group h-full">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                  <Palette className="w-6 h-6 text-blue-500 card-icon" />
                </div>
                <h3 className="text-lg font-bold mb-3">Visual Direction & Brand Clarity</h3>
                <p className="text-gray-400 text-sm mb-4">
                  As a graphic designer, I care deeply about how things <span className="text-blue-400 font-medium">feel visually</span>.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Your content looks cohesive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Your visuals support your message</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Your brand feels recognizable and trustworthy</span>
                  </li>
                </ul>
                <p className="mt-4 text-blue-400 font-medium text-sm">
                  Design isn't decoration. It's communication.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* How I Think & Work - NEW SECTION */}
      <section id="process" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">How I Think & Work</h2>
          <div className="text-center mb-12">
            <p className="text-gray-400 text-base">I don't start with posts.</p>
            <p className="text-blue-400 text-base font-medium">I start with understanding.</p>
          </div>
          
          <p className="text-gray-500 text-sm text-center max-w-2xl mx-auto mb-16">
            Most content fails because it's created in isolation.
            I approach content as a system built on clarity, patterns, and intent.
          </p>

          {/* Process Cards */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="interactive-card shimmer-card rounded-xl p-6 md:p-8 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-500 card-icon" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Turning One Conversation into Months of Content</h3>
                  <p className="text-gray-400 text-sm">In a single working session, I focus on extracting:</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-0 md:ml-16">
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Your point of view</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Your lived experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>The problems you understand better than most</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Core content themes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Repeatable story angles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Message variations across formats</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-500 text-sm mt-4 ml-0 md:ml-16">
                The goal isn't volume. It's <span className="text-blue-400">direction</span>.
              </p>
            </div>

            {/* Card 2 */}
            <div className="interactive-card shimmer-card rounded-xl p-6 md:p-8 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-blue-500 card-icon" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Reverse Engineering the Niche (Step by Step)</h3>
                  <p className="text-gray-400 text-sm">Before creating anything, I study the landscape. I break down:</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm ml-0 md:ml-16 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>What your niche talks about repeatedly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>What competitors are posting and why it works</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>What feels overused, underused, or missing entirely</span>
                </li>
              </ul>
              <p className="text-gray-500 text-sm ml-0 md:ml-16">
                This ensures your content isn't copied, reactive, or trend-chasing. It's grounded in <span className="text-blue-400">relevance and differentiation</span>.
              </p>
            </div>

            {/* Card 3 */}
            <div className="interactive-card shimmer-card rounded-xl p-6 md:p-8 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MousePointer className="w-6 h-6 text-blue-500 card-icon" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Studying Hooks That Actually Stop Scroll</h3>
                  <p className="text-gray-400 text-sm">I don't guess hooks. I study them. I analyze:</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm ml-0 md:ml-16 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Which opening lines consistently pull attention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>What emotional triggers cause people to pause</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>How curiosity, tension, and relatability are framed</span>
                </li>
              </ul>
              <p className="text-gray-500 text-sm ml-0 md:ml-16">
                The goal isn't to "go viral once." It's to build <span className="text-blue-400">repeatable attention</span> without losing authenticity.
              </p>
            </div>

            {/* Card 4 */}
            <div className="interactive-card shimmer-card rounded-xl p-6 md:p-8 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-blue-500 card-icon" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Using AI as a Creative and Strategic Support System</h3>
                  <p className="text-gray-400 text-sm">I'm deeply interested in how AI can reduce friction in creative work. I use AI to:</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm ml-0 md:ml-16 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Speed up ideation without losing originality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Organize and refine messy thoughts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Test variations before publishing</span>
                </li>
              </ul>
              <p className="text-gray-500 text-sm ml-0 md:ml-16">
                AI doesn't replace thinking. It <span className="text-blue-400">supports it</span>.
              </p>
            </div>
          </div>

          {/* What This Means for You */}
          <div className="mt-12 interactive-card interactive-card-orange glow-border rounded-xl p-6 md:p-8 !bg-gradient-to-r from-blue-600/10 to-orange-500/10">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-bold">What This Means for You</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">This way of working leads to:</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-white">Less guesswork</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-white">Clearer direction</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-white">Faster execution</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-white">Intentional content</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              Every post has a reason. Every idea connects back to your larger story. That's how <span className="text-orange-400 font-medium">momentum is built sustainably</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Graphic Design & Visual Work */}
      <section id="work" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Graphic Design & Visual Work</h2>
          <p className="text-gray-400 text-base text-center mb-4 max-w-xl mx-auto">
            Design has always been a core part of how I think.
          </p>
          <p className="text-gray-500 text-sm text-center mb-12 max-w-xl mx-auto">
            Before strategy, before content systems, I was a graphic designer.
            That background shapes how I approach everything I do today.
          </p>

          {/* Masonry-style Portfolio Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-10">
            {[
              { image: 'https://lh3.googleusercontent.com/d/1aGfNUdEgxUdoXU5C7ijdFvKWRUgW0zoc' },
              { image: 'https://lh3.googleusercontent.com/d/1JKoSJYMrUD7mNOEB2n0Lhs3zIkMYaSkf' },
              { image: 'https://lh3.googleusercontent.com/d/1sTsJxiMoXZLxsBBU6h8aRhvrIJZ_1FaH' },
              { image: 'https://lh3.googleusercontent.com/d/1mKQG-ml4UC_eq6XDYZgXdTIb4kIgFIux' },
              { image: 'https://lh3.googleusercontent.com/d/1TS_xliJiGamUN4mEN4OMbG9ugj2v9V8E' },
              { image: 'https://lh3.googleusercontent.com/d/1a_fAcOLItU3ALCKK1-CMppdlqNhQdfr7' },
              { image: 'https://lh3.googleusercontent.com/d/1VQZYmTWCBv9MqjfG6HHTs_kIt7J4VbuP' },
              { image: 'https://lh3.googleusercontent.com/d/1UE9skb5qO-8LYQabJ7h6-5imDfEXf-i7' },
              { image: 'https://lh3.googleusercontent.com/d/1yeACWVuQXPVBdRS4AbxihgWbKhYojAvV' },
              { image: 'https://lh3.googleusercontent.com/d/1RjIORx1z6W6HM2Fvp0gog22K0bNzcF-n' },
              { image: 'https://lh3.googleusercontent.com/d/1vXvmq6lWjprGOmGs8Ay431HH1Kx7REaz' },
              { image: 'https://lh3.googleusercontent.com/d/1YfxIFYcWpVt5JXEAjWCE_w2uYNGA85WR' },
              { image: 'https://lh3.googleusercontent.com/d/1fiAVhjdKUp3QaA54s7QYBpANTyMzK64j' },
              { image: 'https://lh3.googleusercontent.com/d/1dhXqPDWfB7Cu9muETdjME_E4Wp11Rek5' },
            ].map((item, index) => (
              <AnimatedCard key={index} index={index % 6} className="break-inside-avoid">
                <div className="rounded-xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer group relative bg-gray-800">
                  <img 
                    src={item.image} 
                    alt="" 
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">My design style is <span className="text-blue-400">clean</span>, <span className="text-blue-400">functional</span>, and <span className="text-blue-400">intentional</span>.</p>
            <p className="text-gray-500 text-sm">I focus on clarity over decoration, and usability over trends.</p>
          </div>
        </div>
      </section>

      {/* Why This Approach Works */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why This Approach Works</h2>
          <p className="text-lg text-gray-400 mb-6">
            I don't believe in loud content.<br />
            I believe in <span className="text-blue-500 font-semibold">clear</span> content.
          </p>
          <p className="text-base text-gray-500 mb-10">
            The strongest brands don't try to say everything.
            They say the right things, consistently, in a way that feels natural.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="interactive-card tilt-card rounded-lg p-5">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-5 h-5 text-blue-500 card-icon" />
              </div>
              <h3 className="font-medium text-sm mb-1 text-reveal">Strategic Thinking</h3>
              <p className="text-gray-500 text-xs">Every piece of content serves a purpose</p>
            </div>
            <div className="interactive-card tilt-card rounded-lg p-5">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-5 h-5 text-blue-500 card-icon" />
              </div>
              <h3 className="font-medium text-sm mb-1 text-reveal">Emotional Awareness</h3>
              <p className="text-gray-500 text-xs">Understanding what resonates with your audience</p>
            </div>
            <div className="interactive-card tilt-card rounded-lg p-5">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Palette className="w-5 h-5 text-blue-500 card-icon" />
              </div>
              <h3 className="font-medium text-sm mb-1 text-reveal">Visual Clarity</h3>
              <p className="text-gray-500 text-xs">Design that communicates, not decorates</p>
            </div>
          </div>
          
          <p className="text-base text-blue-400 font-medium">
            So your presence feels trustworthy before you ever sell anything.
          </p>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Profile Photo - matches text height */}
            <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
              <div className="w-64 md:w-72 rounded-xl overflow-hidden border-2 border-blue-500 bg-gray-800">
                <img 
                  src="https://lh3.googleusercontent.com/d/1k3wqxOQkzl8Rjn_c0ERXH7ErAGtaYDgE" 
                  alt="Sanchit Sharma" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Hi, I'm <span className="text-blue-500">Sanchit</span>.</h2>
              <p className="text-gray-400 text-sm mb-4">
                I work with founders who want their social media presence to actually mean something.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                With a background in graphic design and a focus on content strategy, I help founders communicate clearly, show up intentionally, and build authority without burning out.
              </p>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Clarity over noise
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Systems over hacks
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  Progress that feels sustainable
                </p>
              </div>
              <p className="text-gray-500 mt-4 text-xs">
                Outside of work, I enjoy quiet routines, good music, and building things slowly but thoughtfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work Best With */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Who I Work Best With</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="interactive-card interactive-card-orange shimmer-card rounded-xl p-6 !border-blue-500/50">
              <h3 className="text-lg font-bold mb-4 text-orange-400">✓ Good Fit</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Founders building something long-term</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>People who value clarity over hype</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Creatives, consultants, and operators who want their content to feel authentic</span>
                </li>
              </ul>
            </div>
            <div className="interactive-card shimmer-card rounded-xl p-6 !border-gray-700">
              <h3 className="text-lg font-bold mb-4 text-gray-400">✗ Not Ideal</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Looking for shortcuts or overnight growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Want to chase every trend</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>Prefer quantity over quality</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-gray-400 text-sm mt-6">
            If you're looking to build trust and authority over time, <span className="text-orange-400">we'll work well together</span>.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Client Testimonials</h2>
            <p className="text-gray-400 text-base text-center mb-12">What founders say about working with me</p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Paul Clause',
                role: 'Founder, PropertyFellow',
                quote: 'Sanchit helped me transform my scattered content approach into a cohesive strategy. My engagement has never been more meaningful.',
                rating: 5
              },
              {
                name: 'MAAVI',
                role: 'Music Producer',
                quote: 'Finally, someone who understands that social media isn\'t about posting more—it\'s about posting with intention. Highly recommend.',
                rating: 5
              },
              {
                name: 'Dinesh Ranjani',
                role: 'Founder, Alric - Watch Ecommerce',
                quote: 'The clarity Sanchit brought to my brand positioning was exactly what I needed. My content finally feels like me.',
                rating: 5
              },
            ].map((testimonial, index) => (
              <AnimatedCard key={index} index={index}>
                <div
                  className="testimonial-card interactive-card shimmer-card rounded-xl p-6 relative h-full"
                >
                  <Quote className="w-8 h-8 text-blue-600/30 absolute top-4 right-4" />
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-800 pt-3">
                    <p className="font-medium text-sm text-white">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            If this approach resonates with you, <span className="text-blue-500">let's talk</span>.
          </h2>
          <p className="text-gray-400 text-base mb-6">Whether you're:</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="bg-blue-600/20 text-blue-400 px-3 py-1.5 rounded-full text-sm">Refining your content direction</span>
            <span className="bg-blue-600/20 text-blue-400 px-3 py-1.5 rounded-full text-sm">Rebuilding your social media presence</span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-sm">Looking for clarity around positioning</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">You can reach out below.</p>
          
          <button
            onClick={() => scrollToSection('book-call')}
            className="neon-button bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-base transition-all inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Get in touch
          </button>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="book-call-section bg-gray-900 rounded-3xl p-8 md:p-12 relative">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                <Calendar className="w-8 h-8 inline-block text-orange-500 mr-2 mb-1" />
                Book a Call
              </h2>
              <p className="text-gray-400 text-base">Let's discuss how I can help you build your social media presence</p>
            </div>
            
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Request Sent!</h4>
                <p className="text-gray-400">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors cursor-text"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors cursor-text"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Time</label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Select time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">Tell me about your project</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500 focus:outline-none transition-colors resize-none cursor-text"
                    placeholder="What are you looking to achieve with your social media presence?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neon-button w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Schedule Call
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-1">Sanchit Sharma</h3>
              <p className="text-gray-500 text-sm">Content Strategy & Design</p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/sanchit-sharma-30a944146"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:sanchitnandsharma7@gmail.com"
                className="w-10 h-10 bg-gray-900 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-600 text-xs">
              Built with <span className="text-blue-500">intention</span>, not noise.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
