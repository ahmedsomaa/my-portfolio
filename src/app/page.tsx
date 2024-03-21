import { BookSection } from '@/components/home/BookSection';
import { PostSection } from '@/components/home/PostSection';
import { ProjectSection } from '@/components/home/ProjectSection';
import CONFIG from '@/config';

import AboutMe from '../components/home/AboutMe';
import Header from './header';

export const revalidate = 0;

export default async function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6 md:space-y-10 pb-10">
        <div className="flex flex-col  md:px-6">
          <div className="flex flex-col space-y-2">
            <AboutMe />
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          {/* Featured Projects */}
          <div className="flex flex-col space-y-2">
            <ProjectSection
              projects={CONFIG.projects.filter((project) => project.featured)}
            />
          </div>

          {/* Featured Posts */}
          <div className="flex flex-col space-y-2">
            <PostSection />
          </div>

          {/* Featured Reads */}
          <div className="flex flex-col space-y-2">
            <BookSection />
          </div>
        </div>
      </div>
    </>
  );
}
