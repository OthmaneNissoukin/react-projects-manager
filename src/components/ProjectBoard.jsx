import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import KanbanCol from "./KanbanCol";
import { addList } from "../features/projects";
import { idGenerator } from "../utils/idGenerator";

function ProjectBoard() {
  const { id } = useParams();
  const projects = useSelector((store) => store.projectSlice.projects);
  const project = projects.find((item) => item.id.toLowerCase() == id.toLowerCase());

  const [createList, setCreateList] = useState(false);
  const [newList, setNewList] = useState("");
  const dispatch = useDispatch();

  function handleCreateList(e) {
    e.preventDefault();

    if (!newList.trim()) return;

    const listID = idGenerator("L", 6);
    dispatch(addList({ projectID: id, list: { id: listID, label: newList, tasks: [] } }));
    setNewList("");
    setCreateList(false);
  }

  if (!project) return <h1>Project doesnt exists</h1>;

  return (
    <section>
      <h1 className="text-xl font-semibold mb-2.5">{project.name}</h1>
      <div className="flex gap-5 overflow-auto min-h-64 no-scrollbar">
        {/*! INSERT KANBAN COLUMN HERE */}

        {project.lists.map((item) => (
          <KanbanCol list={item} key={item.id} />
        ))}

        {!createList ? (
          <button
            onClick={() => setCreateList(true)}
            className="w-64 py-2.5 bg-purple-400 font-semibold text-purple-50 uppercase rounded-sm shrink-0 grow-0 self-start"
          >
            + Add new list
          </button>
        ) : (
          <form onSubmit={handleCreateList} className="space-y-2.5">
            <input
              value={newList}
              onChange={(e) => setNewList(e.target.value)}
              className="px-2.5 py-2 w-64 rounded-md"
              placeholder="list title"
            />
            <button className="text-center px-2 py-2 w-full font-semibold uppercase bg-emerald-500 text-emerald-50">
              Save
            </button>
            <button
              type="button"
              onClick={() => setCreateList(false)}
              className="text-center px-2 py-2 w-full font-semibold uppercase bg-red-500 text-red-50"
            >
              CANCEL
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ProjectBoard;
