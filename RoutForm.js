import React from "react";
import { Outlet, Link } from "react-router-dom";

const RoutForm = () => {
  return (
    <>
      <nav>
        <ul>
             
          <li>
            <Link to="/InscriptionForm">ProductForm</Link>
          </li>
          <li>
            <Link to="/InscriptionList">ProductList</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default RoutForm;