import { Link, useLocation } from "react-router";

function NotFoundPage() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-8xl font-bold text-green-800 dark:text-green-500">404</h1>

      <h2 className="text-3xl font-bold mt-4">This page wandered off</h2>

      <p className="text-gray-500 dark:text-gray-400 mt-2">
        We couldn't find <span className="font-bold">{location.pathname}</span>.
      </p>

      <Link
        to="/"
        className="mt-6 bg-green-800 text-white font-bold px-5 py-2 rounded hover:bg-green-900"
      >
        Back to the shop
      </Link>
    </div>
  );
}

export default NotFoundPage;
