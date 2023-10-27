import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import styles from './Header.module.scss' 
import Container from "../container/Container";
import Button from "../button/Button";

export default async function Header() {
    const client = createClient();
    const navigation = await client.getSingle("navigation");

    return (
        <header className={styles.test}>
            <Container>
                <nav>
                    <p>{navigation.data.site_title}</p>
                    <ul>
                        {navigation.data.navigation.map(( navItem , index) => (
                            <li key={index}>
                                <Button field={navItem.link}>
                                {navItem.label}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>    
            </Container>
        </header>
    );


}