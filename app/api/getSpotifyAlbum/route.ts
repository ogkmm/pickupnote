import { NextResponse } from 'next/server';
import { spotifyApi, initializeSpotifyApi } from '../credential';

export async function POST(request: Request) {
  const { id } = await request.json();

  try {
    await initializeSpotifyApi();
    const res = await spotifyApi.getAlbum(id);
    console.log('A Spotify album is fetched.');

    const type: string = res.body.type;
    const title: string = res.body.name;
    const authors: string[] = res.body.artists.map((artist) => artist.name);
    const releaseYear: string = res.body.release_date.split('-')[0];
    const image: string = res.body.images[1].url;

    return NextResponse.json({
      type: type,
      title: title,
      authors: authors,
      releaseYear: releaseYear,
      image: image
    });
  } catch (err) {
    console.log(err);
    return new NextResponse('Internal Error', {
      status: 500
    });
  }
}
