import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    date: "01",
    month: "EVENT",
    title: "Pastors Fellowship Meeting",
    description:
      "A time of fellowship, prayer and encouragement for pastors and Christian leaders.",
    location: "Kongu Mandala Region",
  },
  {
    date: "02",
    month: "EVENT",
    title: "Leadership Gathering",
    description:
      "An opportunity for Christian leaders to connect, discuss and strengthen ministry relationships.",
    location: "Tamil Nadu",
  },
  {
    date: "03",
    month: "EVENT",
    title: "Prayer & Fellowship",
    description:
      "Coming together in prayer and fellowship for the Church and Christian community.",
    location: "Kongu Mandala Region",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="bg-[#faf9f6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a34e]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9b7629]">
                Events & Gatherings
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-[#082b59] sm:text-5xl">
              Coming together in fellowship.
            </h2>
          </div>

          <a
            href="#events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#082b59]"
          >
            View all events
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-14 divide-y divide-slate-200 rounded-[28px] border border-slate-200 bg-white">
          {events.map((event) => (
            <article
              key={event.title}
              className="group grid gap-6 p-7 transition hover:bg-[#faf9f6] sm:grid-cols-[100px_1fr_auto] sm:items-center sm:p-9"
            >
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-[#f5f1e8]">
                <span className="text-2xl font-semibold text-[#082b59]">
                  {event.date}
                </span>

                <span className="mt-1 text-[9px] font-semibold tracking-[0.15em] text-[#9b7629]">
                  {event.month}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#082b59]">
                  {event.title}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                  {event.description}
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={13} />
                    Upcoming
                  </span>

                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {event.location}
                  </span>
                </div>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#082b59] transition group-hover:border-[#c9a34e]">
                <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}