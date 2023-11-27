import { extractIdFromSpotifyLink, getSpotifyLinkType } from '@/lib/utils';
import useAlbum from './useAlbum';
import useTrack from './useTrack';
import useUnsupported from './useUnsupported';

const useSpotifyLink = (url: string) => {
  const id = extractIdFromSpotifyLink(url);
  const linkType = getSpotifyLinkType(url);

  const dispatch = () => {
    if (linkType === 'Track') {
      return useTrack;
    } else if (linkType === 'Album') {
      return useAlbum;
    } else {
      return useUnsupported;
    }
  };

  const { data, isLoading, isError } = dispatch()(id);

  return {
    data,
    isLoading,
    isError
  };
};

export default useSpotifyLink;
