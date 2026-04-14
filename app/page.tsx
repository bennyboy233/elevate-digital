import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 shadow-sm">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 16L10.2 11.8L13 14.6L18 9.6"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 9.6H18V12.1"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>
        <div className="text-xl font-bold tracking-tight text-slate-950">
          Elevate Digital
        </div>
        <div className="text-sm text-slate-500">
          Modern websites for businesses across the United States
        </div>
      </div>
    </div>
  );
}

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
      title: "Fast Turnaround",
      desc: "A simple process that gets your business online quickly without dragging things out.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Logo />

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="transition hover:text-slate-600">
              Services
            </a>
            <a href="#work" className="transition hover:text-slate-600">
              Work
            </a>
            <a href="#pricing" className="transition hover:text-slate-600">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-slate-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Website Design Agency
              </p>

              <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
                Modern websites that make small businesses look legit.
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Elevate Digital builds modern websites for businesses that want
                a stronger online presence, more trust, and more leads.
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
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center transition hover:bg-slate-50"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">$199</div>
                  <div>Full website</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">Clean</div>
                  <div>Modern design</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">Fast</div>
                  <div>Simple process</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-4 -top-4 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg">
                Elevate Digital Demo
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-4">
                  <div className="h-3 w-3 rounded-full bg-red-300" />
                  <div className="h-3 w-3 rounded-full bg-yellow-300" />
                  <div className="h-3 w-3 rounded-full bg-green-300" />
                </div>

                <div className="grid gap-6 p-6">
                  <div className="rounded-3xl bg-slate-900 p-6 text-white">
                    <div className="text-sm uppercase tracking-[0.2em] text-slate-300">
                      Homepage Example
                    </div>
                    <div className="mt-3 text-2xl font-bold">
                      Professional layout built to convert
                    </div>
                    <div className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
                      Clear headline, bold call-to-action, modern visuals, and a layout
                      designed to make visitors trust the business fast.
                    </div>
                    <div className="mt-5 inline-block rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900">
                      Get Started
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 p-5">
                      <div className="text-sm text-slate-500">What clients need</div>
                      <div className="mt-2 text-lg font-semibold">
                        Modern design that feels trustworthy
                      </div>
                      <div className="mt-2 text-sm leading-7 text-slate-600">
                        Clean sections, strong hierarchy, and better first impressions.
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 p-5">
                      <div className="text-sm text-slate-500">What gets results</div>
                      <div className="mt-2 text-lg font-semibold">
                        Calls, forms, and clear next steps
                      </div>
                      <div className="mt-2 text-sm leading-7 text-slate-600">
                        Visitors should know exactly what to click and what to do next.
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-500">Sample offer</div>
                        <div className="text-lg font-semibold">
                          Website design starting at $199
                        </div>
                      </div>
                      <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        Great for small businesses
                      </div>
                    </div>
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
                Everything your business needs to launch a modern website.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                    Elevate
                  </div>
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
              Demo Project
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A live demo that shows the type of experience Elevate Digital can build.
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="bg-slate-900 p-8 text-white md:p-10">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-300">
                  Featured Demo
                </div>
                <h3 className="mt-3 text-3xl font-bold">Barbershop Demo</h3>
                <p className="mt-4 leading-8 text-slate-300">
                  A clean booking-focused website concept with barber selection,
                  services, appointment times, and an interactive booking flow.
                </p>

                <div className="mt-8">
                  <Link
                    href="/demo/barbershop"
                    className="inline-block rounded-2xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:opacity-90"
                  >
                    View Barbershop Demo
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center bg-slate-50 p-8 md:p-10">
                <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">Demo preview</div>
                      <div className="text-lg font-semibold">Booking experience</div>
                    </div>
                    <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      Interactive
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="font-semibold">Choose a barber</div>
                      <div className="text-sm text-slate-600">
                        Let visitors pick who they want to book with.
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="font-semibold">Pick a service</div>
                      <div className="text-sm text-slate-600">
                        Show haircut, fade, beard trim, and more.
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="font-semibold">Select a time</div>
                      <div className="text-sm text-slate-600">
                        A cleaner process that feels like a real business website.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Order Your Website
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                A modern website for $199.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Elevate Digital offers a clean website build for one simple flat price.
                Perfect for businesses that want something professional without
                overcomplicating the process.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
                <div className="text-sm text-slate-500">What is included</div>
                <div className="mt-3 text-4xl font-bold">$199</div>

                <ul className="mt-6 space-y-3 text-slate-600">
                  <li>• Full website design</li>
                  <li>• Mobile-friendly layout</li>
                  <li>• Contact form setup</li>
                  <li>• Clean modern sections</li>
                  <li>• Fast simple launch</li>
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
                    <span className="font-semibold text-slate-900">2.</span> You collect business details, images, and content.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">3.</span> You design and build the site.
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">4.</span> You launch it and make sure it looks clean.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
          <div className="overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-200">
            <div className="grid md:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 md:p-10">
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
                  action="https://formspree.io/f/REPLACE_WITH_YOUR_REAL_FORM_ID"
                  method="POST"
                  className="mt-8 grid gap-4 md:grid-cols-2"
                >
                  <input
                    name="name"
                    required
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="Your name"
                  />
                  <input
                    name="business"
                    required
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                    placeholder="Business name"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 md:col-span-2"
                    placeholder="Email address"
                  />
                  <textarea
                    name="message"
                    required
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
                    Replace the Formspree action URL with your real Formspree form link.
                  </p>
                </form>
              </div>

              <div className="bg-slate-900 p-8 text-white md:p-10">
                <div className="inline-flex rounded-2xl bg-white/10 px-3 py-2 text-sm font-medium text-slate-200">
                  Why Elevate Digital
                </div>

                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="font-semibold">Affordable offer</div>
                    <div className="mt-1 text-sm leading-7 text-slate-300">
                      A simple entry price that helps you close smaller businesses faster.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="font-semibold">Modern design</div>
                    <div className="mt-1 text-sm leading-7 text-slate-300">
                      Clean sections, sharper visuals, and a better first impression.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="font-semibold">Simple process</div>
                    <div className="mt-1 text-sm leading-7 text-slate-300">
                      Easy for business owners to understand and easy for you to sell.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}