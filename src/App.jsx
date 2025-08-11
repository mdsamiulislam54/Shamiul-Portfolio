import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./Layout/Layout ";

import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import Home from "./Page/Home/Home";
import Service from "./Page/Service/Service";
import Projects from "./Page/Projects/Projects";
import Details from "./Page/Details/Details";
import Education from "./Page/Education/Education";

import HomeLayout from "./Layout/HomeLayout";
import Skills from "./Page/Skills/Skills";
import MyCourses from "./Page/MyCourses/MyCourses";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/service",
        Component: Service,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/details/:id",
        loader: async ({ params }) => {
          const res = await fetch("/projects.json");
          const data = await res.json();
          const project = data.find((item) => item.id === parseInt(params.id));
          if (!project) {
            throw new Response("Not Found", { status: 404 });
          }
          return project;
        },
        Component: Details,
      },
      {
        path:'/education',
        Component:Education
      },
      {
        path:'/skills',
        Component:Skills
      },
      {
        path:'/course',
        Component:MyCourses
      }
    ],
  },
]);

export default router;
