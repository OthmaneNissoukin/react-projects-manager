import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../features/projects";

function TaskUpdateModal({ taskToBeUpdated, setRequestUpdate }) {
  const [title, setTitle] = useState(taskToBeUpdated.task.desc || "");
  const [label, setLabel] = useState(taskToBeUpdated.task.label || "");
  const [color, setColor] = useState(taskToBeUpdated.task.color || "");

  const [cover, setCover] = useState("");
  console.log(cover);

  const dispatch = useDispatch();

  function handleUpdate() {
    if (!title.trim()) return;

    const task = { ...taskToBeUpdated, task: { ...taskToBeUpdated.task, desc: title, label, color, cover } };

    dispatch(updateTask(task));

    setRequestUpdate(null);
  }

  return (
    <section className="modal">
      <div className="bg-stone-100 px-5 py-10 mx-10">
        <h1 className="text-center font-semibold text-2xl">Update Task</h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5 font-semibold">
          <div>
            <label className="uppercase">Title</label>
            <br />
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              // defaultValue={taskToBeUpdated.task.desc}
              value={title}
              className="px-2.5 py-2 w-full border-2 border-stone-300 rounded-md"
            />
          </div>
          <div>
            <label className="uppercase">label</label>
            <br />
            <div className="flex gap-2.5">
              <input
                type="color"
                onChange={(e) => setColor(e.target.value)}
                // defaultValue={taskToBeUpdated.task.color || ""}
                value={color}
                className="h-12"
              />
              <input
                type="text"
                onChange={(e) => setLabel(e.target.value)}
                // defaultValue={taskToBeUpdated.task.label || ""}
                value={label}
                className="px-2.5 py-2 w-full border-2 border-stone-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label className="uppercase">Cover</label>
            <br />
            <input
              type="file"
              value={cover}
              onChange={(e) => setCover(e.target.value)}
              className="px-2.5 py-2 w-fullrounded-md"
            />
          </div>
          <div className="space-x-2.5">
            <button
              onClick={handleUpdate}
              className="px-3 py-2.5 bg-emerald-700 text-emerald-50 font-semibold uppercase disabled:bg-stone-400 disabled:cursor-not-allowed"
              disabled={!title}
            >
              Save Changes
            </button>
            <button
              onClick={() => setRequestUpdate(null)}
              className="px-3 py-2.5 bg-red-700 text-red-50 font-semibold uppercase"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TaskUpdateModal;
