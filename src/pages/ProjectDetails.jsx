import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { updateProject } from "../features/projects";

function ProjectDetails() {
  const [enableChanges, setEnableChanges] = useState(false);
  const { id } = useParams();
  const Allprojects = useSelector((store) => store.projectSlice.projects);
  const dispatch = useDispatch();
  const project = Allprojects.find((item) => item.id.toLowerCase() === id.toLowerCase()) || {};

  const [projectName, setProjectName] = useState(project?.name || "");
  const [clientName, setClientName] = useState(project?.clientName || "");
  const [company, setCompany] = useState(project?.company || "");
  const [dueDate, setDueDate] = useState(project?.dueDate.split("-").reverse().join("-") || "");
  const [status, setStatus] = useState(project?.status || "");
  const [priority, setPriority] = useState(project?.priority || "");
  const [budget, setBudget] = useState(project?.budget || "");
  const [description, setDescription] = useState(project?.description || "");

  function handleUpdate() {
    if (
      !(
        projectName.trim() &&
        clientName.trim() &&
        company.trim() &&
        dueDate.trim() &&
        status.trim() &&
        priority.trim() &&
        budget.trim() &&
        description.trim()
      )
    )
      return;
    const projectInfo = {
      id,
      name: projectName,
      clientName,
      company,
      dueDate: dueDate.split("-").reverse().join("-"),
      status,
      priority,
      budget,
      description,
    };

    dispatch(updateProject(projectInfo));

    setEnableChanges(false);
  }

  if (!project.id) return <h1 className="py-5 font-semibold text-2xl">Project not found!</h1>;

  return (
    <section>
      <h1 className="font-semibold text-xl mb-4"> Project Details: E-Presentation</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-2 md:grid-cols-2 md:gap-x-10 md:gap-y-5">
          <div>
            <label className="mb-1 font-semibold uppercase inline-block">Project Name</label>
            <input
              className="py-2 px-2.5 disabled:cursor-not-allowed disabled:bg-stone-300 rounded-sm w-full"
              disabled={!enableChanges}
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 font-semibold uppercase inline-block">Client Name</label>
            <input
              className="py-2 px-2.5 disabled:cursor-not-allowed disabled:bg-stone-300 rounded-sm w-full"
              disabled={!enableChanges}
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 font-semibold uppercase inline-block">Company Name</label>
            <input
              className="py-2 px-2.5 disabled:cursor-not-allowed disabled:bg-stone-300 rounded-sm w-full"
              disabled={!enableChanges}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 font-semibold uppercase inline-block">Due Date</label>
            <input
              type="date"
              className="py-2 px-2.5 disabled:cursor-not-allowed disabled:bg-stone-300 rounded-sm w-full"
              disabled={!enableChanges}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 font-semibold uppercase inline-block">Status</label>
            <select
              className="py-2 px-2.5 disabled:cursor-not-allowed disabled:bg-stone-300 rounded-sm w-full"
              disabled={!enableChanges}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="TODO">TODO</option>
              <option value="IN PROGRESS">IN PROGRESS</option>
              <option value="PENDING">PENDING</option>
              <option value="REVIEWING">REVIEWING</option>
              <option value="DONE">DONE</option>
            </select>
          </div>
          <div>
            <label className="mb-1 font-semibold uppercase inline-block">Priority</label>
            <select
              className="py-2 px-2.5 disabled:cursor-not-allowed disabled:bg-stone-300 rounded-sm w-full"
              disabled={!enableChanges}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="LOW">LOW</option>
              <option value="MIDDLE">MIDDLE</option>
              <option value="IMPORTANT">IMPORTANT</option>
              <option value="URGENT">URGENT</option>
            </select>
          </div>
          <div>
            <label className="mb-1 font-semibold uppercase inline-block">Budget</label>
            <input
              className="py-2 px-2.5 disabled:cursor-not-allowed disabled:bg-stone-300 rounded-sm w-full"
              disabled={!enableChanges}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-1 font-semibold uppercase inline-block">Project Description</label>
            <textarea
              className="py-2 px-2.5 disabled:cursor-not-allowed disabled:bg-stone-300 rounded-sm w-full"
              disabled={!enableChanges}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="text-right mt-5 space-x-5">
          {!enableChanges && (
            <button onClick={() => setEnableChanges(true)} className="py-2 px-5 bg-blue-600 text-blue-50 font-semibold">
              Enable Updates
            </button>
          )}
          {enableChanges && (
            <button onClick={handleUpdate} className="py-2 px-5 bg-violet-600 text-violet-50 font-semibold">
              SAVE CHANGES
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default ProjectDetails;
