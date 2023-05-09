import { Avatar } from "@mui/material";
import React from "react";

const CustomerFeedback = ({ feedback }: any) => {
  const { name, designation, description, img } = feedback;

  return (
    <div className="col-md-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar alt="Remy Sharp" src={img} />
        <div className="flex flex-col">
          <h6 className="card-title font-weight-bold">
            {name} <br /> <small>{designation}</small>{" "}
          </h6>
        </div>
      </div>

      <p className="card-text">
        <small>{description}</small>{" "}
      </p>
    </div>
  );
};

export default CustomerFeedback;
