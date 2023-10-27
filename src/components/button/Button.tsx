import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'
import styles from './Button.module.scss'


export default function Button({
    // className,
    ...restProps
    //Field from PrsimicNextLink getting passed through restProps
}: PrismicNextLinkProps) {
    return (
        <PrismicNextLink className={styles.btn} {...restProps} />
    )
}