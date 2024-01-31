import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomepageRow({ project }) {
  const activeUser = useSelector((store) => store.userSlice.activeUser);

  return (
    <tr className="border-b-2 border-stone-300 ">
      <td className="px-6 py-3 text-stone-800 font-semibold ">{project.id}</td>
      <td className="px-6 py-3 text-stone-700 font-semibold cursor-pointer">
        {activeUser.admin ? (
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
        ) : (
          <Link to={`/projects/${project.id}/board`}>{project.name}</Link>
        )}
      </td>
      <td className="px-6 py-3 text-stone-700 font-semibold ">{project.dueDate}</td>
      <td className="px-6 py-3 text-stone-700 font-semibold uppercase">
        <span className="inline-block bg-red-400 px-2.5 py-1.5 rounded-full">{project.priority}</span>
      </td>
      <td className="px-6 py-3 text-stone-700 font-semibold ">
        <Link className="bg-green-400 px-2.5 py-1.5 bg-opacity-50 rounded-full" to={`/projects/${project.id}/board`}>
          {project.status}
        </Link>
      </td>
    </tr>
  );
}

export default HomepageRow;
