"use client";

import { useEffect, useState } from "react";
import { fetchTasks } from "@/lib/tasks";
import Link from "next/link";

export default function TasksPage() {
  interface Task {
    id: string;
    title: string;
    description: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error("Erreur de chargement des tâches :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          📋 Liste des tâches
        </h1>
        <Link href="/create-task">
          <button className="mb-6 bg-indigo-600 text-white px-6 py-3 rounded-md text-lg shadow-md hover:bg-indigo-800 transition">
            ➕ Ajouter une tâche
          </button>
        </Link>

        {loading ? (
          <p className="text-gray-600 text-center text-lg">Chargement des tâches...</p>
        ) : tasks.length > 0 ? (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-indigo-700">{task.title}</h2>
                <p className="text-gray-600">{task.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center text-lg">📭 Aucune tâche disponible.</p>
        )}
      </div>
    </div>
  );
}