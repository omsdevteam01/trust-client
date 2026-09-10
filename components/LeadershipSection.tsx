import { ArrowRight, UserRound } from "lucide-react";

const leaders = [
  {
    name: "President",
    role: "Peravai Leadership",
  },
  {
    name: "General Secretary",
    role: "Peravai Leadership",
  },
  {
    name: "Vice President",
    role: "Peravai Leadership",
  },
  {
    name: "Advisory Team",
    role: "Peravai Leadership",
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a34e]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9b7629]">
                Leadership
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-[#082b59] sm:text-5xl">
              Serving through leadership.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            Meet the leadership team guiding the Peravai with commitment,
            fellowship and a vision for stronger Christian ministry.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="group overflow-hidden rounded-[24px] border border-slate-200 bg-[#faf9f6]"
            >
              <div className="flex aspect-[4/4.5] items-center justify-center bg-[#f1eee6]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
                  <UserRound size={38} className="text-slate-300" />
                </div>
              </div>

              <div className="p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9b7629]">
                  {leader.role}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-[#082b59]">
                  {leader.name}
                </h3>

                <div className="mt-5 h-px bg-slate-200" />

                <a
                  href="#contact"
                  className="group mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#082b59]"
                >
                  Leadership details

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}