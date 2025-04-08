import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-neutral-800 px-4">
      <h2 className="text-3xl font-semibold mb-4 text-rose-500">404 - Not Found</h2>
      <p className="text-lg mb-6 text-center">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}