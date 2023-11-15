// import cn from 'classnames';
import styles from './Container.module.scss';
import clsx from 'clsx';

type ContainerProps = {
    as?: React.ElementType;
    className?: string;
    dark?: boolean;
    children: React.ReactNode;
}

export default function Container({
    as: Section = "section", //override parent elm
    className,
    children,
    dark,
    ...restProps //any other props
}: ContainerProps){

    return (
        <Section className={styles.section} {...restProps}>
            <div className={clsx(styles.container, className, dark, "row", "more")}>
                <div className={dark ? styles.dark : ''}>
                    {children}
                </div>
            </div>
        </Section>
    )
}

