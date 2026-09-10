"use client";

import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="
        relative
        overflow-hidden
        bg-[#FCF7F4]
        py-9
        sm:py-11
        lg:h-[calc(100vh-70px)]
        lg:min-h-[620px]
        lg:max-h-[760px]
        lg:py-10
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[90px]
          -top-[110px]
          h-[240px]
          w-[240px]
          rounded-full
          bg-[#F3E8EE]
          opacity-75
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[130px]
          -top-[80px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#F7E8ED]
          opacity-65
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[280px]
          left-[5%]
          h-[420px]
          w-[90%]
          rounded-[50%]
          bg-[#F3E5EB]
          opacity-70
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:flex
          lg:h-full
          lg:flex-col
          lg:px-10
        "
      >

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="mx-auto max-w-[850px] text-center">

          <div className="mb-2.5 flex items-center justify-center gap-3 sm:mb-3 sm:gap-5">

            <span className="h-[2px] w-[30px] bg-[#C48A3A] sm:w-[42px]" />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#8B5B78]
                sm:text-[10px]
                sm:tracking-[0.3em]
              "
            >
              Our Vision & Mission
            </span>

            <span className="h-[2px] w-[30px] bg-[#C48A3A] sm:w-[42px]" />

          </div>

          <h2
            className="
              font-serif
              text-[36px]
              font-semibold
              leading-[0.95]
              tracking-[-0.045em]
              text-[#32113F]
              sm:text-[45px]
              md:text-[52px]
              lg:text-[58px]
            "
          >
            Guided by{" "}
            <span className="text-[#B94F6F]">
              His Purpose
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-2.5
              max-w-[650px]
              text-[10px]
              leading-[1.45]
              text-[#5F5661]
              sm:mt-3
              sm:text-[12px]
              lg:text-[14px]
            "
          >
            With a clear vision and a steadfast mission, we strive to build
            a stronger Church and a brighter tomorrow for the Kongu region.
          </p>

        </div>

        {/* =======================================================
            VISION + MISSION
        ======================================================= */}

        <div
          className="
            relative
            mx-auto
            mt-6
            w-full
            max-w-[1280px]
            sm:mt-7
            lg:flex
            lg:flex-1
            lg:items-center
            lg:mt-5
          "
        >

          {/* =====================================================
              DESKTOP CENTER LINE
          ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[8%]
              hidden
              h-[84%]
              w-px
              -translate-x-1/2
              bg-[#D3A2B2]
              lg:block
            "
          />

          {/* =====================================================
              CENTER CROSS
          ===================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-20
              hidden
              h-[76px]
              w-[76px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-[#FCF7F4]
              lg:flex
            "
          >

            <div
              className="
                absolute
                inset-[9px]
                rounded-full
                border
                border-dashed
                border-[#D7A2B5]
              "
            />

            <div className="relative h-[43px] w-[32px]">

              <span
                className="
                  absolute
                  left-1/2
                  top-0
                  h-[43px]
                  w-[6px]
                  -translate-x-1/2
                  bg-[#C05A7B]
                "
              />

              <span
                className="
                  absolute
                  left-0
                  top-[14px]
                  h-[6px]
                  w-[32px]
                  bg-[#C05A7B]
                "
              />

            </div>

          </div>

          {/* =====================================================
              CARDS
          ===================================================== */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              lg:grid-cols-2
              lg:gap-20
            "
          >

            {/* ===================================================
                VISION
            =================================================== */}

            <article
              className="
                rounded-[20px]
                border
                border-[#E8D6DE]
                bg-[#FAF1F5]/90
                px-4
                py-4
                shadow-[0_8px_25px_rgba(50,17,63,0.035)]
                sm:rounded-[23px]
                sm:px-6
                sm:py-5
                lg:min-h-[275px]
                lg:px-7
                lg:py-6
              "
            >

              <div className="flex items-start gap-3 sm:gap-4">

                {/* Icon */}

                <div
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F1E1E8]
                    text-[#4A164F]
                    sm:h-[62px]
                    sm:w-[62px]
                  "
                >
                  <Eye
                    size={28}
                    strokeWidth={1.4}
                    className="sm:h-[34px] sm:w-[34px]"
                  />
                </div>

                {/* Heading */}

                <div className="min-w-0">

                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.23em]
                      text-[#B06B1B]
                      sm:text-[10px]
                    "
                  >
                    Our Vision
                  </p>

                  <h3
                    className="
                      mt-1
                      font-serif
                      text-[21px]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.025em]
                      text-[#32113F]
                      sm:text-[27px]
                    "
                  >
                    A United Church
                    <br />
                    <span className="text-[#B94F6F]">
                      for a Brighter Tomorrow
                    </span>
                  </h3>

                  <div className="mt-2.5 h-[2px] w-[32px] bg-[#C48A3A]" />

                </div>

              </div>

              <p
                className="
                  mt-4
                  text-[10px]
                  leading-[1.5]
                  text-[#4F4752]
                  sm:mt-5
                  sm:text-[12px]
                  lg:text-[13px]
                  lg:leading-[1.55]
                "
              >
                To see a united, spiritually strong, and vibrant Church in the
                Kongu region, where pastors and Christian leaders work together
                in love, truth, and service, bringing lasting impact to churches
                and communities for generations to come.
              </p>

            </article>

            {/* ===================================================
                MISSION
            =================================================== */}

            <article
              className="
                rounded-[20px]
                border
                border-[#E9DDD6]
                bg-[#FCF7F4]/90
                px-4
                py-4
                shadow-[0_8px_25px_rgba(50,17,63,0.035)]
                sm:rounded-[23px]
                sm:px-6
                sm:py-5
                lg:min-h-[275px]
                lg:px-7
                lg:py-6
              "
            >

              <div className="flex items-start gap-3 sm:gap-4">

                {/* Icon */}

                <div
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F5E9DE]
                    text-[#A84668]
                    sm:h-[62px]
                    sm:w-[62px]
                  "
                >
                  <Target
                    size={29}
                    strokeWidth={1.4}
                    className="sm:h-[35px] sm:w-[35px]"
                  />
                </div>

                {/* Heading */}

                <div className="min-w-0">

                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.23em]
                      text-[#B06B1B]
                      sm:text-[10px]
                    "
                  >
                    Our Mission
                  </p>

                  <h3
                    className="
                      mt-1
                      font-serif
                      text-[21px]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.025em]
                      text-[#32113F]
                      sm:text-[27px]
                    "
                  >
                    Equip. Encourage.
                    <br />
                    <span className="text-[#B94F6F]">
                      Serve. Together.
                    </span>
                  </h3>

                  <div className="mt-2.5 h-[2px] w-[32px] bg-[#C48A3A]" />

                </div>

              </div>

              <p
                className="
                  mt-4
                  text-[10px]
                  leading-[1.5]
                  text-[#4F4752]
                  sm:mt-5
                  sm:text-[12px]
                  lg:text-[13px]
                  lg:leading-[1.55]
                "
              >
                To bring pastors and Christian leaders together for fellowship,
                spiritual growth, leadership development, and collaborative
                ministry, and to serve the Church and communities across the
                Kongu region with compassion, integrity, and a Christ-centered
                vision.
              </p>

            </article>

          </div>

        </div>

        {/* =======================================================
            SCRIPTURE
        ======================================================= */}

        <div
          className="
            mx-auto
            mt-6
            max-w-[850px]
            text-center
            sm:mt-7
            lg:mt-3
          "
        >

          <p
            className="
              font-serif
              text-[13px]
              italic
              leading-[1.4]
              text-[#32113F]
              sm:text-[16px]
              md:text-[18px]
              lg:text-[20px]
            "
          >
            “For I know the plans I have for you, declares the Lord,
            <br className="hidden sm:block" />
            plans to prosper you and not to harm you, plans to give you hope
            and a future.”
          </p>

          <div className="mt-2 flex items-center justify-center gap-3">

            <span className="h-[1.5px] w-[25px] bg-[#C48A3A]" />

            <span
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#A06B88]
                sm:text-[9px]
              "
            >
              Jeremiah 29:11
            </span>

            <span className="h-[1.5px] w-[25px] bg-[#C48A3A]" />

          </div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM CURVE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[38px]
          w-full
          overflow-hidden
          sm:h-[48px]
        "
      >

        <svg
          className="absolute bottom-[-1px] h-[55px] w-full"
          viewBox="0 0 1440 55"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* Plum */}

          <path
            d="M0 55V34C170 8 315 12 480 32C650 53 820 53 1005 30C1170 10 1300 13 1440 30V55H0Z"
            fill="#32113F"
          />

          {/* Pink */}

          <path
            d="M0 39C170 13 315 17 480 37C650 58 820 58 1005 35C1170 15 1300 18 1440 35"
            stroke="#E1B5C5"
            strokeWidth="8"
          />

          {/* Cream */}

          <path
            d="M0 33C170 7 315 11 480 31C650 52 820 52 1005 29C1170 9 1300 12 1440 29"
            stroke="#FCF7F4"
            strokeWidth="5"
          />

          {/* Gold */}

          <path
            d="M0 29C170 3 315 7 480 27C650 48 820 48 1005 25C1170 5 1300 8 1440 25"
            stroke="#C48A3A"
            strokeWidth="1"
          />

        </svg>

      </div>

    </section>
  );
}