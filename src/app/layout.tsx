import type { Metadata } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sourceSerif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Late 4 Consultora | Procesos, Calidad y Tecnología',
  description: 'Consultoría administrativa, implementación ISO 9001, digitalización de procesos y desarrollo de software para PyMEs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${sourceSerif.variable} bg-late4-ink text-late4-ivory antialiased`}>
        {children}
      </body>
    </html>
  );
}
