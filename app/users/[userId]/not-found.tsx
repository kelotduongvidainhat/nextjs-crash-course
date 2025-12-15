import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
            <div className="text-center space-y-6 max-w-md">
                <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-600">
                    404
                </h1>
                <h2 className="text-3xl font-bold tracking-tight">Page Not Found</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                </p>
            </div>
        </div>
    );
}

// So it priority not-found.tsx (loading.tsx, error.tsx, ... ) in nearest folder