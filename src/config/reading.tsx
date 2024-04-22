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
    rating: 4.5,
    finished: true,
    author: 'Terry Halpin',
    dateFinished: '2023-08-10',
    title: 'Object-Role Modeling Fundamentals',
    link: 'https://books.google.com.eg/books?id=meM2CAAAQBAJ&printsec=frontcover&redir_esc=y#v=onepage&q&f=false',
  },
];

export type IBook = (typeof READING)[0];
