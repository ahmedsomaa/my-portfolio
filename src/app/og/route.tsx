import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');
  const font = fetch(
    new URL('../../../public/fonts/Inter-SemiBold.otf', import.meta.url),
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
          backgroundImage: 'url(/og-bg.png)',
        }}
      >
        <div
          style={{
            marginLeft: 100,
            marginRight: 100,
            display: 'flex',
            fontSize: 70,
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '70px',
            whiteSpace: 'pre-wrap',
            fontFamily: 'Inter SemiBold',
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
          name: 'Inter SemiBold',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
