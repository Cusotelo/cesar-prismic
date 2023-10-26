import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';


export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return <footer>
        <ul className='footer'>
            <p>footer</p>
            {settings.data.navigation.map(({ link, label }) => (
            <li key={label}>
                <PrismicNextLink field={link}>
                {label}
                </PrismicNextLink>
            </li>
            ))}
        </ul>
        <style>
            {
                `
                    .footer {
                        padding: 5rem 0;
                    }
                `
            }
        </style>
    </footer>
}