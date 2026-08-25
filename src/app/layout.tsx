import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Late4 Consultora | Gestión integrada: procesos, costos, calidad y tecnología',
  description:
    'Transformamos la información dispersa en planillas Excel, ERP, CRM y correos en un sistema de gestión único. Contabilidad de costos, ISO 9001, software a medida e IA para PyMEs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-white text-l4-night antialiased`}>
        {children}
      </body>
    </html>
  );
}
