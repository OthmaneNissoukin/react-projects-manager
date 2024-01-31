import { Link } from "react-router-dom";

function ProjectRow({ project }) {
  return (
    <tr className="border-b-2 border-stone-300 ">
      <td className="px-6 py-3 text-stone-800 font-semibold ">{project.id}</td>
      <td className="px-6 py-3 text-stone-700 font-semibold cursor-pointer">
        <Link to={`/projects/${project.id}`}>{project.name}</Link>
      </td>
      <td className="px-6 py-3 text-stone-700 font-semibold ">{project.clientName}</td>
      <td className="px-6 py-3 text-stone-700 font-semibold ">{project.requestedAt}</td>
      <td className="px-6 py-3 text-stone-700 font-semibold ">{project.dueDate}</td>
      <td className="px-6 py-3 text-stone-700 font-semibold uppercase">{project.priority}</td>
      <td className="px-6 py-3 text-stone-700 font-semibold ">
        <Link to={`/projects/${project.id}/board`}>{project.status}</Link>
      </td>
    </tr>
  );
}

export default ProjectRow;
