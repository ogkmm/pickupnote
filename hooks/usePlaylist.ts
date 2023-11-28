'use client';
import { SpotifyDataHook, Playlist } from '@/lib/type';
import useSWR from 'swr';

const hookType: SpotifyDataHook = 'PlaylistDataHook';

const fetcher = (url: string, id: string) =>
  fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify({ id: id })
  }).then((res) => res.json());

const usePlaylist = (id: string) => {
  const { data, error, isLoading } = useSWR<Playlist, Error>(
    ['/api/getSpotifyPlaylist', id],
    ([u, id]) => fetcher(u, id as string),
    { revalidateOnFocus: false }
  );

  if (data && data.description === null) {
    data.description = 'No description yet';
  }

  return {
    data,
    isLoading,
    isError: error,
    type: hookType
  };
};

export default usePlaylist;
