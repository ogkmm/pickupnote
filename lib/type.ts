/*
 * spotify info type
 **/
export type SpotifyLinkType =
  | 'Track'
  | 'Album'
  | 'Artist'
  | 'Playlist'
  | 'Episode'
  | 'Show'
  | 'Concert'
  | 'Audiobook'
  | 'Chapter'
  | 'Unknown';

export type SpotifyDataHook =
  | 'TrackDataHook'
  | 'AlbumDataHook'
  | 'ArtistDataHook'
  | 'PlaylistDataHook'
  | 'UnsupportedHook';

export interface Track {
  type: string;
  title: string;
  authors: string[];
  releaseYear: string;
  image: string;
}

export interface Album {
  type: string;
  title: string;
  authors: string[];
  releaseYear: string;
  image: string;
}

export interface Artist {
  type: string;
  title: string;
  description: string[];
  follower: number;
  image: string;
}

export interface Playlist {
  type: string;
  title: string;
  description: string | null;
  like: number;
  image: string;
}

export interface General {
  type: string;
  title: string;
  image: string;
  explanation: string[];
  additionInfo: string | number;
}

/*
 * option menu type
 * */
export type AspectRatio = {
  name: string;
  type: AspectRatioType;
  icon: JSX.Element;
};

export type AspectRatioType =
  | 'LONGPICTURE'
  | 'FULLSCREEN'
  | 'SQUARE'
  | 'SIXTEENNINE'
  | 'UNKNOWN';

export type Appearence = {
  name: string;
  default: boolean;
};

export type Pattern = {
  name: string;
  icon: JSX.Element;
};

/*
 * music info type
 * */
export type TrackInfo = {
  id: number;
  source: string;
  itemType: string;
  platId: string;
  title: string;
  image: string;
  artist: string;
  artists: string[];
  publishYear: string;
  tracks: TrackInfo[];
  genres: { name: string }[];
  duration_ms: number;
};

export type MusicInfo = {
  id: number;
  source: string;
  itemType: string;
  platId: string;
  title: string;
  image: string;
  artist: string;
  artists: string[];
  publishYear: string;
  tracks: TrackInfo[];
  genres: { name: string }[];
  duration_ms: number;
  description: string;
  followers: number;
};

export type MusicInfoResponse = {
  resCode: string;
  resMsg: string;
  musicInfo: MusicInfo;
};
