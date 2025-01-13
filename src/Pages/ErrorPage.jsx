import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); // Menampilkan error di console untuk debugging

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="text-xl text-gray-700">Sorry, an unexpected error has occurred.</p>
        {error && (
          <div className="mt-4">
            <p className="text-gray-500">
              <strong>Error:</strong> {error.statusText || error.message}
            </p>
            <pre>{error.stack}</pre> {/* Tambahkan detail stack trace jika tersedia */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
