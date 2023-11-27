import { NextResponse } from 'next/server';
import { spotifyApi, initializeSpotifyApi } from '../credential';

export async function POST(request: Request) {
  const { id } = await request.json();

  try {
    await initializeSpotifyApi();
    const res = await spotifyApi.getTrack(id);
    console.log('A Spotify track is fetched.');

    // extract data: { type, title, authors, releaseYear, image }
    const type: string = res.body.type;
    const title: string = res.body.name;
    const authors: string[] = res.body.artists.map((artist) => artist.name);
    const releaseYear: string = res.body.album.release_date.split('-')[0];
    // use 300 x 300 image
    const image: string = res.body.album.images[1].url;

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
