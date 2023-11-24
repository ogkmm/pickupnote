'use client';
import { extractTrackIdFromSpotifyLink } from '@/lib/utils';
import useSWR from 'swr';

export interface Track {
  type: string;
  title: string;
  authors: string[];
  releaseYear: string;
  image: string;
}

const fetcher = (_u: string, id: string) =>
  fetch(_u, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify({ id: id })
  }).then((res) => res.json());

const useTrack = (url: string) => {
  const tid: string = extractTrackIdFromSpotifyLink(url);
  const { data, error, isLoading } = useSWR<Track, Error>(
    ['/api/getSpotifyTrack', tid],
    ([u, tid]) => fetcher(u, tid as string),
    { revalidateOnFocus: false }
  );

  return {
    track: data,
    isLoading,
    isError: error
  };
};

export default useTrack;
