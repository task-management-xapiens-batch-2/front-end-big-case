import React from "react";
import { useHistory } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../graphql/queries";

// import ButtonComponent from "../components/Button.component";
import JumbotronComponent from "../../../components/Jumbotron.component"
import TableComponent from "../../../components/Table.component";
import NavbarAdminComponent from "../../../components/NavbarAdmin.component";

const DashboardAdmin = () => {
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error dong hihihi</div>;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <JumbotronComponent />
          <NavbarAdminComponent />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
