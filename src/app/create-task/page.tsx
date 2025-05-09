import { TaskForm } from "@/components/TaskForm";

export default function CreateTaskPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          📝 Créer une tâche
        </h1>
        <p className="mt-2 text-lg text-gray-600 mb-6 text-center">
          Ajoutez une nouvelle tâche à votre liste et restez organisé !
        </p>
        
        {/* Formulaire de création de tâche */}
        <TaskForm />

        {/* Retour à la liste des tâches */}
        <div className="mt-6 text-center">
          <a
            href="/tasks"
            className="text-purple-600 hover:underline text-lg font-medium"
          >
            🔙 Retour à la liste des tâches
          </a>
        </div>
      </div>
    </div>
  );
}