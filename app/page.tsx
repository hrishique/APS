import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Values from '@/components/home/Values';
import Products from '@/components/home/Products';
import CaseStudies from '@/components/home/CaseStudies';
import Machines from '@/components/home/Machines';
import MarketsClients from '@/components/home/MarketsClients';
import Contact from '@/components/home/Contact';

import productsData from '@/data/products.json';
import clientsData from '@/data/clients.json';
import caseStudiesData from '@/data/caseStudies.json';
import machinesData from '@/data/machines.json';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Values />
      <Products products={productsData} />
      <CaseStudies caseStudies={caseStudiesData} />
      <Machines machines={machinesData} />
      <MarketsClients clients={clientsData} />
      <Contact />
      <Footer />
    </main>
  );
}
