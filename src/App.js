import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = ({ children }) => {
  // =======  add new job function

  const addJob = async (newJob) => {
    // console.log(newJob);

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "applicatoin/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  // =======  delete new job function
  const deleteJob = async (id) => {
    // console.log(id);

    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage />}
          loader={<jobLoader />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
  // <>
  //   <Navbar />
  //   <Hero />
  //   <HomeCards />
  //   <JobListings />
  //   <ViewAllJobs />
  // </>
};

export default App;
