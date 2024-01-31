import { useState } from "react";
import { useSelector } from "react-redux";
import MemberRow from "../components/MemberRow";
import NewMemberModal from "../components/NewMemberModal";

function Members() {
  const members = useSelector((store) => store.memberSlice.members);
  const [createNew, setCreateNew] = useState(false);

  return (
    <section>
      <div className="flex justify-between flex-wrap font-semibold uppercase mb-5">
        <h1 className="text-xl">ALL MEMBERS</h1>
        <button onClick={() => setCreateNew(true)} className="px-3 py-2 bg-emerald-600 text-emerald-50">
          Create New
        </button>
      </div>
      <div className="overflow-auto">
        <table className="table-auto w-full text-left">
          <thead className="text-stone-800">
            <tr className="border-b-4 border-yellow-200">
              <th className="pb-2">ID</th>
              <th className="pb-2">Full Name</th>
              <th className="pb-2">E-mail</th>
              <th className="pb-2">Enrolled</th>
              <th className="pb-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {members.map((item) => (
              <MemberRow key={item.id} member={item} />
            ))}
          </tbody>
        </table>
      </div>

      {createNew && <NewMemberModal setCreateNew={setCreateNew} />}
    </section>
  );
}

export default Members;
