// localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "john.doe@example.com",
    password: "1234",
    taskCount: {
      active: 1,
      newTask: 1,
      completedTask: 1,
      failedTask: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create the homepage UI in React.",
        taskDate: "2026-07-10",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve responsive navbar issues.",
        taskDate: "2026-07-08",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API.",
        taskDate: "2026-07-06",
        category: "Development",
      },
    ],
  },

  {
    id: 2,
    firstName: "Priya",
    email: "jane.smith@example.com",
    password: "1234",
    taskCount: {
      active: 2,
      newTask: 1,
      completedTask: 1,
      failedTask: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Database Backup",
        taskDescription: "Backup production database.",
        taskDate: "2026-07-11",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
        taskTitle: "Write SQL Queries",
        taskDescription: "Prepare optimized SQL queries.",
        taskDate: "2026-07-09",
        category: "SQL",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Create ER Diagram",
        taskDescription: "Design ER diagram for the project.",
        taskDate: "2026-07-05",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true,
        taskTitle: "Data Migration",
        taskDescription: "Move old records to the new schema.",
        taskDate: "2026-07-02",
        category: "Migration",
      },
    ],
  },

  {
    id: 3,
    firstName: "Vivek",
    email: "vivek@gmail.com",
    password: "1234",
    taskCount: {
      active: 2,
      newTask: 1,
      completedTask: 1,
      failedTask: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Build Login Page",
        taskDescription: "Develop authentication UI.",
        taskDate: "2026-07-10",
        category: "Frontend",
      },
      {
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
        taskTitle: "Implement Authentication",
        taskDescription: "Add JWT authentication.",
        taskDate: "2026-07-12",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy app to Vercel.",
        taskDate: "2026-07-07",
        category: "Deployment",
      },
    ],
  },

  {
    id: 4,
    firstName: "Anjali",
    email: "emily.johnson@example.com",
    password: "1234",
    taskCount: {
      active: 2,
      newTask: 1,
      completedTask: 1,
      failedTask: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build admin dashboard UI.",
        taskDate: "2026-07-10",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress website images.",
        taskDate: "2026-07-04",
        category: "Optimization",
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true,
        taskTitle: "Payment Gateway",
        taskDescription: "Integrate payment API.",
        taskDate: "2026-07-03",
        category: "API",
      },
      {
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
        taskTitle: "Testing",
        taskDescription: "Perform UI testing.",
        taskDate: "2026-07-11",
        category: "QA",
      },
    ],
  },

  {
    id: 5,
    firstName: "Amit",
    email: "david.wilson@example.com",
    password: "1234",
    taskCount: {
      active: 2,
      newTask: 1,
      completedTask: 2,
      failedTask: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completedTask: false,
        failedTask: false,
        taskTitle: "Create Reports",
        taskDescription: "Generate monthly sales reports.",
        taskDate: "2026-07-09",
        category: "Reports",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Update Documentation",
        taskDescription: "Revise project documentation.",
        taskDate: "2026-07-06",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests.",
        taskDate: "2026-07-10",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true,
        taskTitle: "Fix Security Issue",
        taskDescription: "Resolve authentication vulnerability.",
        taskDate: "2026-07-01",
        category: "Security",
      },
      {
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
        taskTitle: "Update Dependencies",
        taskDescription: "Upgrade project packages.",
        taskDate: "2026-07-08",
        category: "Maintenance",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    firstName: "Admin",
    email: "admin@gmail.com",
    password: "1234",
  },
];

export const setLoaclStorage = () => {

    if(!localStorage.getItem('employees')){
        localStorage.setItem(
            'employees',
            JSON.stringify(employees)
        )
    }

    if(!localStorage.getItem('admin')){
        localStorage.setItem(
            'admin',
            JSON.stringify(admin)
        )
    }
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}