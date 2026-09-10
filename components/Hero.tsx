"use client";

import {
  ArrowRight,
  UsersRound,
  Church,
  HeartHandshake,
  FileCheck2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FCF7F4] pt-[88px] sm:pt-[100px] lg:pt-[130px]"
    >
      {/* =========================================================
          DESKTOP HERO
      ========================================================= */}

      <div className="relative mx-auto h-auto max-w-[1600px] lg:h-[calc(100vh-94px)] lg:min-h-[526px] lg:max-h-[606px]">

        {/* =======================================================
            SOFT BACKGROUND ART
        ======================================================= */}

        <div className="pointer-events-none absolute -top-[155px] left-[42%] z-0 h-[300px] w-[300px] rounded-full bg-[#F0EAF2]" />

        <div className="pointer-events-none absolute -right-[110px] -top-[190px] z-0 h-[470px] w-[470px] rounded-full bg-[#EEDCE4]/70" />

        <div className="pointer-events-none absolute -bottom-[440px] -left-[190px] z-0 h-[670px] w-[670px] rounded-full border-[92px] border-[#F0DEE5]/75" />

        {/* =======================================================
            FADED CROSS
        ======================================================= */}

        <div className="pointer-events-none absolute left-[52.5%] top-[18px] z-[2] hidden opacity-[0.065] lg:block">
          <div className="relative h-[125px] w-[100px]">

            <div className="absolute left-1/2 top-0 h-[125px] w-[18px] -translate-x-1/2 rounded-full bg-[#A84668]" />

            <div className="absolute left-0 top-[43px] h-[18px] w-[100px] rounded-full bg-[#A84668]" />

          </div>
        </div>

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <div
          className="
            relative
            z-20
            px-5
            pb-8
            pt-5
            sm:px-10
            sm:pb-10
            sm:pt-7
            md:px-14
            lg:absolute
            lg:inset-y-0
            lg:left-0
            lg:flex
            lg:w-[61%]
            lg:items-center
            lg:px-16
            lg:py-0
            xl:px-[8%]
          "
        >
          <div className="w-full max-w-[715px]">

            {/* ===================================================
                EYEBROW
            =================================================== */}

            <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">

              <span className="h-[2px] w-[35px] bg-[#A84668] sm:w-[43px]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.27em] text-[#67566A] sm:text-[10px]">
                Kongu Mandala · Tamil Nadu
              </span>

            </div>

            {/* ===================================================
                MAIN HEADING
            =================================================== */}

            <h1
              className="
                max-w-[700px]
                font-serif
                text-[38px]
                font-semibold
                leading-[0.91]
                tracking-[-0.045em]
                text-[#32113F]
                sm:text-[50px]
                md:text-[57px]
                lg:text-[59px]
                xl:text-[67px]
              "
            >
              <span className="block">
                United in faith,
              </span>

              <span className="block text-[#B94F6F]">
                strengthened in
              </span>

              <span className="block">
                service.
              </span>
            </h1>

            {/* ===================================================
                DESCRIPTION
            =================================================== */}

            <p
              className="
                mt-3
                max-w-[600px]
                text-[11px]
                leading-[1.55]
                text-[#67566A]
                sm:mt-4
                sm:text-[13px]
                md:text-[14px]
              "
            >
              Kongu Mandala Pothagarkal Peravai is a fellowship of pastors and
              Christian leaders committed to unity, spiritual growth, service,
              and strengthening the Church across the Kongu region.
            </p>

            {/* ===================================================
                BUTTONS
            =================================================== */}

            <div className="mt-4 flex w-full flex-row gap-2.5 sm:mt-5 sm:w-auto">

              {/* Discover Button */}

              <a
                href="#about"
                className="
                  group
                  inline-flex
                  h-[42px]
                  min-w-0
                  flex-1
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  bg-[#AD4B6B]
                  px-3
                  text-[9px]
                  font-semibold
                  text-white
                  shadow-[0_8px_22px_rgba(173,75,107,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#32113F]
                  sm:h-[44px]
                  sm:flex-none
                  sm:px-6
                  sm:text-[11px]
                "
              >
                <span className="whitespace-nowrap">
                  Discover Our Peravai
                </span>

                <ArrowRight
                  size={13}
                  strokeWidth={1.8}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Events Button */}

              <a
                href="#events"
                className="
                  group
                  inline-flex
                  h-[42px]
                  min-w-0
                  flex-1
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#AD4B6B]
                  bg-[#FCF7F4]
                  px-3
                  text-[9px]
                  font-semibold
                  text-[#32113F]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#F5E8ED]
                  sm:h-[44px]
                  sm:flex-none
                  sm:px-6
                  sm:text-[11px]
                "
              >
                <span className="whitespace-nowrap">
                  View Events
                </span>

                <ArrowRight
                  size={13}
                  strokeWidth={1.8}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

            {/* ===================================================
                TRUST STRIP
            =================================================== */}

            <div className="mt-5 border-t border-[#E4D4DD] pt-3 sm:mt-6 sm:pt-4">

              {/* MOBILE - ALL 3 IN ONE LINE */}

              <div className="grid grid-cols-3 gap-0 lg:hidden">

                {/* Government */}

                <div className="flex min-w-0 items-center justify-center gap-1.5 border-r border-[#DCCBD5] px-1">

                  <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#F1E1E8] text-[#A84668]">

                    <UsersRound
                      size={14}
                      strokeWidth={1.5}
                    />

                  </div>

                  <div className="min-w-0">

                    <p className="text-[7px] font-semibold leading-[1.25] text-[#32113F]">
                      Government
                    </p>

                    <p className="text-[7px] font-semibold leading-[1.25] text-[#32113F]">
                      Registered
                    </p>

                  </div>

                </div>

                {/* Pastors */}

                <div className="flex min-w-0 items-center justify-center gap-1.5 border-r border-[#DCCBD5] px-1">

                  <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#F1E1E8] text-[#A84668]">

                    <Church
                      size={14}
                      strokeWidth={1.5}
                    />

                  </div>

                  <div className="min-w-0">

                    <p className="text-[7px] font-semibold leading-[1.25] text-[#32113F]">
                      Pastors &
                    </p>

                    <p className="text-[7px] font-semibold leading-[1.25] text-[#32113F]">
                      Leaders
                    </p>

                  </div>

                </div>

                {/* Unity */}

                <div className="flex min-w-0 items-center justify-center gap-1.5 px-1">

                  <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#F1E1E8] text-[#A84668]">

                    <HeartHandshake
                      size={14}
                      strokeWidth={1.5}
                    />

                  </div>

                  <div className="min-w-0">

                    <p className="text-[7px] font-semibold leading-[1.25] text-[#32113F]">
                      Unity · Growth
                    </p>

                    <p className="text-[7px] font-semibold leading-[1.25] text-[#32113F]">
                      Service
                    </p>

                  </div>

                </div>

              </div>

              {/* DESKTOP */}

              <div className="hidden lg:grid lg:grid-cols-3 lg:gap-0">

                {/* Government */}

                <div className="flex items-center gap-2 sm:border-r sm:border-[#DCCBD5] sm:pr-4">

                  <div className="flex h-[37px] w-[37px] shrink-0 items-center justify-center rounded-full bg-[#F1E1E8] text-[#A84668]">

                    <UsersRound
                      size={17}
                      strokeWidth={1.5}
                    />

                  </div>

                  <div>

                    <p className="text-[10px] font-semibold leading-4 text-[#32113F]">
                      Government
                    </p>

                    <p className="text-[10px] font-semibold leading-4 text-[#32113F]">
                      Registered
                    </p>

                  </div>

                </div>

                {/* Pastors */}

                <div className="flex items-center gap-2 border-r border-[#DCCBD5] px-4">

                  <div className="flex h-[37px] w-[37px] shrink-0 items-center justify-center rounded-full bg-[#F1E1E8] text-[#A84668]">

                    <Church
                      size={17}
                      strokeWidth={1.5}
                    />

                  </div>

                  <div>

                    <p className="text-[10px] font-semibold leading-4 text-[#32113F]">
                      Pastors &
                    </p>

                    <p className="text-[10px] font-semibold leading-4 text-[#32113F]">
                      Christian Leaders
                    </p>

                  </div>

                </div>

                {/* Unity */}

                <div className="flex items-center gap-2 pl-4">

                  <div className="flex h-[37px] w-[37px] shrink-0 items-center justify-center rounded-full bg-[#F1E1E8] text-[#A84668]">

                    <HeartHandshake
                      size={17}
                      strokeWidth={1.5}
                    />

                  </div>

                  <div>

                    <p className="text-[10px] font-semibold leading-4 text-[#32113F]">
                      Unity · Growth ·
                    </p>

                    <p className="text-[10px] font-semibold leading-4 text-[#32113F]">
                      Service
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================
            RIGHT HERO ARTWORK
        ======================================================= */}

        <div className="relative hidden lg:absolute lg:right-0 lg:top-0 lg:block lg:h-full lg:w-[45%]">

          {/* Outer filled curve */}

          <div className="absolute -right-[210px] -top-[165px] h-[950px] w-[570px] rounded-[50%] bg-[#E6C0CE]" />

          {/* Second pink layer */}

          <div className="absolute -right-[178px] -top-[137px] h-[895px] w-[535px] rounded-[50%] bg-[#D9A8BA]" />

          {/* Cream separator */}

          <div className="absolute -right-[150px] -top-[112px] h-[845px] w-[505px] rounded-[50%] bg-[#FCF7F4]" />

          {/* Inner pink rim */}

          <div className="absolute -right-[128px] -top-[92px] h-[805px] w-[480px] rounded-[50%] bg-[#E9C8D3]" />

          {/* Inner cream rim */}

          <div className="absolute -right-[112px] -top-[76px] h-[775px] w-[458px] rounded-[50%] bg-[#FCF7F4]" />

          {/* =====================================================
              IMAGE
          ===================================================== */}

          <div className="absolute right-[4%] top-0 z-20 h-[calc(100%-108px)] w-[74%] overflow-hidden rounded-bl-[47%] rounded-tl-[45%]">

            <img
              src="/images/hero.png"
              alt="Cross overlooking mountains at sunrise"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#FCEAF0]/10 via-transparent to-[#32113F]/20" />

            <div className="absolute inset-0 bg-[#A84668]/[0.035] mix-blend-multiply" />

          </div>

          {/* Image edge */}

          <div className="pointer-events-none absolute right-[6%] top-[7px] z-30 h-[calc(100%-123px)] w-[70%] rounded-bl-[47%] rounded-tl-[45%] border-l border-white/80" />

          {/* =====================================================
              TOGETHER
          ===================================================== */}

          <div className="absolute left-[-8%] top-[98px] z-50 w-[165px] text-center">

            <p className="font-serif text-[24px] italic leading-[1.02] text-[#32113F]">
              Together
            </p>

            <p className="mt-1 font-serif text-[21px] italic leading-[1.02] text-[#32113F]">
              for a Greater
            </p>

            <p className="mt-2 font-serif text-[25px] italic leading-[1.02] text-[#B94F6F]">
              Tomorrow
            </p>

            <svg
              className="mx-auto mt-1"
              width="118"
              height="25"
              viewBox="0 0 118 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="M3 16C29 6 68 7 115 2"
                stroke="#B94F6F"
                strokeWidth="1.7"
                strokeLinecap="round"
              />

              <path
                d="M45 22C65 16 84 14 104 11"
                stroke="#B94F6F"
                strokeWidth="1"
                strokeLinecap="round"
              />

            </svg>

            <div className="mx-auto mt-5 flex w-[90px] flex-col items-center gap-2.5">

              <span className="h-px w-8 bg-[#E0C2CD]" />

              <span className="text-[7px] font-semibold uppercase tracking-[0.27em] text-[#806F82]">
                Faith
              </span>

              <span className="text-[7px] font-semibold uppercase tracking-[0.27em] text-[#806F82]">
                Fellowship
              </span>

              <span className="text-[7px] font-semibold uppercase tracking-[0.27em] text-[#806F82]">
                Service
              </span>

              <span className="h-px w-8 bg-[#E0C2CD]" />

            </div>

          </div>

          {/* =====================================================
              BIBLE VERSE
          ===================================================== */}

          <div className="absolute right-[3%] top-[30px] z-50 w-[145px] text-center">

            <p className="font-serif text-[13px] italic leading-[1.35] text-[#32113F]">
              Let all things
              <br />
              be done for His glory
            </p>

            <div className="mx-auto my-2 h-px w-8 bg-[#C97891]" />

            <p className="text-[6px] font-semibold uppercase tracking-[0.17em] text-[#67566A]">
              1 Corinthians 10:31
            </p>

          </div>

          {/* =====================================================
              REGISTRATION CARD
          ===================================================== */}

          <div className="absolute bottom-[180px] left-[-1%] z-[70]">

            <div className="flex w-[238px] items-center gap-3 rounded-[17px] border border-white/90 bg-[#e3a0b8] px-3.5 py-3 shadow-[0_12px_30px_rgba(50,17,63,0.12)]">

              <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#620660] text-[#C48A3A]">

                <FileCheck2
                  size={21}
                  strokeWidth={1.5}
                />

              </div>

              <div>

                <p className="text-[6px] font-semibold uppercase tracking-[0.13em] text-[#67566A]">
                  Government Registration
                </p>

                <p className="mt-1 text-[15px] font-bold tracking-tight text-[#32113F]">
                  B.K.4-53/2026
                </p>

                <div className="mt-1 h-[2px] w-8 bg-[#A84668]" />

              </div>

            </div>

          </div>

          {/* =====================================================
              BOTTOM RIGHT COLORED CORNER
          ===================================================== */}

          <div className="pointer-events-none absolute bottom-0 right-0 z-[40] h-[155px] w-full overflow-hidden">

            <svg
              className="absolute bottom-[-3px] right-[-5px] h-[180px] w-full"
              viewBox="0 0 900 180"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              {/* Deep plum foundation */}

              <path
                d="M0 180C170 65 355 42 525 62C680 80 785 116 900 65V180H0Z"
                fill="#32113F"
              />

              {/* Pink layer */}

              <path
                d="M0 165C175 51 358 31 531 53C690 73 791 108 900 55"
                stroke="#E7C2D0"
                strokeWidth="26"
              />

              {/* Cream layer */}

              <path
                d="M0 151C173 43 360 22 534 45C689 65 794 99 900 48"
                stroke="#FCF7F4"
                strokeWidth="17"
              />

              {/* Rose layer */}

              <path
                d="M0 140C175 34 361 14 537 38C691 57 797 91 900 40"
                stroke="#DFAFC0"
                strokeWidth="8"
              />

              {/* Fine highlight */}

              <path
                d="M0 133C177 27 363 8 539 32C694 51 800 84 900 34"
                stroke="#F5DCE5"
                strokeWidth="2"
              />

            </svg>

          </div>

        </div>

        {/* =======================================================
            MOBILE HERO IMAGE
        ======================================================= */}

        <div
          className="
            relative
            mt-0
            h-[225px]
            overflow-hidden
            sm:h-[285px]
            lg:hidden
          "
        >

          <img
            src="/images/hero.png"
            alt="Cross overlooking mountains at sunrise"
            className="h-full w-full object-cover object-center"
          />

          {/* Bottom overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#32113F]/65 via-transparent to-transparent" />

          {/* Soft rose overlay */}

          <div className="absolute inset-0 bg-[#A84668]/[0.025] mix-blend-multiply" />

          {/* =====================================================
              MOBILE BIBLE VERSE
          ===================================================== */}

          <div className="absolute right-3 top-3 z-20 w-[118px] text-center sm:right-7 sm:top-6 sm:w-[135px]">

            <p className="font-serif text-[11px] italic leading-[1.25] text-white drop-shadow-sm sm:text-[15px] sm:leading-[1.3]">
              Let all things
              <br />
              be done for His glory
            </p>

            <div className="mx-auto my-1.5 h-px w-6 bg-[#E9C8D2] sm:my-2 sm:w-7" />

            <p className="text-[5px] font-semibold uppercase tracking-[0.14em] text-white/85 sm:text-[6px] sm:tracking-[0.16em]">
              1 Corinthians 10:31
            </p>

          </div>

          {/* =====================================================
              MOBILE REGISTRATION CARD
          ===================================================== */}

          <div className="absolute bottom-3 left-3 right-3 z-30 sm:bottom-5 sm:left-6 sm:right-6">

            <div className="mx-auto flex max-w-[320px] items-center gap-2.5 rounded-[13px] border border-white/80 bg-[#FCF7F4]/95 px-3 py-2.5 shadow-[0_10px_25px_rgba(50,17,63,0.18)] backdrop-blur-sm sm:max-w-[360px] sm:gap-3 sm:rounded-[16px] sm:px-3.5 sm:py-3">

              <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-[#F5E7DA] text-[#C48A3A] sm:h-[42px] sm:w-[42px]">

                <FileCheck2
                  size={17}
                  strokeWidth={1.5}
                />

              </div>

              <div className="min-w-0">

                <p className="text-[6px] font-semibold uppercase tracking-[0.1em] text-[#67566A] sm:text-[7px] sm:tracking-[0.12em]">
                  Government Registration
                </p>

                <p className="mt-0.5 text-[13px] font-bold tracking-tight text-[#32113F] sm:mt-1 sm:text-[17px]">
                  B.K.4-53/2026
                </p>

                <div className="mt-0.5 h-[2px] w-7 bg-[#A84668] sm:mt-1 sm:w-8" />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}