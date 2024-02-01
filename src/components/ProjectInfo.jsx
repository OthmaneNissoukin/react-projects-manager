import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "./../utils/dateHelper";
import { addProject } from "../features/projects";
import { useNavigate } from "react-router";
import { idGenerator } from "../utils/idGenerator";

function ProjectInfo() {
  const [projectName, setProjectName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [budget, setBudget] = useState("");
  const [projectDesc, setProjectDescription] = useState("");
  const [company, setCompany] = useState("");
  const [clientName, setClientName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const activeUser = useSelector((store) => store.userSlice.activeUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCreateProject(e) {
    e.preventDefault();
    if (
      !(
        projectName.trim() &&
        dueDate.trim() &&
        budget.trim() &&
        projectDesc.trim() &&
        company.trim() &&
        clientName.trim() &&
        address.trim() &&
        phone.trim() &&
        email.trim()
      )
    )
      return;

    const projectID = idGenerator("P", 6);

    const newProject = {
      id: projectID,
      name: projectName,
      clientName,
      company,
      dueDate: dueDate.split("-").reverse().join("-"),
      requestedAt: formatDate(),
      description: projectDesc,
      notes: notes,
      priority: null,
      lists: [],
      members: [activeUser],
      status: "NOT STARTED",
    };

    dispatch(addProject(newProject));
    navigate(`/projects/${projectID}/board`);
  }

  return (
    <form onSubmit={handleCreateProject}>
      <h1 className="font-semibold uppercase text-xl mb-2">PROJECT INFOS</h1>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="mb-2 inline-block font-semibold">
            Project Name<span className="text-red-600">*</span>
          </label>
          <input value={projectName} onChange={(e) => setProjectName(e.target.value)} className="py-1 px-2.5 w-full" />
        </div>
        <div>
          <label className="mb-2 inline-block font-semibold">
            Due Date<span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="py-1 px-2.5 w-full"
          />
        </div>
        <div>
          <label className="mb-2 inline-block font-semibold">
            Budget<span className="text-red-600">*</span>
          </label>
          <input value={budget} onChange={(e) => setBudget(e.target.value)} className="py-1 px-2.5 w-full" />
        </div>
        <div>
          <label className="mb-2 inline-block font-semibold">
            Project Description<span className="text-red-600">*</span>
          </label>
          <textarea
            value={projectDesc}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="py-1 px-2.5 w-full"
          />
        </div>
      </div>

      <h1 className="font-semibold uppercase text-xl mb-2">Client Infos</h1>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="mb-2 inline-block font-semibold">
            Company<span className="text-red-600">*</span>
          </label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} className="py-1 px-2.5 w-full" />
        </div>
        <div>
          <label className="mb-2 inline-block font-semibold">
            Client Name<span className="text-red-600">*</span>
          </label>
          <input value={clientName} onChange={(e) => setClientName(e.target.value)} className="py-1 px-2.5 w-full" />
        </div>
        <div>
          <label className="mb-2 inline-block font-semibold">
            Address<span className="text-red-600">*</span>
          </label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} className="py-1 px-2.5 w-full" />
        </div>
        <div>
          <label className="mb-2 inline-block font-semibold">
            Number Phone<span className="text-red-600">*</span>
          </label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="py-1 px-2.5 w-full" />
        </div>
        <div>
          <label className="mb-2 inline-block font-semibold">
            E-mail<span className="text-red-600">*</span>
          </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="mail" className="py-1 px-2.5 w-full" />
        </div>
        <div>
          <label className="mb-2 inline-block font-semibold">Additional Notes</label>
          <br />
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="py-1 px-2.5 w-full" />
        </div>
      </div>
      <button className="py-2 px-5 bg-violet-600 text-violet-50 font-semibold">SAVE</button>
    </form>
  );
}

export default ProjectInfo;
