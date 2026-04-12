export default function WebsiteDesignAgencySite() {
  const services = [
    {
      title: "Full Website Design",
      desc: "A complete website build for your business with a modern layout, clear messaging, and conversion-focused pages.",
    },
    {
      title: "Modern Optimization",
      desc: "Every page is designed to look great and load fast on phones, where most customers will find you.",
    },
    {
      title: "Launch Support",
      desc: "Free after-service for bug fixes so your site stays clean and working after it goes live.",
    },
  ];

  const projects = [
    {
      name: "Barbershop Demo",
      type: "Demo redesign",
      desc: "A clean booking-focused homepage for a local barber brand.",
    },
    {
      name: "Plumbing Demo",
      type: "Lead generation site",
      desc: "A fast service website built to turn visitors into phone calls.",
    },
    {
      name: "Restaurant Demo",
      type: "Menu and booking concept",
      desc: "A polished layout showcasing menu, location, and reservations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xl font-bold tracking-tight">Elevate Digital</div>
            <div className="text-sm text-slate-500">Modern websites for businesses across the United States</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-slate-600">Services</a>
            <a href="#work" className="hover:text-slate-600">Work</a>
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Website Design Agency
            </p>
            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
              Modern websites for businesses across the United States that want to look sharp and get more leads.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Elevate Digital builds full websites for $750 with a modern look, mobile-friendly pages, and free bug-fix support after launch.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-center text-white shadow-sm transition hover:opacity-90"
              >
                Start Your Website
              </a>
              <a
                href="#work"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-center transition hover:bg-slate-50"
              >
                See Demo Projects
              </a>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-2xl font-bold text-slate-900">$750</div>
                <div>Full website</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-2xl font-bold text-slate-900">Mobile</div>
                <div>Clean design</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-2xl font-bold text-slate-900">Support</div>
                <div>Free bug fixes</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Sample client result</div>
                  <div className="text-lg font-semibold">Local Plumbing Site</div>
                </div>
                <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Live-ready design
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold">Hero section</div>
                  <div className="text-sm text-slate-600">Emergency service headline, call button, trust badges.</div>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold">Service sections</div>
                  <div className="text-sm text-slate-600">Drain cleaning, repair, installation, and quote form.</div>
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold">Conversion focused</div>
                  <div className="text-sm text-slate-600">Built to get more phone calls and quote requests.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Everything your business needs to launch a clean, modern website.</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Portfolio</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Demo projects that show the kind of clean work Elevate Digital can deliver.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.name} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="text-sm text-slate-500">{project.type}</div>
                <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">{project.desc}</p>
                <button className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50">
                  View concept
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-slate-900 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">About</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">A modern Detroit web design brand for businesses that need a stronger online presence.</h2>
            </div>
            <div className="text-slate-300">
              <p className="leading-8">
                Elevate Digital creates modern websites for businesses across the country that want to look more professional online. Every site is built to feel clean, load well on mobile, and make it easy for customers to reach out.
              </p>
              <p className="mt-4 leading-8">
                The main offer is simple: a full website for $750, plus free bug-fix support after launch. It is a straightforward service for businesses that want a strong website without the usual confusion.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Start your website with Elevate Digital.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Send your business name and what you need, and Elevate Digital will reach out with the next step for your $750 full website build.
            </p>

            <form className="mt-8 grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Your name" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Business name" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 md:col-span-2" placeholder="Email address" />
              <textarea className="min-h-[140px] rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 md:col-span-2" placeholder="Tell me about your project" />
              <button className="rounded-2xl bg-slate-900 px-6 py-3 text-white transition hover:opacity-90 md:col-span-2">
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
