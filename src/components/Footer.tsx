import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';


export default async function Footer() {
    const client = createClient();
    const footer = await client.getSingle("footer");

    return <footer>
        <div className='footer'>
            <PrismicRichText field={footer.data.disclaimer} />
            <ul>
                {footer.data.navigation.map(({ link, label }) => (
                    <li key={label}>
                        <PrismicNextLink field={link}>
                        {label}
                        </PrismicNextLink>
                    </li>
                ))}
            </ul>
        </div>
        <style>
            {`
                .footer {
                    padding: 5rem 0;
                } 
            `}
        </style>
    </footer>
}