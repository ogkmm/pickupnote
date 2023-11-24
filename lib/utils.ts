import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isObjectEmpty = (obj: Object) => {
  return Object.keys(obj).length === 0;
};

export function checkValidURL(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

export function extractTrackIdFromSpotifyLink(url: string) {
  return url.split('?')[0].split('/').pop() ?? '';
}

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
