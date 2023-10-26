// import cn from 'classnames';
import styles from './Container.module.scss';

type ContainerProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

export default function Container({
    as: Comp = "section",
    className,
    children,
    ...restProps
}: ContainerProps){

    return (
        <Comp className={styles.container} {...restProps}>
            <div className={styles.section}>
                {children}
            </div>
        </Comp>
    )
}