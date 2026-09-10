import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f5f2eb] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Information */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a34e]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9b7629]">
                Contact Us
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-[#082b59] sm:text-5xl">
              We'd be glad to hear from you.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-slate-500">
              For enquiries, fellowship information, events and other
              organizational matters, please get in touch with the Peravai.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
                  <MapPin size={20} className="text-[#9b7629]" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#082b59]">
                    Address
                  </p>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    4/22, Bethel Garden, Main Road,
                    <br />
                    Then Chittur, Somandhurai Chittur Post,
                    <br />
                    Anaimalai Taluk, Coimbatore District -
                    642134, Tamil Nadu, South India.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Phone size={20} className="text-[#9b7629]" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#082b59]">
                    Phone
                  </p>

                  <a
                    href="tel:+919788815331"
                    className="mt-2 block text-sm text-slate-500 transition hover:text-[#082b59]"
                  >
                    +91 97888 15331
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
                  <MessageCircle size={20} className="text-[#9b7629]" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#082b59]">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/918072297482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm text-slate-500 transition hover:text-[#082b59]"
                  >
                    +91 80722 97482
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact card */}
          <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-10">
            <div className="mb-8">
              <p className="text-xl font-semibold text-[#082b59]">
                Send us a message
              </p>

              <p className="mt-2 text-sm text-slate-400">
                We will get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-600">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-[#c9a34e]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-600">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full rounded-xl border border-slate-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-[#c9a34e]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-slate-600">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-[#c9a34e]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-slate-600">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-300 focus:border-[#c9a34e]"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#082b59] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#123d72]"
              >
                Send Message

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}