import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Movie } from '../../typings';
import { baseUrl } from '../../constants/movie';

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)],
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 py-16">
      <div className="absolute top-0 left-0 h-[95vh] w-screen z-[-50]">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="Banner Image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
        {movie?.name || movie?.title || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-xl lg:max-w-2xl lg:text-2xl text-shadow-md">
        {movie?.overview}
      </p>
    </div>
  );
}

export default Banner;
