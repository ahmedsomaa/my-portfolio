import { BentoGridSection } from '@/components/home/BentoGridSection';

import { Footer } from './footer';
import Header from './header';

export const revalidate = 0;

export default async function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6 md:space-y-10 pb-10">
        <div className="flex flex-col md:px-6">
          <div className="flex flex-col space-y-2">
            {/* <AboutMe /> */}
            <p className="text-4xl text-center">Hey there, I&apos;am Ahmed!</p>
            <p className="text-4xl text-center">
              Welcome to my space on the web!
            </p>
          </div>
        </div>

        <div className="flex flex-col md:px-6">
          <div className="flex flex-col space-y-2">
            <BentoGridSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
