import { env } from '@/env';

export const retrievalBoxPlaceHolderText: string =
  '粘贴 Spotify 或 Apple Music 曲目链接';
export const retrievalButtonText: string = '标记';
export const loginOutButtonText: string = '注册/登录';

// backend api interface
export const apiDomain: string = env.NEXT_PUBLIC_BACKEND_DOMAIN;
export const spotifyMediaInfoApi: string = `${apiDomain}/api/v2/login-service/musicInfo`;

// extra
export const openSpotifyUrl: string = 'https://open.spotify.com';
