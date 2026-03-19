import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { promises as fs } from 'fs';
import path from 'path';

export const revalidate = false;

const readFont = (fileName: string) => {
  const fontPath = path.join(process.cwd(), 'public', 'fonts', fileName);
  return fs.readFile(fontPath);
};

const interRegular = readFont('InstrumentSans-Regular.ttf');
const interBold = readFont('InstrumentSans-Bold.ttf');

const readImage = (fileName: string) => {
  const imgPath = path.join(process.cwd(), 'public', fileName);
  return fs.readFile(imgPath);
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();
  const [interRegularData, interBoldData, duckData] = await Promise.all([
    interRegular,
    interBold,
    readImage('logo-duck.svg'),
  ]);
  const duckSrc = `data:image/svg+xml;base64,${duckData.toString('base64')}`;


  if (!page) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#0f0f14',
          padding: '60px',
          color: 'white',
          fontFamily: '"Instrument Sans"',
        }}
      >
        <img
          src={duckSrc}
          style={{
            position: 'absolute',
            top: '30px',
            right: '40px',
            height: '120px',
          }}
        />
        <div
          style={{
            marginTop: '24px',
            fontSize: '40px',
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: '80%',
          }}
        >
          {page.data.description ? page.data.title : ""}
        </div>
        <div
          style={{
            fontSize: '60px',
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          {page.data.description ? page.data.description : page.data.title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 300,
      fonts: [
        {
          name: 'Instrument Sans',
          data: interRegularData,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Instrument Sans',
          data: interBoldData,
          weight: 700,
          style: 'normal',
        },
      ],
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: getPageImage(page).segments,
  }));
}
