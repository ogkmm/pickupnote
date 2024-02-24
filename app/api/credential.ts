import SpotifyWebApi from 'spotify-web-api-node';
import { env } from '@/env';

const clientId = env.SPOTIFY_CLIENT_ID;
const clientSecret = env.SPOTIFY_CLIENT_SECRET;

export const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

export const initializeSpotifyApi = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);
  } catch (err) {
    console.log('[CLIENT CREDENTIAL AUTH ERROR] ', err);
  }
};
