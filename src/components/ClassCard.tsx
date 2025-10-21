import Image from 'next/image';
import Link from 'next/link';

type ClassCardProps = {
  title: string;
  href?: string;
  imgSrc: string;
  price?: string;
  meta?: string; // e.g., "1 hr", "4 sessions"
  description: string;
};

export default function ClassCard({ title, href, imgSrc, price, meta, description }: ClassCardProps) {
  const CardInner = (
    <article className="group overflow-hidden rounded-2xl border border-gray-800 bg-black shadow transition hover:shadow-lg hover:border-gray-700">
      {/* Image: keep compact height like on events table */}
      <div className="relative w-full aspect-[4/2]">
        <Image
          alt={title}
          src={imgSrc}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
        />
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          {(price || meta) && (
            <div className="flex items-center gap-2">
              {meta && <span className="text-xs uppercase tracking-wide text-gray-400">{meta}</span>}
              {price && <span className="text-sm font-medium text-white">{price}</span>}
            </div>
          )}
        </div>
        {/* Long-description friendly: larger size + relaxed leading */}
        <p className="mt-2 text-base text-gray-200 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );

  return href ? (
    <Link href={href} className="block focus:outline-none focus:ring-2 focus:ring-white/30 rounded-2xl">
      {CardInner}
    </Link>
  ) : (
    CardInner
  );
}

