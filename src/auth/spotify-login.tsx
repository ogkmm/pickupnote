import SpotifyWebApi from "spotify-web-api-node";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SpotifyWebApiServer from 'spotify-web-api-node/src/server-methods';

(SpotifyWebApi as unknown as { _addMethods: (fncs: unknown) => void })._addMethods(
	SpotifyWebApiServer
);

// basic authorization information
const redirectUri: string = "http://localhost:5173/";
const clientId: string = "ed6ad964016b4abdb116a69aeb5cb086";
const clientSecret: string = "47c46da85bcb47d2b305de5db9dad129";
const scopes: string[] = [
    "user-top-read",
    "user-read-recently-played",
    "user-library-read",
    "user-read-private",
];
const state: string = "";

// API object initial
const spotifyApi: SpotifyWebApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId,
    clientSecret: clientSecret
});

export const spotifyAuthorizeUrl: string = spotifyApi.createAuthorizeURL(scopes, state);

export const getCodeFromUrl = (): string | null => {
    return new URLSearchParams(window.location.search).get("code");
};
