import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-block"
    >
      Placeholder component for text_block (variation: {slice.variation}) Slices
      {isFilled.richText(slice.primary.title) && (
        <div className="class">
          <PrismicRichText field={slice.primary.title} />
        </div>
      )}
      <style>
          {`
            .text-block {
              margin: 5rem 0;
              color: black;
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

export default TextBlock;
