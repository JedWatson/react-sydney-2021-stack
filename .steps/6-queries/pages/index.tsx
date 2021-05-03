import Link from 'next/link';

import { lists } from '.keystone/api';

export default function Home({ talks }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mt-4 mb-4">
        Hi There React Sydney 👋🏻
        <span className="text-lg ml-4 bg-green-100 border border-green-200 text-green-700 px-2 py-1 rounded cursor-default">
          approved
        </span>
      </h1>
      <h2 className="text-2xl mt-4 mb-4">Talks:</h2>
      <ul className="text-lg list-disc list-inside">
        {talks.map(talk => (
          <li key={talk.id}>
            <Link href={`/talk/${talk.slug}`}>
              <a className="text-blue-500 hover:underline">{talk.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const talks = await lists.Talk.findMany({ query: 'id title slug' });
  return { props: { talks } };
}
