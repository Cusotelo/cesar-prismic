import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Container from "@/components/container/Container";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <Container
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <PrismicRichText field={slice.primary.title} />
          <PrismicNextImage field={slice.primary.image} />

        </Container>
      )}


      {slice.variation === "horizontal" && (
        <Container
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="horizontal"
          dark={true}
        >
          <PrismicRichText field={slice.primary.title} />
          <PrismicNextImage field={slice.primary.image} />
        </Container>
      )}
    </>
  );
};

export default Text;
