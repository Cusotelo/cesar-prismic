import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import styles from './Header.module.scss' 
import Container from "../container/Container";

export default async function Header() {
    const client = createClient();
    const navigation = await client.getSingle("navigation");

    return (
        <Container>
            <header>{navigation.data.site_title}
                <nav className={styles.test}>
                    <p>Nav</p>
                    <ul>
                        {navigation.data.navigation.map(({ link, label }) => (
                        <li key={label}>
                            <PrismicNextLink field={link}>
                            {label}
                            </PrismicNextLink>
                        </li>
                        ))}
                    </ul>
                </nav>    
            </header>
        </Container>
    );


}