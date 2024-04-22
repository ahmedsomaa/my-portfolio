import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
  const font = fetch(
    new URL(
      '../../../public/fonts/FamiljenGrotesk-SemiBold.otf',
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://som3aware.vercel.app/og-bg.png)',
        }}
      >
        <div
          style={{
            fontSize: 60,
            lineHeight: 1,
            color: 'white',
            display: 'flex',
            marginLeft: 100,
            marginRight: 100,
            fontStyle: 'normal',
            whiteSpace: 'pre-wrap',
            fontFamily: 'Familjen Grotesk SemiBold',
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Familjen Grotesk SemiBold',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
