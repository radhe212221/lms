const data = {
    admin: [
        { id: 1, name: "admin", email: "admin@gmail.com", password: "admin" }
    ],
    faculty: [
        { id: 1, name: "faculty1", email: "faculty1@gmail.com", password: "faculty1", branch: "cse", phone: "9999999991" },
        { id: 2, name: "faculty2", email: "faculty2@gmail.com", password: "faculty2", branch: "cse", phone: "9999999992" },
        { id: 3, name: "faculty3", email: "faculty3@gmail.com", password: "faculty3", branch: "cse", phone: "9999999993" },
        { id: 4, name: "faculty4", email: "faculty4@gmail.com", password: "faculty4", branch: "cse", phone: "9999999994" },
        { id: 5, name: "faculty5", email: "faculty5@gmail.com", password: "faculty5", branch: "cse", phone: "9999999995" },
        { id: 6, name: "faculty6", email: "faculty6@gmail.com", password: "faculty6", branch: "cse", phone: "9999999996" },
        { id: 7, name: "faculty7", email: "faculty7@gmail.com", password: "faculty7", branch: "cse", phone: "9999999997" },
        { id: 8, name: "faculty8", email: "faculty8@gmail.com", password: "faculty8", branch: "cse", phone: "9999999998" },
        { id: 9, name: "faculty9", email: "faculty9@gmail.com", password: "faculty9", branch: "cse", phone: "9999999999" },
        { id: 10, name: "faculty10", email: "faculty10@gmail.com", password: "faculty10", branch: "cse", phone: "99999999910" },
    ],
    student: [
        { id: 1, name: "student1", email: "student1@gmail.com", password: "student1", course: "react1", phone: "8889999991" },
        { id: 2, name: "student2", email: "student2@gmail.com", password: "student2", course: "react1", phone: "8889999992" },
        { id: 3, name: "student3", email: "student3@gmail.com", password: "student3", course: "react1", phone: "8889999993" },
        { id: 4, name: "student4", email: "student4@gmail.com", password: "student4", course: "react1", phone: "8889999994" },
        { id: 5, name: "student5", email: "student5@gmail.com", password: "student5", course: "react2", phone: "8889999995" },
        { id: 6, name: "student6", email: "student6@gmail.com", password: "student6", course: "react3", phone: "8889999996" },
        { id: 7, name: "student7", email: "student7@gmail.com", password: "student7", course: "react3", phone: "8889999997" },
        { id: 8, name: "student8", email: "student8@gmail.com", password: "student8", course: "react3", phone: "8889999998" },
        { id: 9, name: "student9", email: "student9@gmail.com", password: "student9", course: "react3", phone: "8889999999" },
        { id: 10, name: "student10", email: "student10@gmail.com", password: "student10", course: "react3", phone: "88899999910" },

    ],
    courses: [
        { id: 1, name: "react1", price: 1000, days: 111 },
        { id: 2, name: "react2", price: 2000, days: 222 },
        { id: 3, name: "react3", price: 3000, days: 333 },
    ],
    slots: [
        { id: 1, name: "7-8" },
        { id: 2, name: "8-9" },
        { id: 3, name: "9-10" },
        { id: 4, name: "10-11" },
        { id: 5, name: "11-12" },
    ],
    batch: [],
    menu: [
        { label: "admin", to: "/admin" },
        { label: "faculty", to: "/faculty" },
        { label: "student", to: "/student" },
        { label: "courses", to: "/courses" },
        { label: "slots", to: "/slots" },
        { label: "chart", to: "/chart" },
        { label: "graph", to: "/graph" },
        { label: "attendance", to: "/attendance" },
        { label: "planner", to: "/planner" },
    ]
}

export default data