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
