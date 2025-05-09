"use client";

import { createTask, updateTask } from "@/lib/tasks";
import { Task } from "@/types/task";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

interface TaskFormProps {
  initialData?: Task;
}

export const TaskForm = ({ initialData }: TaskFormProps) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (initialData) {
        await updateTask(initialData.id, { title, description });
        toast.success("Tâche mise à jour avec succès !");
      } else {
        await createTask({ title, description });
        toast.success("Tâche créée avec succès !");
      }

      router.push("/tasks");
      router.refresh();
    } catch (error) {
      console.error("Erreur complète:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-black">
          Titre
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-black">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
          rows={3}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {loading ? "Enregistrement..." : initialData ? "Mettre à jour" : "Créer une tâche"}
      </button>
    </form>
  );
};
