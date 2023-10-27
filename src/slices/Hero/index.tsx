import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Container from "@/components/container/Container";
import Button from "@/components/button/Button";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Container
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      
      <PrismicRichText field={slice.primary.body} />

      <Button field={slice.primary.button_link}>
        {slice.primary.button_text}
      </Button>
      
      <PrismicNextImage field={slice.primary.image} />

    </Container>
  );
};

export default Hero;
