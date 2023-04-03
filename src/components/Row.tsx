import React, { useRef, useState } from 'react';
import { Movie } from '../../typings';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ShareIcon,
} from '@heroicons/react/20/solid';
import Thumbnail from './Thumbnail';

interface Props {
  title: string;
  movies: Movie[];
}
export default function Row({ title, movies }: Props) {
  const [showRightIcon, setShowRightIcon] = useState(true);
  const [showLeftIcon, setShowLeftIcon] = useState(false);

  const rowRef = useRef<HTMLDivElement>(null);

  const clickHandler = (direction: string) => {
    if (rowRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = rowRef.current;
      const howMuchToScroll =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({
        behavior: 'smooth',
        left: howMuchToScroll,
      });

      if (howMuchToScroll > 0) {
        setShowLeftIcon(true);
      } else if (howMuchToScroll <= 0) {
        setShowLeftIcon(false);
        setShowRightIcon(true);
      }

      if (
        howMuchToScroll + clientWidth > scrollWidth ||
        clientWidth + scrollLeft === scrollWidth
      ) {
        setShowRightIcon(false);
      }
    }
  };

  return (
    <div className="space-y-.5 md:space-y-2 relative flex flex-col justify-center">
      <h2 className="w-56 cursor-pointer text-sm font-semibold md:text-2xl">
        {title}
      </h2>
      <div className="group md:-ml-2">
        {/* //m-auto is added to center an element horizontally within its container */}
        <ChevronLeftIcon
          onClick={() => clickHandler('left')}
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer hover:scale-125 transition opacity-50 group-hover:opacity-100 
          ${!showLeftIcon && 'hidden'}`}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-1.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide"
        >
          {movies.map((el) => {
            return <Thumbnail key={el.id} movie={el} />;
          })}
        </div>
        <ChevronRightIcon
          onClick={() => clickHandler('right')}
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer hover:scale-125 transition opacity-50 group-hover:opacity-100 ${
            !showRightIcon && 'hidden'
          }`}
        />
      </div>
    </div>
  );
}
