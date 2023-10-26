import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-block"
    >
    <PrismicRichText field={slice.primary.heading} />
    <PrismicRichText field={slice.primary.body} />
    <PrismicNextLink field={slice.primary.button_link}>
      {slice.primary.button_text}
    </PrismicNextLink>
    <PrismicNextImage field={slice.primary.image} />

    <style>
      {`
        .text-block {
          margin: 5rem 0;
          color: black;
          border: 1px solid blue;
        }
        .text-block__container {
          max-width: 1600px;
          margin: 0 auto;
        }
        .text-block__text {
          font-size: 24px;
        }          
      `}
      </style>       
    </section>
  );
};

export default Hero;
