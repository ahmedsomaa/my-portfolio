'use client';

import { useMemo, useState } from 'react';

export const usePagination = ({
  totalSize,
  pageSize = 5,
}: {
  totalSize: number;
  pageSize?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(totalSize / pageSize),
    [totalSize, pageSize],
  );

  const startPage = (currentPage - 1) * pageSize;
  const endPage = currentPage * pageSize;

  const pages = useMemo(() => {
    return [...Array.from({ length: totalPages }).map((_, i) => i + 1)];
  }, [totalPages]);

  const onPressFirst = () => {
    setCurrentPage(1);
  };

  const onPressLast = () => {
    setCurrentPage(totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    startPage,
    endPage,
    pages,
    onPressFirst,
    onPressLast,
    goToPage,
  };
};
