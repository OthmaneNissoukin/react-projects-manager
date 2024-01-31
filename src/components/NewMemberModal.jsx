import { useState } from "react";

function NewMemberModal({ setCreateNew }) {
  const [emailAddress, setEmailAddress] = useState("");

  return (
    <div className="absolute modal">
      <form onSubmit={(e) => e.preventDefault()} className="bg-stone-50 py-5 px-10 font-semibold m-auto w-96">
        <h2 className="mb-5 uppercase text-center">Add New Member</h2>
        <div className="mb-4 space-y-2">
          <label htmlFor="">E-mail Address</label> <br />
          <input
            type="text"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="mailaddress@e-mail.com"
            className="py-2 px-2.5 outline-none border border-stone-300 w-full rounded-md bg-stone-200"
          />
        </div>
        <div className="space-y-2">
          <button className="bg-emerald-600 text-emerald-50 text-center py-2 w-full">Send Invitation</button>
          <button onClick={() => setCreateNew(false)} className="bg-red-500 text-red-50 text-center py-2 w-full">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewMemberModal;
