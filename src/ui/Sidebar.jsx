import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const [showSideBar, hideSideBar] = useState(true);
  const projects = useSelector((store) => store.projectSlice.projects);
  const activeUser = useSelector((store) => store.userSlice.activeUser);
  const navigate = useNavigate();

  const userProjects = projects.filter((project) => project.members.find((member) => member.id === activeUser?.id));

  useEffect(() => {
    if (!activeUser) navigate("/login", { replace: true });
  });

  if (!activeUser) return;

  return (
    <section className="bg-yellow-400 w-60 px-5 py-2 shrink-0 sidebar">
      <div className="flex justify-between mb-3 border-b pb-3 border-stone-800 items-center">
        <h1 className=" font-bold">WORKSPACE</h1>
        <button>❌</button>
      </div>
      <div>
        <ul className="space-y-2.5 font-semibold">
          {activeUser.admin && (
            <>
              <li>
                <Link to="/new-project">Create Project</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/members">Members</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex justify-between my-3 border-b pb-3 border-stone-800 items-center">
        <h1 className="font-bold">BOARDS</h1>
      </div>
      <div>
        <ul className="space-y-2">
          {userProjects.map((item) => (
            <li key={item.id} className="font-semibold">
              <Link to={`/projects/${item.id}/board`}>{item.name}</Link>
            </li>
          ))}
          {!userProjects.length && <li className="italic">No project is affected</li>}
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
