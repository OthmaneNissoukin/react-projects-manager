import { useState } from "react";
import { addTask, moveTask } from "../features/projects";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import TaskUpdateModal from "./TaskUpdateModal";
import KanbanTask from "./KanbanTask";
import { idGenerator } from "../utils/idGenerator";

function KanbanCol({ list }) {
  const [requestNewTask, setRequestNewTask] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [requestUpdate, setRequestUpdate] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  function handleCreateTask(e) {
    e.preventDefault();
    if (!newTask.trim()) return;

    const taskID = idGenerator("T", 6);
    dispatch(addTask({ id, listID: list.id, task: { id: taskID, desc: newTask.trim() } }));

    setRequestNewTask(false);
    setNewTask("");
  }

  function handleDrop(e) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text"));

    const movingTask = {
      projectID: id,
      newList: list.id,
      task: data,
    };

    if (list.tasks.find((item) => item.id === data.id)) return;

    dispatch(moveTask(movingTask));
  }

  return (
    <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} className="w-64 bg-stone-300 px-2 pb-3 shrink-0 ">
      <h2 className="uppercase font-semibold text-center py-2">{list.label}</h2>
      <div className="space-y-2.5">
        {list.tasks.map((item, index) => (
          <KanbanTask key={index} id={id} list={list} setRequestUpdate={setRequestUpdate} item={item} />
        ))}

        {requestNewTask ? (
          <form onSubmit={handleCreateTask} className="space-y-2.5">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="px-2.5 py-2 w-full rounded-md"
              placeholder="New task"
            />
            <div className="space-y-2.5">
              <button className="text-center px-2 py-2 w-full font-semibold uppercase bg-emerald-500 text-emerald-50">
                Save
              </button>
              <button
                type="button"
                onClick={() => setRequestNewTask(false)}
                className="text-center px-2 py-2 w-full font-semibold uppercase bg-red-500 text-red-50"
              >
                CANCEL
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setRequestNewTask(true)}
            className="px-2 py-1.5 text-center w-full bg-purple-400 rounded-md font-semibold text-purple-100"
          >
            + New Item
          </button>
        )}
      </div>

      {requestUpdate && <TaskUpdateModal taskToBeUpdated={requestUpdate} setRequestUpdate={setRequestUpdate} />}
    </div>
  );
}

export default KanbanCol;
