export default function DeleteTaskPage({ params }: { params: { id: string } }) {
  const tasks = [
    { id: "1", title: "Task 1" },
    { id: "2", title: "Task 2" },
    { id: "3", title: "Task 3" },
  ];
  const taskId = Number(params.id);
  const task = tasks.find((task) => task.id === taskId.toString());

  if (!task) {
    return <div>Tâche non trouvée</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Supprimer la tâche</h1>
      <p>Êtes-vous sûr de vouloir supprimer cette tâche ?</p>
      <p>{task.title}</p>
      {/* Add your delete confirmation logic here */}
        <button
            onClick={() => {
            // Logic to delete the task
            console.log(`Tâche ${task.id} supprimée`);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
        >
            Supprimer
        </button>
    </div>
  );
}