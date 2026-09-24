import Image from "next/image";

type CraftPhotoProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  source: string;
  sourceLabel: string;
  credit: string;
  license: string;
  layout?: "card" | "wide";
  preload?: boolean;
};

export default function CraftPhoto({
  src, width, height, alt, caption, source, sourceLabel, credit, license,
  layout = "card", preload = false,
}: CraftPhotoProps) {
  return (
    <figure className={layout === "wide" ? "mx-auto mt-8 max-w-xl" : "mt-4"}>
      <Image
        src={src}
        preload={preload}
        alt={alt}
        width={width}
        height={height}
        sizes={layout === "wide" ? "(max-width: 623px) calc(100vw - 48px), 576px" : "(max-width: 767px) calc(100vw - 98px), 350px"}
        className="h-auto w-full"
      />
      <figcaption className="mt-2 text-xs leading-5 text-stone-500">
        {caption} Photo: {credit} /{" "}
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          {sourceLabel}
        </a>{" "}
        · {license}
      </figcaption>
    </figure>
  );
}
