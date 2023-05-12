import { Avatar } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const SingleFeedback = ({ name, description, img, rating }: any) => {
  const floor = Math.floor(rating);
  const decimal = rating - floor;

  return (
    <div className="flex flex-col bg-slate-300 rounded-xl p-6 space-y-2 shadow-sm min-h-[170px] sm:min-h-[160px]">
      <div className="flex flex-row items-center gap-4">
        <Avatar
          alt="Remy Sharp"
          src={img}
          sx={{ width: "50px", height: "50px" }}
        />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium">{name}</p>
          <div className="flex flex-row items-center">
            <p className="opacity-50 text-sm mr-1 font-semibold">({rating})</p>
            {[...Array(floor)].map((_, idx) => (
              <StarIcon
                key={idx}
                className="text-[#FDCC0D]"
                sx={{ fontSize: "18px" }}
              />
            ))}
            {floor < 5 &&
              (decimal > 0 ? (
                <StarHalfIcon
                  className="text-[#FDCC0D]"
                  sx={{ fontSize: "18px" }}
                />
              ) : (
                <StarOutlineIcon
                  className="text-[#FDCC0D]"
                  sx={{ fontSize: "18px" }}
                />
              ))}
          </div>
        </div>
      </div>

      <p className="text-sm">{description}</p>
    </div>
  );
};

export default SingleFeedback;
