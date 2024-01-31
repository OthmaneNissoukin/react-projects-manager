const initialProjects = {
  projects: [
    {
      id: "p-92549",
      name: "Workflow Managment App",
      clientName: "John Doe",
      company: "Holding",
      dueDate: "20-05-2024",
      requestedAt: "24-01-2024",
      description: "LOREM IPSUM...........",
      notes: ".......................",
      priority: "URGENT",
      status: "NOT STARTED",
      members: [
        { id: "U-4576", name: "John Doe" },
        { id: "U-8251", name: "Jane Doe" },
      ],
      lists: [
        {
          id: "l-9845614",
          label: "TODO",
          tasks: [
            { id: "t-165465", desc: "Build app layout" },
            { id: "t-785686", desc: "Add chatroom feature" },
          ],
        },
        {
          id: "l-168758",
          label: "IN PROGRESS",
          tasks: [{ id: "t-354896", desc: "Creating file manipulation logic" }],
        },
        {
          id: "l-4348946",
          label: "DONE",
          tasks: [],
        },
      ],
    },
    {
      id: "p-54283",
      name: "E-Presentation",
      clientName: "Etablissment X",
      company: "Etablissment X",
      dueDate: "25-03-2024",
      requestedAt: "24-01-2024",
      description: "LOREM IPSUM...........",
      notes: ".......................",
      priority: "URGENT",
      status: "IN PROGRESS",
      members: [{ id: "U-4576", name: "John Doe" }],
      lists: [
        {
          id: "l-7751287",
          label: "TODO",
          tasks: [
            { id: "t-1383156", desc: "Create Authentification" },
            { id: "t-978653", desc: "Teams Creation" },
          ],
        },
        {
          id: "l-98745612",
          label: "IN PROGRESS",
          tasks: [{ id: "t-531879", desc: "Database Conception" }],
        },
        {
          id: "l-35416983",
          label: "REVIEWING",
          tasks: [{ id: "t-786135", desc: "Evaluation Creation" }],
        },
        {
          id: "l-15605894",
          label: "DONE",
          tasks: [{ id: "t-2468431", desc: "Front End Prototype" }],
        },
        {
          id: "l-1984564",
          label: "PENDING",
          tasks: [{ id: "t-312794", desc: "Import data using spreadsheet" }],
        },
      ],
    },
  ],
};

function projectsReducer(state = initialProjects, action) {
  switch (action.type) {
    case "PROJECT/PROJECT_ADDED":
      return { ...state, projects: [...state.projects, action.payload] };

    case "PROJECT/PROJECT_UPDATED":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id
            ? {
                ...project,
                name: action.payload.name,
                clientName: action.payload.clientName,
                company: action.payload.company,
                dueDate: action.payload.dueDate,
                status: action.payload.status,
                priority: action.payload.priority,
                budget: action.payload.budget,
                description: action.payload.description,
              }
            : project
        ),
      };

    case "PROJECT/TASK_ADDED":
      console.log(action.payload);
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id.toLowerCase() == action.payload.id.toLowerCase()
            ? {
                ...project,
                lists: project.lists.map((list) =>
                  list.id == action.payload.listID ? { ...list, tasks: [...list.tasks, action.payload.task] } : list
                ),
              }
            : project
        ),
      };

    case "PROJECT/LIST_ADDED":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id == action.payload.projectID
            ? { ...project, lists: [...project.lists, action.payload.list] }
            : project
        ),
      };

    case "PROJECT/PROJECT_DELETED":
      return { ...state, projects: state.projects.filter((item) => item.id !== action.payload.id) };

    case "PROJECT/TASK_MOVED":
      console.log(action.payload);
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id == action.payload.projectID
            ? {
                ...project,
                lists: project.lists.map((list) =>
                  list.id == action.payload.newList
                    ? { ...list, tasks: [...list.tasks, action.payload.task] }
                    : { ...list, tasks: list.tasks.filter((oldTask) => oldTask.id != action.payload.task.id) }
                ),
              }
            : project
        ),
      };

    case "PROJECT/TASK_UPDATED":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id == action.payload.projectID
            ? {
                ...project,
                lists: project.lists.map((list) =>
                  list.id == action.payload.listID
                    ? {
                        ...list,
                        tasks: list.tasks.map((task) =>
                          task.id == action.payload.task.id ? action.payload.task : task
                        ),
                      }
                    : list
                ),
              }
            : project
        ),
      };

    default:
      return state;
  }
}

function addProject(projectObj) {
  return { type: "PROJECT/PROJECT_ADDED", payload: projectObj };
}

function updateProject(projectObj) {
  return { type: "PROJECT/PROJECT_UPDATED", payload: projectObj };
}

function deleteProject(projectID) {
  return { typeof: "PROJECT/PROJECT_DELETED", payload: projectID };
}

function addTask(taskObj) {
  return { type: "PROJECT/TASK_ADDED", payload: taskObj };
}

function updateTask(taskObj) {
  return { type: "PROJECT/TASK_UPDATED", payload: taskObj };
}

function moveTask(dataObj) {
  return { type: "PROJECT/TASK_MOVED", payload: dataObj };
}

function addList(listObj) {
  return { type: "PROJECT/LIST_ADDED", payload: listObj };
}

export { projectsReducer, addProject, updateProject, deleteProject, addTask, addList, updateTask, moveTask };
