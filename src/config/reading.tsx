export const READING = [
  {
    rating: 5,
    finished: false,
    title: 'Refactoring UI',
    dateFinished: '2024-04-10',
    author: 'Adam Wathan & Steve Schoger',
    link: 'https://www.refactoringui.com/',
  },
  {
    rating: 5,
    finished: false,
    title: 'React 18 Design Patterns and Best Practices UI',
    dateFinished: '2024-04-10',
    author: 'Carlos Santana Roldán',
    link: 'https://www.packtpub.com/product/react-18-design-patterns-and-best-practices-fourth-edition/9781803233109',
  },
  {
    rating: 4,
    finished: true,
    author: 'Terry Halpin',
    dateFinished: '2023-08-10',
    title: 'Object-Role Modeling Fundamentals',
    link: 'https://books.google.com.eg/books?id=meM2CAAAQBAJ&printsec=frontcover&redir_esc=y#v=onepage&q&f=false',
  },
];

export type IBook = (typeof READING)[0];
