import type { Metadata } from 'next';
import CrmDashboard from '@/components/crm/CrmDashboard';

export const metadata: Metadata = {
  title: 'CRM de contactos | Late4',
  description: 'Gestión interna de consultas y oportunidades comerciales.',
  robots: { index: false, follow: false },
};

export default function CrmPage() {
  return <CrmDashboard />;
}
