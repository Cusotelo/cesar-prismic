import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
    const client = createClient();
    const navigation = await client.getSingle("navigation");

    return  <header>{navigation.data.site_title}
    <nav className="header">
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
    <style>
        {
            `
                .header {
                    padding: 5rem 0;
                }
            `
        }
    </style>
    </header>;


}