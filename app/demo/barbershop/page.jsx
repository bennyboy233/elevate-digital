"use client";

import { useMemo, useState } from "react";

const barbers = [
  {
    id: "marcus",
    name: "Marcus Reed",
    specialty: "Skin fades & sharp lineups",
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "andre",
    name: "Andre Cole",
    specialty: "Classic cuts & beard trims",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "jordan",
    name: "Jordan Hayes",
    specialty: "Modern styles & transformations",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
];

const services = [
  { id: "cut", name: "Standard Cut", price: "$30", duration: "30 min" },
  { id: "fade", name: "Skin Fade", price: "$40", duration: "45 min" },
  { id: "beard", name: "Cut + Beard", price: "$50", duration: "60 min" },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
];

export default function BarbershopDemoPage() {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [selectedBarber, setSelectedBarber] = useState(barbers[0].id);
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [booked, setBooked] = useState(false);

  const service = useMemo(
    () => services.find((item) => item.id === selectedService),
    [selectedService]
  );

  const barber = useMemo(
    () => barbers.find((item) => item.id === selectedBarber),
    [selectedBarber]
  );

  function handleSubmit(e) {
    e.preventDefault();
    setBooked(true);
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
            Demo Concept
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Northline Barbershop
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            A modern booking-focused barbershop site with real interaction:
            choose a service, pick a barber, lock in a time, and submit a booking request.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-black transition hover:opacity-90"
            >
              Book Appointment
            </a>
            <a
              href="/"
              className="rounded-2xl border border-white/20 px-6 py-3 transition hover:bg-white/5"
            >
              Back to Elevate Digital
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {barbers.map((barberCard) => (
            <div
              key={barberCard.id}
              className={`overflow-hidden rounded-3xl border ${
                selectedBarber === barberCard.id
                  ? "border-amber-400"
                  : "border-white/10"
              } bg-white/5`}
            >
              <img
                src={barberCard.image}
                alt={barberCard.name}
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{barberCard.name}</h2>
                <p className="mt-2 text-white/70">{barberCard.specialty}</p>
                <button
                  onClick={() => setSelectedBarber(barberCard.id)}
                  className="mt-5 rounded-2xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
                >
                  Choose Barber
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Choose your service</h3>

            <div className="mt-6 space-y-4">
              {services.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedService(item.id)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    selectedService === item.id
                      ? "border-amber-400 bg-amber-400/10"
                      : "border-white/10 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-amber-400">{item.price}</span>
                  </div>
                  <div className="mt-1 text-sm text-white/60">{item.duration}</div>
                </button>
              ))}
            </div>

            <h3 className="mt-10 text-2xl font-semibold">Choose a time</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`rounded-2xl border px-4 py-3 text-sm transition ${
                    selectedTime === slot
                      ? "border-amber-400 bg-amber-400/10"
                      : "border-white/10 hover:bg-white/5"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white p-8 text-slate-900">
            {!booked ? (
              <>
                <h3 className="text-2xl font-semibold">Complete your booking</h3>
                <p className="mt-2 text-slate-600">
                  This is a demo booking experience you can show clients.
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                  <div className="text-sm text-slate-500">Selected service</div>
                  <div className="font-semibold">{service?.name}</div>

                  <div className="mt-4 text-sm text-slate-500">Selected barber</div>
                  <div className="font-semibold">{barber?.name}</div>

                  <div className="mt-4 text-sm text-slate-500">Selected time</div>
                  <div className="font-semibold">{selectedTime}</div>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="Phone number"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-slate-900 px-6 py-3 text-white transition hover:opacity-90"
                  >
                    Confirm Booking
                  </button>
                </form>
              </>
            ) : (
              <div className="rounded-3xl bg-green-50 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Booking confirmed
                </div>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  You’re booked, {name}.
                </h3>
                <p className="mt-3 text-slate-700">
                  {service?.name} with {barber?.name} at {selectedTime}.
                </p>
                <button
                  onClick={() => setBooked(false)}
                  className="mt-6 rounded-2xl bg-slate-900 px-5 py-3 text-white transition hover:opacity-90"
                >
                  Book Another Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}