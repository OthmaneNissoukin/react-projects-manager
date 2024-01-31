function MemberRow({ member }) {
  return (
    <tr className="font-semibold text-stone-700 border-b-2 border-stone-300">
      <td className="py-4">{member.id}</td>
      <td className="py-4 uppercase">{member.fullName}</td>
      <td className="py-4">{member.emailAdress}</td>
      <td className="py-4">On {member.enrolled}</td>
      <td className="py-4 space-x-2">
        <button className="bg-blue-400 text-blue-50 p-2">{member.admin ? "Drop Admin" : "Make Admin"}</button>{" "}
        <button className="bg-red-400 text-red-50 p-2">Leave X</button>
      </td>
    </tr>
  );
}

export default MemberRow;
