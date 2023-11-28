import { NextResponse } from 'next/server';
import { initializeSpotifyApi, spotifyApi } from '../credential';

export async function POST(request: Request) {
  const { id } = await request.json();

  try {
    await initializeSpotifyApi();
    const res = await spotifyApi.getArtist(id);
    console.log('A Spotify artist is fetched.');

    // extract { type, title, description, follower, image }
    const type: string = res.body.type;
    const title: string = res.body.name;
    const description: string[] = res.body.genres;
    const follower: number = res.body.followers.total;
    const image: string = res.body.images[1].url;

    return NextResponse.json({
      type,
      title,
      description,
      follower,
      image
    });
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
