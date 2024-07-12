import React, { useState, useEffect } from 'react';

interface PaginationProps {
  paginationCollection: any[];
  offset: number;
  previousText?: string;
  nextText?: string;
  nextPage: () => void;
  previousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  paginationCollection,
  offset,
  previousText = 'Previous',
  nextText = 'Next',
  nextPage,
  previousPage,
}) => {
  const [previousDisabled, setPreviousDisabled] = useState(offset === 0);

  useEffect(() => {
    setPreviousDisabled(offset === 0);
  }, [offset]);

  return (
    <div>
      <button onClick={previousPage} disabled={previousDisabled}>
        {previousText}
      </button>
      <button onClick={nextPage}>
        {nextText}
      </button>
    </div>
  );
};

export default Pagination;
