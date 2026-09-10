import { ArrowUpRight } from "lucide-react";

const galleryItems = [
  {
    title: "Fellowship",
    image: "/images/gallery/gallery-1.jpg",
    size: "large",
  },
  {
    title: "Pastors Gathering",
    image: "/images/gallery/gallery-2.jpg",
    size: "small",
  },
  {
    title: "Prayer Meeting",
    image: "/images/gallery/gallery-3.jpg",
    size: "small",
  },
  {
    title: "Community",
    image: "/images/gallery/gallery-4.jpg",
    size: "wide",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c9a34e]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9b7629]">
                Gallery
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-[#082b59] sm:text-5xl">
              Moments of fellowship.
            </h2>
          </div>

          <a
            href="#gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#082b59]"
          >
            View gallery
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#f2efe8]">
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7 pt-20">
              <p className="text-lg font-semibold text-white">
                {galleryItems[0].title}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {galleryItems.slice(1).map((item) => (
              <div
                key={item.title}
                className="relative min-h-[200px] overflow-hidden rounded-[24px] bg-[#f2efe8]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-14">
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}