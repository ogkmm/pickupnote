'use client';
import { SpotifyDataHook, Track } from '@/lib/type';
import useSWR from 'swr';

const hookType: SpotifyDataHook = 'TrackDataHook';

const fetcher = (url: string, id: string) =>
  fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify({ id: id })
  }).then((res) => res.json());

const useTrack = (id: string) => {
  const { data, error, isLoading } = useSWR<Track, Error>(
    ['/api/getSpotifyTrack', id],
    ([u, id]) => fetcher(u, id as string),
    { revalidateOnFocus: false }
  );

  return {
    data,
    isLoading,
    isError: error,
    type: hookType
  };
};

export default useTrack;
