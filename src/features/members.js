const initialMembers = {
  members: [
    {
      id: "M-75168",
      fullName: "Jane Doe",
      emailAdress: "janedoe@e-mail.com",
      enrolled: "1 Boards", // This will be dynamic later
      admin: true,
    },
    {
      id: "M-25729",
      fullName: "John Doe",
      emailAdress: "johndoe@e-mail.com",
      enrolled: "2 Boards", // This will be dynamic later
      admin: false,
    },
  ],
};

function membersReducer(state = initialMembers, action) {
  switch (action.type) {
    case "MEMBER/ADD_MEMBER":
      return { ...state, members: [...state.members, action.payload] };

    default:
      return state;
  }
}

function addMember(memberObj) {
  return { type: "MEMBER/ADD_MEMBER", payload: memberObj };
}

export { membersReducer, addMember };
