import { Task } from "@/types/task";
export type Tasks = {

    id: string;
  
    title: string;
  
    completed: boolean;
  
  };
  export async function fetchTasks() {
    const res = await fetch("/api/tasks", { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Erreur de récupération des tâches");
    }
    return res.json();
  }

let tasks: Task[] = [];

export const getTasks = async (): Promise<Task[]> => {
  return tasks;
};

export const createTask = async (task: Omit<Task, 'id' | 'createdAt' | 'completed'>): Promise<Task> => {
  const newTask: Task = {
    id: Math.random().toString(36).substring(2, 9),
    title: task.title,
    description: task.description,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  return newTask;
};

export const updateTask = async (id: string, updates: Partial<Task>): Promise<Task | null> => {
  const taskIndex = tasks.findIndex(t => t.id === id);
  if (taskIndex === -1) return null;
  
  tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
  return tasks[taskIndex];
};

export const deleteTask = async (id: string): Promise<boolean> => {
  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== id);
  return tasks.length !== initialLength;
};

export const getTaskById = async (id: string): Promise<Task | null> => {
  return tasks.find(t => t.id === id) || null;
};