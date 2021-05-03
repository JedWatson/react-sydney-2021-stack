import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="my-4 pb-4 border-b border-grey-100">
        <Link href="/">
          <a className="text-blue-500 hover:underline">&larr; back home</a>
        </Link>
      </div>
      <h1 className="text-3xl mt-4 mb-4">The 2021 Stack</h1>
      <p>About the talk...</p>
    </div>
  );
}
