import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

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
      <body className={`${inter.variable} font-sans bg-white text-late4-dark-gray`}>
        {children}
      </body>
    </html>
  );
}
