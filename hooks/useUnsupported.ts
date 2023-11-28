import { SpotifyDataHook } from '@/lib/type';

const hookType: SpotifyDataHook = 'UnsupportedHook';

const useUnsupported = (id: string) => {
  return {
    data: undefined,
    isLoading: false,
    isError: new Error('Invalid spotify url.'),
    type: hookType
  };
};

export default useUnsupported;
