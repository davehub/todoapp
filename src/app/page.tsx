import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Conteneur principal */}
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* En-tête */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center">
            📝 Bienvenue sur <span className="text-purple-600 ml-2">Todo App</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600 mb-4">
            Gérez vos tâches facilement et efficacement.
          </p>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/tasks"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-md"
          >
            📋 Voir toutes les tâches
          </Link>
        </div>
      </div>
    </div>
  );
}