import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SpotifyLinkType } from './type';
import toast from 'react-hot-toast';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isObjectEmpty = (obj: Object) => {
  return Object.keys(obj).length === 0;
};

export function checkValidURL(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

export const extractIdFromSpotifyLink = (url: string): string => {
  return url.split('?')[0].split('/').pop() ?? '';
};

/**
 * Track: [SPOTIFY_URL]/track/[id]
 * Album: [SPOTIFY_URL]/album/[id]
 * Artist: [SPOTIFY_URL]/artist/[id]
 * Playlist: [SPOTIFY_URL]/playlist/[id]
 * Episode(login): [SPOTIFY_URL]/episode/[id]
 * Show(login): [SPOTIFY_URL]/show/[id]
 * Concert(no_api): [SPOTIFY_URL]/concert/[id]
 * Audiobook(limited): [SPOTIFY_URL]/audiobook/[id]
 * Chapter(limited): [SPOTIFY_URL]/chapter/[id]
 */
export const getSpotifyLinkType = (url: string): SpotifyLinkType => {
  let keyword: string = url.split('?')[0].split('/').slice(-2, -1).pop() ?? '';
  keyword = keyword.toUpperCase();

  if (keyword === 'TRACK') {
    return 'Track';
  } else if (keyword === 'ALBUM') {
    return 'Album';
  } else if (keyword === 'ARTIST') {
    return 'Artist';
  } else if (keyword === 'PLAYLIST') {
    return 'Playlist';
  } else if (keyword === 'EPISODE') {
    return 'Episode';
  } else if (keyword === 'SHOW') {
    return 'Show';
  } else if (keyword === 'CONCERT') {
    return 'Concert';
  } else if (keyword === 'AUDIOBOOK') {
    return 'Audiobook';
  } else if (keyword === 'CHAPTER') {
    return 'Chapter';
  } else {
    return 'Unknown';
  }
};

export const postData = async ({
  url,
  data
}: {
  url: string;
  data: Object;
}) => {
  console.log('GETDATA:', url, data);

  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res.json();
};

export const toastError = (text: string) => {
  toast.error(text, {
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE'
    }
  });
};

export const toastSuccess = (text: string) => {
  toast.success(text, {
    iconTheme: {
      primary: '#423FA1',
      secondary: '#FFFAEE'
    }
  });
};

export class MediaType {
  _mediaType: string = 'unknown';
  constructor(type: string) {
    this._mediaType = type;
  }
}
