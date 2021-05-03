import Link from 'next/link';

import { lists } from '.keystone/api';

export default function Home({ talk }) {
  return (
    <div className="container mx-auto p-4">
      <div className="my-4 pb-4 border-b border-grey-100">
        <Link href="/">
          <a className="text-blue-500 hover:underline">&larr; back home</a>
        </Link>
      </div>
      <h1 className="text-3xl mt-4 mb-4">{talk.title}</h1>
      <p>{talk.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await lists.Talk.findMany({
    query: `slug`,
  });

  const paths = posts
    .map(post => post.slug)
    .filter((slug): slug is string => !!slug)
    .map(slug => `/talk/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const [talk] = await lists.Talk.findMany({
    where: { slug },
    query: 'id title description',
  });
  return { props: { talk } };
}
