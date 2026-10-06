import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please write a message (at least 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#0066ff', '#ffffff']
    });

    setSubmitted(true);

    // Pre-compose mailto URI
    const subject = encodeURIComponent(`Collaboration Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Vishesh,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`);
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Optional timeout to open mail client
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            08 // GET IN TOUCH
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            LET'S BUILD <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">SOMETHING GREAT.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-white/40 mt-2 max-w-xl">
            Have an idea, project or opportunity? Let's turn it into something meaningful.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Email Copy Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <span className="font-mono text-xs uppercase text-cyan-400 tracking-wider">
                DIRECT INBOX
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-1 mb-2">
                Say Hello
              </h3>
              <p className="text-xs text-white/50 leading-relaxed mb-6">
                Feel free to email me directly regarding full-time roles, freelance architectures, or engineering collaborations.
              </p>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs text-white/90">
                <span className="truncate mr-2 text-cyan-300">{personalInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-cyan-400 hover:text-black transition-all shrink-0 text-white/70"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="font-mono text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
                  ✓ Copied to clipboard! Ready to paste into your mail app.
                </p>
              )}
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between group transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-all mb-4">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-white/40 block">Profile</span>
                  <span className="font-display font-bold text-sm text-white group-hover:text-cyan-300">GitHub</span>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between group transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-all mb-4">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-white/40 block">Connect</span>
                  <span className="font-display font-bold text-sm text-white group-hover:text-cyan-300">LinkedIn</span>
                </div>
              </a>
            </div>

            {/* Quick Status Pill */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="font-mono text-xs text-white/60">
                Average response latency: <span className="text-white font-medium">&lt; 24 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative">
            
            {submitted ? (
              <div className="text-center py-12 animate-[fadeIn_0.5s_ease-out]">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mx-auto mb-4 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Message Initialized!
                </h3>
                <p className="text-sm text-white/60 max-w-md mx-auto mb-6">
                  Thank you for reaching out. Your default email client is being triggered to send your note directly to Vishesh.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-mono text-cyan-300 border border-white/10"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/50 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-white/20 focus:outline-none transition-all ${
                      errors.name ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-cyan-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                    }`}
                  />
                  {errors.name && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/50 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-white/20 focus:outline-none transition-all ${
                      errors.email ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-cyan-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                    }`}
                  />
                  {errors.email && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/50 mb-2">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or timeline..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-white/20 focus:outline-none transition-all resize-none ${
                      errors.message ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-cyan-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                    }`}
                  />
                  {errors.message && <p className="font-mono text-[11px] text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  data-cursor="SEND"
                  className="btn-ripple w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] flex items-center justify-center gap-2 group"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
