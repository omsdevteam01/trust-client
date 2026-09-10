import {
  BookOpen,
  HeartHandshake,
  Church,
  Users,
  ArrowUpRight,
} from "lucide-react";

const ministries = [
  {
    number: "01",
    icon: Users,
    title: "Pastoral Fellowship",
    description:
      "Creating meaningful opportunities for pastors and Christian leaders to meet, connect and encourage one another.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Spiritual Growth",
    description:
      "Encouraging learning, prayer, spiritual development and continued growth in Christian leadership.",
  },
  {
    number: "03",
    icon: Church,
    title: "Church Support",
    description:
      "Strengthening relationships and cooperation between pastors, churches and Christian communities.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Welfare & Support",
    description:
      "Promoting mutual care, support and fellowship among pastors and members of the Peravai.",
  },
];

export default function MinistriesSection() {
  return (
    <section id="ministries" className="bg-[#082b59] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#e5c56a]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e5c56a]">
              Our Ministries
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            Serving people.
            <br />
            Strengthening the Church.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-white/60">
            Our activities are designed to encourage fellowship, strengthen
            Christian leadership and create opportunities to serve together.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2">
          {ministries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group bg-[#082b59] p-8 transition hover:bg-[#0d3568] sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon size={21} className="text-[#e5c56a]" />
                  </div>

                  <span className="text-xs font-medium text-white/20">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
                  {item.description}
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-[#e5c56a]"
                >
                  Learn more

                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}