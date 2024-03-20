import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MusicInfo, SpotifyLinkType } from './type';
import toast from 'react-hot-toast';
import { openAppleMusicURL, openSpotifyURL } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const wait = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

export const isObjectEmpty = (obj: Object) => {
  return Object.keys(obj).length === 0;
};

export function checkValidURL(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

/* _____https://a____bc.c__om____ */
export const cleanURL = (dirtyURL: string | undefined) => {
  if (!dirtyURL) return dirtyURL;

  return dirtyURL.trim().replace(/\s+/g, '');
};

export function generateMusicSourceLink(info: MusicInfo): string {
  const isAppleMusicSource: boolean = info.source === 'AppleMusic';
  const ret: string = isAppleMusicSource
    ? `${openAppleMusicURL}`
    : `${openSpotifyURL}`;

  if (isAppleMusicSource) {
    const musicType = info.itemType === 'track' ? 'album' : info.itemType;
    return `${ret}/${musicType}/${info.platId}`;
  }
  return `${ret}/${info.itemType}/${info.platId}`;
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

/* accquire spotify code */
export const generateSpotifyCodeLink = (info: MusicInfo): string => {
  const baseUrl: string =
    'https://scannables.scdn.co/uri/plain/jpeg/010101/white/300';
  return `${baseUrl}/spotify:${info.itemType}:${info.platId}`;
};

/**
 * availability check
 * If the server returns 200, it is considered accessible;
 * otherwise it is unavailable (response codes other than 200 or unreachable domain).
 * */
export function checkSourceAvailability(
  url: string,
  times: number = 0,
  delay: number = 300
): Promise<{ target: string; isAvailable: boolean }> {
  return new Promise((res) => {
    (function check(t: number) {
      fetch(url, { mode: 'cors' })
        .then((r) => {
          if (r.status === 200) {
            res({ target: url, isAvailable: true });
          } else {
            res({ target: url, isAvailable: false });
          }
        })
        .catch((e) => {
          if (times === 0) return res({ target: url, isAvailable: false });
          setTimeout(() => check(--times), delay);
        });
    })(times);
  });
}

export const getCurrentDate = (): string => {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  /* months are counted starting from 0, so you need to add 1 */
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();

  /* add zero to the month and date */
  const formattedMonth: string = month < 10 ? '0' + month : '' + month;
  const formattedDay: string = day < 10 ? '0' + day : '' + day;

  const formattedDate: string = `${year}/${formattedMonth}/${formattedDay}`;
  return formattedDate;
};

/* social media share link */
/* twtter (X) */
export const generateShareToSocialMediaContent = (info: MusicInfo) => {
  const text = `Capture your precious music moments with pickupnote 🎉.\nI just shared a song from ${info.source}, click and start listening`;
  const musicLink = generateMusicSourceLink(info);

  return {
    content: text,
    musicUrl: musicLink,
    tags: ['pickupnote', 'memory']
  };
};
