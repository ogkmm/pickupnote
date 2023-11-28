import { NextResponse } from 'next/server';
import { initializeSpotifyApi, spotifyApi } from '../credential';

export async function POST(request: Request) {
  const { id } = await request.json();

  try {
    await initializeSpotifyApi();
    const res = await spotifyApi.getPlaylist(id, {
      fields: 'type,name,description,followers,images'
    });
    console.log('A Spotify playlist is fetched');
    console.log(res.body);

    // extract { type, title, description, like, image }
    const type: string = res.body.type;
    const title: string = res.body.name;
    const description: string | null = res.body.description;
    const like: number = res.body.followers.total;
    // playlist response only have 1 image
    const image: string = res.body.images[0].url;

    return NextResponse.json({
      type,
      title,
      description,
      like,
      image
    });
  } catch (error) {
    return new NextResponse('Internal Error', {
      status: 500
    });
  }
}
