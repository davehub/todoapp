"use client";
import { TaskForm } from "@/components/TaskForm";
import { fetchTasks } from "@/lib/tasks"; // Supposons une fonction qui récupère les tâches
import { useEffect, useState } from "react";

export default function EditTaskPage({ params }: { params: { id: string } }) {
  interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
  }

  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTask = async () => {
      try {
        const tasks: Task[] = await fetchTasks(); // On récupère les tâches
        const foundTask = tasks.find((t) => t.id === params.id); // Comparaison sans conversion inutile
        setTask(foundTask || null);
      } catch (error) {
        console.error("Erreur lors de la récupération des tâches :", error);
      } finally {
        setLoading(false);
      }
    };

    loadTask();
  }, [params.id]);

  if (loading) {
    return <p className="text-gray-600 text-center text-lg">Chargement...</p>;
  }

  if (!task) {
    return (
      <div className="text-center mt-8 text-gray-500 text-lg">
        ❌ Tâche introuvable. <br />
        <a href="/tasks" className="text-purple-600 hover:underline">
          Retour à la liste des tâches
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          ✏️ Modifier la tâche
        </h1>
        <TaskForm initialData={task} />
      </div>
    </div>
  );
}