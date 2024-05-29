import React from "react";
import Spinner from "../components/Spinner";
import { useParams, useLoaderData, NavLink } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <NavLink className="text-indigo-500 hover:text-indigo-600 flex items-center">
            <i className="fas fa-arrow-left mr-2"></i>Back To Job Listing
          </NavLink>
        </div>
      </section>
      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">Full Time</div>
                <h1 className="text-3xl font-bold mb-4">
                  Senior React Developer
                </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <NavLink to="/" className="text-orange-700">
                    Boston
                  </NavLink>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

// ===================== fetching single page using react router data loaders
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };

// ===================== fetching single page using useEffect and useStates hooks

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Spinner from "../components/Spinner";

// const JobPage = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         console.log(data);
//         setJob(data);
//       } catch (error) {
//         console.log("error is", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJob();
//   }, []);
//   return <div>{loading ? <Spinner /> : <h1>{job.title}</h1>}</div>;
// };

// export default JobPage;
