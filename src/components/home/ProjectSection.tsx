import { IProject } from '@/config/projects';

import { PageSection } from '../PageSection';
import { ProjectCard } from '../ProjectCard';

interface ProjectSectionProps {
  projects: IProject[];
}

export const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <PageSection
      title="Featured Projects"
      redirect={{ text: 'All Projects', url: '/projects' }}
    >
      <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
        {projects.map((project) => {
          return <ProjectCard key={project.slug} project={project} />;
        })}
      </div>
    </PageSection>
  );
};
