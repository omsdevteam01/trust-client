"use client";

import {
  ArrowRight,
  BookOpen,
  Church,
  FileCheck2,
  HeartHandshake,
  UsersRound,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FCF7F4] py-8 sm:py-10 lg:h-[790px] lg:py-0"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute -left-[145px] -top-[190px] h-[380px] w-[380px] rounded-full bg-[#F1E6ED]/70" />

      <div className="pointer-events-none absolute -left-[35px] -top-[5px] h-[290px] w-[290px] rounded-full border-[25px] border-[#F5E9EF]/70" />

      {/* ABOUT background text */}
      <div className="pointer-events-none absolute right-[-18px] top-[10px] hidden select-none opacity-[0.035] lg:block">
        <span
          className="block font-serif text-[155px] font-semibold tracking-[-0.08em] text-[#6D315D]"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          ABOUT
        </span>
      </div>

      {/* Right decorative leaf */}
      <div className="pointer-events-none absolute -right-[18px] top-[265px] hidden opacity-[0.14] lg:block">
        <svg
          width="105"
          height="235"
          viewBox="0 0 105 235"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M82 228C69 183 62 132 70 81C74 48 88 20 101 5"
            stroke="#B94F6F"
            strokeWidth="1.1"
          />

          <path
            d="M70 88C54 76 43 62 40 47C54 50 67 63 70 88Z"
            stroke="#B94F6F"
            strokeWidth="1"
          />

          <path
            d="M67 116C51 109 39 96 33 82C48 84 61 96 67 116Z"
            stroke="#B94F6F"
            strokeWidth="1"
          />

          <path
            d="M67 145C51 140 38 130 28 117C44 117 59 128 67 145Z"
            stroke="#B94F6F"
            strokeWidth="1"
          />

          <path
            d="M71 174C56 170 44 161 35 149C50 149 64 159 71 174Z"
            stroke="#B94F6F"
            strokeWidth="1"
          />

          <path
            d="M77 202C63 199 52 191 43 180C57 179 70 189 77 202Z"
            stroke="#B94F6F"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto h-full max-w-[1500px] px-3 sm:px-6 lg:px-10 xl:px-[4.5%]">
        <div className="grid h-full items-center gap-5 lg:grid-cols-[40%_60%] lg:gap-0">

          {/* =====================================================
              LEFT VISUAL
          ===================================================== */}

          <div
            className="
              relative
              mx-auto
              h-[360px]
              w-full
              max-w-[390px]
              sm:h-[480px]
              sm:max-w-[500px]
              lg:h-[700px]
              lg:max-w-none
            "
          >

            {/* ===================================================
                MAIN CROSS IMAGE
            =================================================== */}

            <div
              className="
                absolute
                left-[3%]
                top-[5px]
                z-10
                h-[270px]
                w-[82%]
                overflow-hidden
                rounded-[15px]
                border-[3px]
                border-white
                shadow-[0_12px_28px_rgba(50,17,63,0.11)]
                sm:h-[380px]
                sm:w-[86%]
                sm:rounded-[19px]
                sm:border-[4px]
                lg:left-[2%]
                lg:top-[8px]
                lg:h-[500px]
                lg:w-[88%]
              "
            >
              <img
                src="/images/hero.png"
                alt="Cross overlooking the mountains at sunrise"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-[#32113F]/5 via-transparent to-[#B94F6F]/10" />

              {/* Image text */}
              <div
                className="
                  absolute
                  right-[6%]
                  top-[10%]
                  text-center
                  sm:right-[8%]
                  sm:top-[13%]
                "
              >
                <p
                  className="
                    font-serif
                    text-[12px]
                    italic
                    leading-[1.1]
                    text-[#32113F]
                    sm:text-[19px]
                    lg:text-[23px]
                  "
                >
                  His Grace
                  <br />
                  Guides
                  <br />
                  Our Journey
                </p>

                <div className="mx-auto mt-2 h-[2px] w-[26px] bg-[#C48A3A] sm:mt-4 sm:w-[42px]" />
              </div>
            </div>

            {/* ===================================================
                BIBLE IMAGE
            =================================================== */}

            <div
              className="
                absolute
                bottom-[0]
                right-[0]
                z-30
                h-[145px]
                w-[46%]
                overflow-hidden
                rounded-[13px]
                border-[3px]
                border-white
                shadow-[0_12px_28px_rgba(50,17,63,0.12)]
                sm:h-[235px]
                sm:w-[51%]
                sm:rounded-[18px]
                sm:border-[4px]
                lg:bottom-[0]
                lg:right-[1%]
                lg:h-[315px]
                lg:w-[51%]
              "
            >
              <img
                src="/images/bible.png"
                alt="Holy Bible"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[#B94F6F]/[0.035] mix-blend-multiply" />
            </div>

            {/* ===================================================
                MOBILE / TABLET STATISTICS
            =================================================== */}

            <div
              className="
                absolute
                bottom-[38px]
                left-[0]
                z-50
                w-[69%]
                rounded-[13px]
                border
                border-white/80
                bg-gradient-to-br
                from-[#9B496D]
                to-[#71365D]
                px-2
                py-2
                shadow-[0_12px_28px_rgba(50,17,63,0.15)]
                sm:bottom-[62px]
                sm:w-[260px]
                sm:px-5
                sm:py-4
                lg:bottom-[78px]
                lg:left-[-1%]
                lg:w-[255px]
                lg:rounded-[18px]
                lg:px-5
                lg:py-4
              "
            >

              {/* Mobile statistics */}
              <div className="grid grid-cols-3 gap-0.5 lg:hidden">

                {/* 500+ */}
                <div className="flex min-w-0 flex-col items-center justify-center text-center">

                  <div className="mb-0.5 flex h-[27px] w-[27px] items-center justify-center rounded-full bg-white text-[#A84668]">
                    <UsersRound
                      size={14}
                      strokeWidth={1.4}
                    />
                  </div>

                  <p className="font-serif text-[15px] leading-none text-white">
                    500+
                  </p>

                  <p className="mt-0.5 text-[6px] leading-[1.1] text-white/90">
                    Pastors &
                    <br />
                    Leaders
                  </p>

                </div>

                {/* 100+ */}
                <div className="flex min-w-0 flex-col items-center justify-center border-x border-white/20 text-center">

                  <div className="mb-0.5 flex h-[27px] w-[27px] items-center justify-center rounded-full bg-white text-[#A84668]">
                    <Church
                      size={14}
                      strokeWidth={1.4}
                    />
                  </div>

                  <p className="font-serif text-[15px] leading-none text-white">
                    100+
                  </p>

                  <p className="mt-0.5 text-[6px] leading-[1.1] text-white/90">
                    Churches
                    <br />
                    Connected
                  </p>

                </div>

                {/* 25+ */}
                <div className="flex min-w-0 flex-col items-center justify-center text-center">

                  <div className="mb-0.5 flex h-[27px] w-[27px] items-center justify-center rounded-full bg-white text-[#A84668]">
                    <HeartHandshake
                      size={14}
                      strokeWidth={1.4}
                    />
                  </div>

                  <p className="font-serif text-[15px] leading-none text-white">
                    25+
                  </p>

                  <p className="mt-0.5 text-[6px] leading-[1.1] text-white/90">
                    Ministry
                    <br />
                    Initiatives
                  </p>

                </div>

              </div>

              {/* Desktop statistics */}
              <div className="hidden lg:block">

                <div className="flex items-center gap-3 pb-3">

                  <div className="flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full bg-white text-[#A84668]">
                    <UsersRound
                      size={22}
                      strokeWidth={1.4}
                    />
                  </div>

                  <div>
                    <p className="font-serif text-[25px] leading-none text-white">
                      500+
                    </p>

                    <p className="mt-1 text-[10px] text-white/90">
                      Pastors & Leaders
                    </p>
                  </div>

                </div>

                <div className="h-px bg-white/25" />

                <div className="flex items-center gap-3 py-3">

                  <div className="flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full bg-white text-[#A84668]">
                    <Church
                      size={22}
                      strokeWidth={1.4}
                    />
                  </div>

                  <div>
                    <p className="font-serif text-[25px] leading-none text-white">
                      100+
                    </p>

                    <p className="mt-1 text-[10px] text-white/90">
                      Churches Connected
                    </p>
                  </div>

                </div>

                <div className="h-px bg-white/25" />

                <div className="flex items-center gap-3 pt-3">

                  <div className="flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full bg-white text-[#A84668]">
                    <HeartHandshake
                      size={22}
                      strokeWidth={1.4}
                    />
                  </div>

                  <div>
                    <p className="font-serif text-[25px] leading-none text-white">
                      25+
                    </p>

                    <p className="mt-1 text-[10px] text-white/90">
                      Ministry Initiatives
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}

          <div className="relative lg:pl-[5%] xl:pl-[4%]">

            {/* Label */}
            <div className="mb-2.5 flex items-center gap-3 sm:mb-4 sm:gap-4">

              <span className="h-[2px] w-[27px] bg-[#C48A3A] sm:w-[38px]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#8D6380] sm:text-[10px]">
                About The Peravai
              </span>

            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[800px]
                font-serif
                text-[29px]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#32113F]
                sm:text-[42px]
                md:text-[50px]
                lg:text-[52px]
                xl:text-[58px]
              "
            >
              <span className="block">
                A Stronger Church
              </span>

              <span className="block text-[#B94F6F]">
                for a Brighter Tomorrow
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-2.5
                max-w-[720px]
                text-[11px]
                leading-[1.45]
                text-[#4E4A52]
                sm:mt-4
                sm:text-[13px]
                lg:text-[14px]
              "
            >
              Kongu Mandala Pothagarkal Peravai brings pastors and Christian
              leaders together in faith, fellowship, spiritual growth, and
              service, strengthening the Church and communities across the
              Kongu region.
            </p>

            {/* ===================================================
                THREE PILLARS
            =================================================== */}

            <div
              className="
                mt-4
                grid
                grid-cols-1
                gap-2
                sm:mt-6
                sm:gap-4
                md:grid-cols-3
                md:gap-0
              "
            >

              {/* UNITY */}
              <div
                className="
                  rounded-[10px]
                  bg-white/55
                  p-2.5
                  md:rounded-none
                  md:bg-transparent
                  md:pr-5
                "
              >
                <div className="flex items-center gap-2.5">

                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#F2E5EC] text-[#A84668] sm:h-[50px] sm:w-[50px]">
                    <UsersRound
                      size={18}
                      strokeWidth={1.4}
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-[15px] font-semibold text-[#32113F] sm:text-[19px]">
                      Unity
                    </h3>

                    <div className="mt-1 h-[2px] w-[22px] bg-[#C48A3A]" />
                  </div>

                </div>

                <p className="mt-1.5 text-[10px] leading-[1.3] text-[#4E4A52] sm:mt-2 sm:text-[12px]">
                  Bringing pastors and Christian leaders together in
                  fellowship and prayer.
                </p>
              </div>

              {/* SPIRITUAL GROWTH */}
              <div
                className="
                  rounded-[10px]
                  bg-white/55
                  p-2.5
                  md:rounded-none
                  md:border-x
                  md:border-[#DCCBD5]
                  md:bg-transparent
                  md:px-5
                "
              >
                <div className="flex items-center gap-2.5">

                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#F2E5EC] text-[#A84668] sm:h-[50px] sm:w-[50px]">
                    <BookOpen
                      size={18}
                      strokeWidth={1.4}
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-[15px] font-semibold leading-tight text-[#32113F] sm:text-[18px]">
                      Spiritual Growth
                    </h3>

                    <div className="mt-1 h-[2px] w-[22px] bg-[#C48A3A]" />
                  </div>

                </div>

                <p className="mt-1.5 text-[10px] leading-[1.3] text-[#4E4A52] sm:mt-2 sm:text-[12px]">
                  Encouraging biblical understanding, leadership, and spiritual
                  maturity.
                </p>
              </div>

              {/* SERVICE */}
              <div
                className="
                  rounded-[10px]
                  bg-white/55
                  p-2.5
                  md:rounded-none
                  md:bg-transparent
                  md:pl-5
                "
              >
                <div className="flex items-center gap-2.5">

                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#F2E5EC] text-[#A84668] sm:h-[50px] sm:w-[50px]">
                    <HeartHandshake
                      size={18}
                      strokeWidth={1.4}
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-[15px] font-semibold text-[#32113F] sm:text-[19px]">
                      Service
                    </h3>

                    <div className="mt-1 h-[2px] w-[22px] bg-[#C48A3A]" />
                  </div>

                </div>

                <p className="mt-1.5 text-[10px] leading-[1.3] text-[#4E4A52] sm:mt-2 sm:text-[12px]">
                  Strengthening the Church and serving communities with
                  compassion.
                </p>
              </div>

            </div>

            {/* ===================================================
                QUOTE
            =================================================== */}

            <div
              className="
                relative
                mt-3
                overflow-hidden
                rounded-[10px]
                border
                border-[#F1E2E9]
                bg-[#F8EDF2]
                px-3
                py-2.5
                sm:mt-5
                sm:px-5
                sm:py-4
              "
            >
              <div className="absolute left-2.5 top-[-3px] font-serif text-[37px] leading-none text-[#B94F6F]/65 sm:left-3 sm:text-[50px]">
                “
              </div>

              <div className="relative pl-5 sm:pl-7">

                <p className="font-serif text-[12px] italic leading-[1.2] text-[#32113F] sm:text-[17px]">
                  “Together in faith, united in purpose, committed to service.”
                </p>

                <div className="mt-1.5 flex items-center gap-2 sm:mt-2">

                  <span className="h-px w-[13px] bg-[#B94F6F]" />

                  <span className="text-[5px] font-semibold uppercase tracking-[0.14em] text-[#A46A88] sm:text-[7px]">
                    Kongu Mandala Pothagarkal Peravai
                  </span>

                </div>

              </div>
            </div>

            {/* ===================================================
                REGISTRATION + CENTERED CTA
            =================================================== */}

            <div
              className="
                mt-3
                flex
                flex-col
                items-center
                gap-2.5
                sm:mt-5
                sm:flex-row
                sm:items-center
              "
            >

              {/* Registration */}
              <div
                className="
                  flex
                  w-full
                  items-center
                  gap-2.5
                  rounded-[10px]
                  border
                  border-[#F0E1E8]
                  bg-[#F9EFF3]
                  px-2.5
                  py-2
                  sm:w-auto
                  sm:gap-3
                  sm:px-4
                  sm:py-3
                "
              >

                <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#F5E6D8] text-[#C48A3A] sm:h-[40px] sm:w-[40px]">

                  <FileCheck2
                    size={16}
                    strokeWidth={1.5}
                  />

                </div>

                <div>

                  <p className="text-[5px] font-semibold uppercase tracking-[0.1em] text-[#725D70] sm:text-[7px]">
                    Government Registered
                  </p>

                  <p className="mt-0.5 text-[13px] font-bold tracking-tight text-[#32113F] sm:text-[17px]">
                    B.K.4-53/2026
                  </p>

                </div>

              </div>

              {/* =================================================
                  CENTERED MOBILE CTA
              ================================================= */}

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  h-[38px]
                  w-fit
                  min-w-[175px]
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  bg-[#AD4B6B]
                  px-5
                  text-[8px]
                  font-semibold
                  text-white
                  shadow-[0_7px_17px_rgba(173,75,107,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#32113F]
                  sm:h-[49px]
                  sm:min-w-0
                  sm:px-7
                  sm:text-[11px]
                "
              >
                Learn More About Us

                <ArrowRight
                  size={12}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1 sm:h-[15px] sm:w-[15px]"
                />
              </a>

            </div>

            {/* ===================================================
                BOTTOM KEYWORDS
            =================================================== */}

            <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-4">

              <span className="h-px flex-1 bg-[#DCCBD5]" />

              <div className="flex items-center gap-1.5 whitespace-nowrap text-[5px] font-medium uppercase tracking-[0.11em] text-[#A06D89] sm:gap-3 sm:text-[8px] sm:tracking-[0.18em]">

                <span>Faith</span>
                <span>·</span>
                <span>Fellowship</span>
                <span>·</span>
                <span>Leadership</span>
                <span>·</span>
                <span>Service</span>

              </div>

              <span className="h-px flex-1 bg-[#DCCBD5]" />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}