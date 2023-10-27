import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import styles from './Footer.module.scss'
import Container from '../container/Container';
import Button from '../button/Button';


export default async function Footer() {
    const client = createClient();
    const footer = await client.getSingle("footer");

    return (
        <footer className={styles.footer}>
            <Container>
                <PrismicRichText field={footer.data.disclaimer} />
                <ul>
                    {footer.data.navigation.map(({ link, label }) => (
                        <li key={label}>
                            <Button field={link}>
                            {label}
                            </Button>
                        </li>
                    ))}
                </ul>
            </Container>
        </footer>
    )
}