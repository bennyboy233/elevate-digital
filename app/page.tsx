export default function Home() {
  const services = [
    {
      title: "Full Website Design",
      desc: "A complete modern website built to make your business look professional and turn visitors into leads.",
    },
    {
      title: "Mobile-Friendly Layout",
      desc: "Your site will look clean and work smoothly on phones, tablets, and desktops.",
    },
    {
      title: "Free Bug-Fix Support",
      desc: "If anything breaks after launch, Elevate Digital will fix it at no extra cost.",
    },
  ];

  const projects = [
    {
      name: "Barbershop Demo",
      type: "Demo redesign",
      desc: "A clean booking-focused website concept for a modern barber brand.",
    },
    {
      name: "Plumbing Demo",
      type: "Lead generation site",
      desc: "A service-based website built to drive more calls and quote requests.",
    },
    {
      name: "Restaurant Demo",
      type: "Menu and booking concept",
      desc: "A polished layout showing menu, hours, location, and reservations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xl font-bold tracking-tight">Elevate Digital</div>
            <div className="text-sm text-slate-500">
              Modern websites for businesses across the United States
            </div>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-slate-600">
              Services
            </a>
            <a href="#work" className="hover:text-slate-600">
              Work
            </a>
            <a href="#pricing" className="hover:text-slate-600">
              Pricing
            </a>
            <a href="#contact" className="hover:text-slate-600">
              Contact
            </a>
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
              Modern websites for businesses that want more leads.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Elevate Digital builds full websites for $750 with a modern look,
              mobile-friendly pages, and free bug-fix support after launch.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-center text-white shadow-sm transition hover:opacity-90"
              >
                Order My Website
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-center transition hover:bg-slate-50"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-2xl font-bold text-slate-900">$750</div>
                <div>Full website</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-2xl font-bold text-slate-900">Modern</div>
                <div>Clean design</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-2xl font-bold text-slate-900">Support</div>
                <div>Bug fixes included</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Sample client result</div>
                  <div className="text-lg font-semibold">Local Service Business Site</div>
                </div>
                <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Live-ready design
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold">Strong homepage</div>
                  <div className="text-sm text-slate-600">
                    Clear headline, service overview, trust-building design.
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold">Built for conversion</div>
                  <div className="text-sm text-slate-600">
                    Contact buttons, inquiry forms, and clean structure that helps get leads.
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="font-semibold">Simple process</div>
                  <div className="text-sm text-slate-600">
                    Order, send business info, review design, launch the site.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Everything your business needs to launch a clean, modern website.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Demo projects that show the kind of clean work Elevate Digital can deliver.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-3xl border border-slate-200 p-6 shadow-sm"
              >
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

        <section id="pricing" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Order Your Website
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                A full modern website for $750.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Elevate Digital offers a complete website build for one flat price.
                That includes a modern design, mobile-friendly layout, and free
                bug-fix support after launch.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
                <div className="text-sm text-slate-500">What is included</div>
                <div className="mt-3 text-4xl font-bold">$750</div>

                <ul className="mt-6 space-y-3 text-slate-600">
                  <li>• Full custom website design</li>
                  <li>• Mobile-friendly layout</li>
                  <li>• Contact form setup</li>
                  <li>• Basic SEO structure</li>
                  <li>• Free bug-fix support after launch</li>
                </ul>

                <a
                  href="https://buy.stripe.com/3cIfZi2JR9JTbXqfJG43S00"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block rounded-2xl bg-slate-900 px-6 py-3 text-white transition hover:opacity-90"
                >
                  Order My Website
                </a>

            
              </div>

              <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
                <div className="text-sm text-slate-500">How it works</div>

                <div className="mt-4 space-y-4 text-slate-600">
                  <p>
                    <span className="font-semibold text-slate-900">1.</span> Client places the order.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">2.</span> You follow up to collect business details, images, and content.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">3.</span> You design and build the website.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">4.</span> You launch the site and handle any bug fixes after delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Start your website with Elevate Digital.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Send your business name and what you need, and Elevate Digital will
              reach out with the next steps.
            </p>

            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="mt-8 grid gap-4 md:grid-cols-2"
            >
              <input
                name="name"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Your name"
              />
              <input
                name="business"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                placeholder="Business name"
              />
              <input
                type="email"
                name="email"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 md:col-span-2"
                placeholder="Email address"
              />
              <textarea
                name="message"
                className="min-h-[140px] rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 md:col-span-2"
                placeholder="Tell me about your project"
              />
              <button
                type="submit"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-white transition hover:opacity-90 md:col-span-2"
              >
                Send Inquiry
              </button>

              <p className="text-sm text-slate-500 md:col-span-2">
                Replace the Formspree action URL with your real Formspree form link
                so inquiries go straight to your email.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}