import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Accordion`.
 */
export type AccordionProps = SliceComponentProps<Content.AccordionSlice>;

/**
 * Component for "Accordion" Slices.
 */
const Accordion = ({ slice }: AccordionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.test} />
    </section>
  );
};

export default Accordion;
