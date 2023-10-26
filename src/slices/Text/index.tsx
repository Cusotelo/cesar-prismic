import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-slice"
    >

      <PrismicRichText field={slice.primary.title} />
      Placeholder component for text (variation: {slice.variation}) Slices

      <style>
        {`
        .text-slice {
          padding: 5rem 0;
          border: 1px solid red;
        }
        `}
      </style>
    </section>
  );
};

export default Text;
