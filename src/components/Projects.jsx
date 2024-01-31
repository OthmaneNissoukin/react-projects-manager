import { useSelector } from "react-redux";
import ProjectRow from "./ProjectRow";

function Projects() {
  const projects = useSelector((store) => store.projectSlice.projects);
  console.log(projects);
  return (
    <section className="">
      <h1 className="text-xl font-semibold mb-2.5">PROJECTS</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center">
          <thead className="border-b border-slate-500">
            <tr>
              <th className="px-6 py-3 text-stone-800 uppercase">ID</th>
              <th className="px-6 py-3 text-stone-800 uppercase">Title</th>
              <th className="px-6 py-3 text-stone-800 uppercase">Client</th>
              <th className="px-6 py-3 text-stone-800 uppercase">Requested At</th>
              <th className="px-6 py-3 text-stone-800 uppercase">Due To</th>
              <th className="px-6 py-3 text-stone-800 uppercase">Priority</th>
              <th className="px-6 py-3 text-stone-800 uppercase">Status</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((item, index) => (
              <ProjectRow project={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Projects;
