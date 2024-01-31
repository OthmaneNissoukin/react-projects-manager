import { useSelector } from "react-redux";
import HomepageRow from "../components/HomepageRow";

function Homepage() {
  const projects = useSelector((store) => store.projectSlice.projects);

  const activeUser = useSelector((store) => store.userSlice.activeUser);

  const userProjects = projects.filter((project) => project.members.find((member) => member.id === activeUser?.id));

  return (
    <section className="">
      <h1 className="text-xl font-semibold mb-2.5">PROJECTS</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center">
          <thead className="border-b border-slate-500">
            <tr>
              <th className="px-6 py-3 text-stone-800 uppercase">ID</th>
              <th className="px-6 py-3 text-stone-800 uppercase">Title</th>
              <th className="px-6 py-3 text-stone-800 uppercase">Due To</th>
              <th className="px-6 py-3 text-stone-800 uppercase">Priority</th>
              <th className="px-6 py-3 text-stone-800 uppercase">Status</th>
            </tr>
          </thead>

          <tbody>
            {userProjects.map((item, index) => (
              <HomepageRow project={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Homepage;
