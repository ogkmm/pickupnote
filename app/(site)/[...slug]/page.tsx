import { allPages } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/MdxComponents';

interface ContentPageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<
  ContentPageProps['params'][]
> {
  return allPages.map((page) => ({ slug: page.urlAsParmas.split('/') }));
}

async function getPageFromParams(params: { slug: string[] }) {
  const slug = params.slug.join('/');
  const p = allPages.find((page) => page.urlAsParmas === slug);

  if (!p) return null;

  return p;
}

export default async function ContentPage({ params }: ContentPageProps) {
  const page = await getPageFromParams(params);

  if (!page) notFound();

  return (
    <>
      <article className="w-full px-8 max-w-4xl py-6 lg:py-12">
        <Mdx code={page.body.code} />
      </article>
    </>
  );
}
