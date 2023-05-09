import { css, tw } from "twind/css";

const SingleService = ({ name, description, img }: any) => {
  return (
    <div className="flex flex-col items-center justify-center mb-3 bg-grad p-7 rounded-lg text-black group space-y-4">
      <img
        className="rounded-full transition duration-300 ease-in-out group-hover:scale-[1.09]"
        src={img}
        alt=""
        width="80px"
        height="80px"
      />

      <h3 className="font-bold text-xl">{name}</h3>
      <small className="text-sm font-semibold text-center">{description}</small>
      <button className="bg-[#dc143c] px-4 py-2 text-white font-bold rounded-3xl text-[13px]  transition duration-300 ease-in-out hover:scale-[1.05]">
        Order Now
      </button>
    </div>
  );
};

export default SingleService;
