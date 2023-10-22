import { ImSpotify } from 'react-icons/im';
import React from 'react';
import { spotifyAuthorizeUrl } from '../auth/spotify-login';

const Home: React.FC = () => {
  return (
    <>
      <a
        className="p-4 rounded-lg bg-green-500 hover:opacity-75 hover:border-current"
        href={spotifyAuthorizeUrl}
      >
        {' '}
        <div className="flex flex-row">
          <ImSpotify className="my-auto mr-4" size="18" />
          <p className="text-black font-semibold">Sign in with Spotify</p>
        </div>
      </a>
    </>
  );
};

export default Home;
