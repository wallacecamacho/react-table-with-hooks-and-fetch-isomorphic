import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import findExamples from "../../libs/api/findExamples";

export default function Content() {
  const [data, setData] = useState([
    { first_name: "John", email: "info@dz.com", gender: "Male" }
  ]);


  async function fetchMyAPI() {
    let response = await findExamples();
    setData(response)
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <div>
      <MaterialTable
        columns={[
          { title: "Name", field: "first_name" },
          { title: "Email", field: "email" },
          { title: "Gender", field: "gender" }
        ]}
        data={data}
        title="Users Data"
      />
    </div>
  );
}
