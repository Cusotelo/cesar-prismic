import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'
import styles from './Button.module.scss'
import clsx from 'clsx';

export default function Button({
    // className,
    ...restProps
    //Field from PrsimicNextLink getting passed through restProps
}: PrismicNextLinkProps) {
    return (
        <PrismicNextLink className={clsx(styles.btn, "btn btn-primary")} {...restProps} />
    )
}