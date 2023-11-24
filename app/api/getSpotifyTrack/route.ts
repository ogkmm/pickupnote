import { NextResponse } from 'next/server';
import { spotifyApi, initializeSpotifyApi } from '../credential';

export async function POST(request: Request) {
  const { id } = await request.json();

  try {
    await initializeSpotifyApi();
    let res: any;
    await spotifyApi.getTrack(id).then((data: any) => (res = data.body));
    console.log('fetched');

    if (!res) {
      throw Error('res not exists');
    }
    // extract data: { type, title, authors, releaseYear, image }
    const type: string = res.type;
    const title: string = res.name;
    const authors: string[] = res.artists.map((a: any) => `${a.name}`);
    const releaseYear: string = res.album.release_date.split('-')[0];
    // use 300 x 300 image
    const image: string = res.album.images[1].url;

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
