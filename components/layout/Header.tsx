"use client";

import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";

const aboutLinks = [
  { label: "About Peravai", href: "#about" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "History", href: "#history" },
];

const navigation = [
  { label: "Leadership", href: "#leadership" },
  { label: "Ministries", href: "#ministries" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#E9DDE7] bg-white/95 backdrop-blur-xl">

      {/* =========================
          COMPACT TOP BAR
      ========================= */}
      <div className="hidden border-b border-[#E9DDE7] bg-[#F3EDF5] lg:block">
        <div className="mx-auto flex h-7 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Organization */}
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A84668]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.20em] text-[#32113F]">
              Government Registered Organization
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-5">

            <a
              href="tel:+919788815331"
              className="group flex items-center gap-1.5 text-[10px] font-medium text-[#32113F] transition hover:text-[#A84668]"
            >
              <Phone
                size={11}
                strokeWidth={1.8}
                className="text-[#A84668] transition group-hover:text-[#C48A3A]"
              />
              <span>+91 97888 15331</span>
            </a>

            <a
              href="https://wa.me/918072297482"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-[10px] font-medium text-[#32113F] transition hover:text-[#A84668]"
            >
              <MessageCircle
                size={11}
                strokeWidth={1.8}
                className="text-[#A84668] transition group-hover:text-[#C48A3A]"
              />
              <span>WhatsApp</span>
            </a>

            <span className="h-3.5 w-px bg-[#D9CBD8]" />

            <span className="text-[9px] font-medium text-[#806F82]">
              Reg. No. B.K.4-53/2026
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          MAIN NAVIGATION
      ========================= */}
      <div className="bg-[#FCF9F6]">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* =====================
              LOGO
          ===================== */}
          <a
            href="/"
            className="group flex items-center gap-2.5"
          >
            {/* Logo */}
            <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Kongu Mandala Pothagarkal Peravai"
                className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
              />
            </div>

            {/* Brand */}
            <div className="hidden sm:block">
              <p className="font-serif text-[16px] font-semibold uppercase leading-none tracking-[0.045em] text-[#32113F]">
                Kongu Mandala
              </p>

              <p className="mt-1 font-serif text-[11px] font-semibold uppercase leading-none tracking-[0.11em] text-[#C48A3A]">
                Pothagarkal Peravai
              </p>

              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="h-px w-4 bg-[#C48A3A]" />

                <span className="text-[6px] font-medium uppercase tracking-[0.18em] text-[#806F82]">
                  Kongu Region Pastors Association
                </span>
              </div>
            </div>
          </a>

          {/* =====================
              DESKTOP NAVIGATION
          ===================== */}
          <nav className="hidden items-center gap-0.5 lg:flex">

            {/* About */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="group flex items-center gap-1 rounded-full px-3 py-2 text-[12px] font-medium text-[#32113F] transition duration-300 hover:bg-[#F3EDF5] hover:text-[#A84668]"
              >
                <span>About</span>

                <ChevronDown
                  size={12}
                  strokeWidth={1.8}
                  className={`transition-transform duration-300 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {aboutOpen && (
                <div className="absolute left-1/2 top-full mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-xl border border-[#E9DDE7] bg-[#FCF9F6] p-1.5 shadow-[0_15px_40px_rgba(50,17,63,0.12)]">

                  <div className="absolute left-1/2 top-0 h-[2px] w-8 -translate-x-1/2 bg-[#C48A3A]" />

                  {aboutLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setAboutOpen(false)}
                      className="group flex items-center justify-between rounded-lg px-3.5 py-2.5 text-[12px] font-medium text-[#67566A] transition duration-200 hover:bg-[#F3EDF5] hover:text-[#A84668]"
                    >
                      <span>{item.label}</span>

                      <span className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation */}
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-[12px] font-medium text-[#32113F] transition duration-300 hover:bg-[#F3EDF5] hover:text-[#A84668]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* =====================
              CONTACT
          ===================== */}
          <div className="hidden items-center lg:flex">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-[#A84668] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_6px_18px_rgba(168,70,104,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#32113F]"
            >
              <span>Contact Us</span>

              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* =====================
              MOBILE BUTTON
          ===================== */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4D8E2] bg-[#F3EDF5] text-[#32113F] transition hover:bg-[#E8DDE8] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={17} strokeWidth={1.8} />
            ) : (
              <Menu size={17} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================= */}
      {mobileOpen && (
        <div className="border-t border-[#E9DDE7] bg-[#FCF9F6] px-6 py-4 shadow-[0_15px_35px_rgba(50,17,63,0.10)] lg:hidden">
          <nav className="flex flex-col">

            {/* About */}
            <button
              type="button"
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between border-b border-[#E9DDE7] py-3.5 text-left text-sm font-semibold text-[#32113F]"
            >
              <span>About</span>

              <ChevronDown
                size={15}
                strokeWidth={1.8}
                className={`transition-transform duration-300 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* About Links */}
            {aboutOpen && (
              <div className="border-b border-[#E9DDE7] bg-[#F3EDF5] px-3 py-1.5">
                {aboutLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setAboutOpen(false);
                    }}
                    className="block rounded-lg px-3 py-2.5 text-sm text-[#67566A] transition hover:text-[#A84668]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}

            {/* Navigation */}
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-[#E9DDE7] py-3.5 text-sm font-semibold text-[#32113F] transition hover:text-[#A84668]"
              >
                {item.label}
              </a>
            ))}

            {/* Contact */}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#A84668] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_7px_18px_rgba(168,70,104,0.18)] transition hover:bg-[#32113F]"
            >
              Contact Us
              <span>→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}