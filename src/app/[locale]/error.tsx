'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
      <h2 className="text-2xl font-bold mb-4">حدث خطأ غير متوقع</h2>
      <p className="text-gray-600 mb-6 max-w-md text-center">
        {error.message || 'نعتذر، واجهنا مشكلة أثناء تحميل هذه الصفحة.'}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        حاول مرة أخرى
      </button>
    </div>
  );
}
