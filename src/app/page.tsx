import { BentoGridSection } from '@/components/home/BentoGridSection';

export const revalidate = 0;

export default async function Home() {
  return (
    <>
      <div className="flex flex-col space-y-6 md:space-y-10 pb-10 min-h-[40rem] max-h-[40rem]">
        <div className="flex flex-col md:px-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl text-center">
              Hi there, I&apos;m Ahmed Ismail!
            </h1>
            <h2 className="text-2xl text-center">
              Welcome to my personal space on the internet!
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:px-6">
          <div className="flex flex-col space-y-2">
            <BentoGridSection />
          </div>
        </div>
      </div>
    </>
  );
}
