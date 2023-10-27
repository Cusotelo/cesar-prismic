import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Container from "@/components/container/Container";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <>
    {slice.primary.dark === true && (
      <Container
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        dark={slice.primary.dark}
      >
        <PrismicRichText field={slice.primary.heading} />

        <div className="test">
          {slice.items.map((item, index) => (
            <div
              key={index}
            >

              <PrismicRichText field={item.title} />
              <PrismicRichText field={item.description} />
            </div>
          ))}
        </div>      
        <p>Test true</p>
      </Container>
    )}
  </>
  );
};

export default Features;
