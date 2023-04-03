import React from 'react';
import { Movie } from '../../typings';
import { thumbanilBaseUrl } from '../../constants/movie';
import Image from 'next/image';
interface Props {
  movie: Movie;
}
function Thumbnail({ movie }: Props) {
  return (
    <div className="relative h-28 min-w-[180px] transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        alt="Trending Movie Thumbnail"
        src={`${thumbanilBaseUrl}${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        fill
      />
    </div>
  );
}

export default Thumbnail;
