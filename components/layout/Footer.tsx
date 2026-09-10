import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">

          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Kongu Mandala Pothagarkal Peravai"
                className="h-14 w-14 object-contain"
              />

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#082b59]">
                  Kongu Mandala
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9b7629]">
                  Pothagarkal Peravai
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
              A fellowship of pastors and Christian leaders committed to
              unity, service, spiritual growth and strengthening the Church.
            </p>

            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
              Government Registration No. B.K.4-53/2026
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#082b59]">
              Explore
            </p>

            <div className="mt-5 space-y-3">
              <a href="#about" className="block text-sm text-slate-500 hover:text-[#082b59]">
                About
              </a>

              <a href="#leadership" className="block text-sm text-slate-500 hover:text-[#082b59]">
                Leadership
              </a>

              <a href="#ministries" className="block text-sm text-slate-500 hover:text-[#082b59]">
                Ministries
              </a>

              <a href="#events" className="block text-sm text-slate-500 hover:text-[#082b59]">
                Events
              </a>

              <a href="#gallery" className="block text-sm text-slate-500 hover:text-[#082b59]">
                Gallery
              </a>
            </div>
          </div>

          {/* Organization */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#082b59]">
              Organization
            </p>

            <div className="mt-5 space-y-3">
              <a href="#vision" className="block text-sm text-slate-500 hover:text-[#082b59]">
                Vision & Mission
              </a>

              <a href="#leadership" className="block text-sm text-slate-500 hover:text-[#082b59]">
                Leadership
              </a>

              <a href="#contact" className="block text-sm text-slate-500 hover:text-[#082b59]">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#082b59]">
              Contact
            </p>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-[#c9a34e]" />

                <p className="text-sm leading-6 text-slate-500">
                  Then Chittur, Somandhurai Chittur,
                  <br />
                  Coimbatore District,
                  <br />
                  Tamil Nadu - 642134
                </p>
              </div>

              <a
                href="tel:+919788815331"
                className="flex items-center gap-3 text-sm text-slate-500 hover:text-[#082b59]"
              >
                <Phone size={16} className="text-[#c9a34e]" />
                +91 97888 15331
              </a>

              <a
                href="https://wa.me/918072297482"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-500 hover:text-[#082b59]"
              >
                <MessageCircle size={16} className="text-[#c9a34e]" />
                +91 80722 97482
              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Kongu Mandala Pothagarkal Peravai.
            All rights reserved.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-1 hover:text-[#082b59]"
          >
            Back to top
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

    </footer>
  );
}