export const READING = [
  {
    rating: 5,
    finished: false,
    title: 'Refactoring UI',
    dateFinished: '2024-04-10',
    author: 'Adam Wathan & Steve Schoger',
    link: 'https://www.refactoringui.com/',
  },
];

export type IBook = (typeof READING)[0];
