'use client';
import useSWR from 'swr';

export interface Album {
  type: string;
  title: string;
  authors: string[];
  releaseYear: string;
  image: string;
}

const fetcher = (url: string, id: string) =>
  fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify({ id: id })
  }).then((res) => res.json());

const useAlbum = (id: string) => {
  const { data, error, isLoading } = useSWR<Album, Error>(
    ['/api/getSpotifyAlbum', id],
    ([u, id]) => fetcher(u, id as string),
    { revalidateOnFocus: false }
  );

  return {
    data,
    isLoading,
    isError: error
  };
};

export default useAlbum;
