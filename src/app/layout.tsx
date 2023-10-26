import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PrismicPreview } from '@prismicio/next';
import { createClient, repositoryName } from '@/prismicio';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })


export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const navigation = await client.getSingle("navigation")

  return {
    title: navigation.data.site_title,
    description: navigation.data.meta_description
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font'>
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}