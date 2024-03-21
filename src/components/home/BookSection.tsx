import CONFIG from '@/config';

import { BookCard } from '../BookCard';
import { PageSection } from '../PageSection';

export const BookSection = () => {
  return (
    <PageSection
      title="Recent Reads"
      redirect={{ text: "Books I've Read", url: '/reading' }}
    >
      <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
        {CONFIG.reading
          .sort(
            (a, b) =>
              new Date(b.dateFinished).getTime() -
              new Date(a.dateFinished).getTime(),
          )
          .slice(0, 3)
          .map((book) => {
            return <BookCard key={book.title} book={book} />;
          })}
      </div>
    </PageSection>
  );
};
