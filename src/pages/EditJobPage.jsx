import React from "react";
import { useLoaderData } from "react-router-dom";

const EditJobPage = () => {
  const job = useLoaderData();
  return (
    <div>
      <h1>Dummy Text</h1>
    </div>
  );
};

export default EditJobPage;
