import type { Metadata } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const sora = Sora({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://elevatebox-voice-agents.srinigogula02.chatgpt.site'),
  title: 'ElevateBox Voice Agents — Turn Every Enquiry Into Revenue',
  description: 'Done-for-you AI voice agents for B2B lead qualification, follow-up and appointment booking. Reserve your build for ₹500.',
  openGraph: {
    title: 'ElevateBox Voice Agents',
    description: 'Turn every enquiry into revenue with a done-for-you B2B voice agent.',
    type: 'website',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'ElevateBox Voice Agents — Turn every enquiry into revenue' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElevateBox Voice Agents',
    description: 'Turn every enquiry into revenue with a done-for-you B2B voice agent.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
