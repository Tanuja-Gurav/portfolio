// Next.js single-file portfolio page (app/page.tsx or pages/index.jsx)
// Tailwind CSS required. Add images to /public (hero.jpg, project1.jpg, project2.jpg)
// This component reproduces the Wix UX Designer template layout: parallax hero, resume-like sections, projects, contact.
'use client';
import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased">
      {/* NAVBAR */}
      <header className="fixed w-full z-40 bg-transparent">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center font-bold">TD</div>
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold">Tanu Dhillon</h1>
              <p className="text-sm text-gray-200">UX Designer & Frontend Developer</p>
            </div>
          </div>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#work" className="hover:underline">Work</a></li>
            <li><a href="#resume" className="hover:underline">Resume</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
          <div className="md:hidden">{/* mobile menu placeholder */}
            <button aria-label="menu" className="p-2 bg-white/10 rounded">☰</button>
          </div>
        </nav>
      </header>

      {/* HERO with parallax background */}
      <section
        id="home"
        className="h-screen flex items-center"
        style={{
          backgroundImage: `url('/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 text-white">
          <div className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight"> Hi — I&apos;m Tanu.</h2>
            <p className="mt-4 text-lg md:text-xl text-gray-200">I design clean interfaces and build fast frontends. I blend UX thinking with code to ship usable product experiences.</p>
            <div className="mt-6 flex gap-4">
              <a href="#work" className="inline-block px-6 py-3 bg-white text-black rounded-md font-medium">View Work</a>
              <a href="#contact" className="inline-block px-6 py-3 border border-white/30 rounded-md">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* About / Resume strip */}
      <main className="-mt-24 relative z-10">
        <section id="about" className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-3xl shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold">About me</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">I’m a UX-minded frontend developer focused on building polished, accessible web experiences. My approach mixes research, design systems, and performant code. I’ve worked on cross-functional teams building apps, marketing sites, and design systems.</p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">Pune, India</p>
                </div>
                <div>
                  <h4 className="font-semibold">Availability</h4>
                  <p className="text-gray-600">Open to roles & freelance</p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a className="px-4 py-2 bg-blue-600 text-white rounded" href="#resume">Download CV</a>
                <a className="px-4 py-2 border rounded" href="#contact">Hire me</a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                <img src="/profile.jpg" alt="profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Work / Projects */}
        <section id="work" className="max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-3xl font-bold mb-8">Selected work</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: 'Project Alpha', desc: 'A marketing site with interactive animations.', img: '/project1.jpg'},
              {title: 'Product Dashboard', desc: 'Data-heavy dashboard with UX-first patterns.', img: '/project2.jpg'},
              {title: 'Design System', desc: 'Component library and tokens for a startup.', img: '/project3.jpg'},
            ].map((p) => (
              <article key={p.title} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
                <img src={p.img} className="w-full h-48 object-cover" alt={p.title} />
                <div className="p-6 bg-white">
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                  <p className="text-gray-600 mt-2">{p.desc}</p>
                  <div className="mt-4">
                    <a href="#" className="text-sm">Case study →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Resume / Experience */}
        <section id="resume" className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-2xl">
          <h3 className="text-3xl font-bold mb-6">Experience</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-3" />
              <div>
                <h4 className="font-semibold">Frontend Developer — Acme Inc</h4>
                <p className="text-sm text-gray-600">2023 — Present</p>
                <p className="mt-2 text-gray-700">Built a component library and improved Lighthouse scores across the app.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-3" />
              <div>
                <h4 className="font-semibold">UX Designer — StudioCo</h4>
                <p className="text-sm text-gray-600">2021 — 2023</p>
                <p className="mt-2 text-gray-700">Led user research and translated findings into high-fidelity UI flows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow p-8">
            <div>
              <h3 className="text-3xl font-bold">Let’s build something</h3>
              <p className="mt-4 text-gray-700">I’m available for hire — freelance or full-time. Send a note and I’ll get back to you.</p>
              <div className="mt-6">
                <p className="text-sm text-gray-500">Email</p>
                <a className="block font-mono mt-1" href="mailto:hello@example.com">hello@example.com</a>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Message sent — replace this with your form handler.')}}>
              <input className="w-full rounded p-3 border" placeholder="Your name" required />
              <input className="w-full rounded p-3 border" placeholder="Your email" type="email" required />
              <textarea className="w-full rounded p-3 border" rows={5} placeholder="Tell me about your project" required />
              <div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">Send message</button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Tanu — Built with Next.js & Tailwind
        </footer>
      </main>

      {/* Small smooth-scroll script */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
