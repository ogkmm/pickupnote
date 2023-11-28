import { extractIdFromSpotifyLink, getSpotifyLinkType } from '@/lib/utils';
import useAlbum from './useAlbum';
import useTrack from './useTrack';
import useArtist from './useArtist';
import usePlaylist from './usePlaylist';
import useUnsupported from './useUnsupported';
import { General, SpotifyLinkType } from '@/lib/type';

const useSpotifyLink = (url: string) => {
  const id: string = extractIdFromSpotifyLink(url);
  const linkType: SpotifyLinkType = getSpotifyLinkType(url);

  const dispatch = () => {
    if (linkType === 'Track') {
      return useTrack;
    } else if (linkType === 'Album') {
      return useAlbum;
    } else if (linkType === 'Artist') {
      return useArtist;
    } else if (linkType === 'Playlist') {
      return usePlaylist;
    } else {
      return useUnsupported;
    }
  };

  const { data, isLoading, isError, type } = dispatch()(id);
  let conditionalData: General | undefined = undefined;

  if (data) {
    if (type === 'TrackDataHook') {
      conditionalData = {
        type: data.type,
        title: data.title,
        image: data.image,
        explanation: [...data.authors],
        additionInfo: data.releaseYear
      };
    } else if (type === 'AlbumDataHook') {
      conditionalData = {
        type: data.type,
        title: data.title,
        image: data.image,
        explanation: [...data.authors],
        additionInfo: data.releaseYear
      };
    } else if (type === 'ArtistDataHook') {
      conditionalData = {
        type: data.type,
        title: data.title,
        image: data.image,
        explanation: [...data.description],
        additionInfo: data.follower
      };
    } else if (type === 'PlaylistDataHook') {
      conditionalData = {
        type: data.type,
        title: data.title,
        image: data.image,
        explanation: data.description
          ? [data.description]
          : ['No description yet'],
        additionInfo: data.like
      };
    }
  }

  return {
    data: conditionalData,
    isLoading,
    isError
  };
};

export default useSpotifyLink;
