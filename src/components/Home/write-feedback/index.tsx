import { Container } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { Rating, CircularProgress } from "@mui/material";

function WriteFeedback() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(3.5);

  const {
    handleSubmit,
    control,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = async ({ email, comment, name }: any) => {
    setLoading(true);
    try {
      setLoading(false);
    } catch (err: any) {
    } finally {
      setLoading(false);
    }
  };
  console.log(value);
  return (
    <div className="py-6 text-black mt-5" id="about">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-4xl capitalize">
              Give your
              <span style={{ color: "#7AB259" }}> Feedback</span> here.
            </h2>
            <p className="font-bold text-[17px] font-[calibri]">
              At Techzone we always appreciate to know from our valuable
              customers. Feel free to write your feedback about your experience
              with us. Any improvement or any suggestion if you have. It is very
              important to us to grow as a company as much better as possible.
            </p>
          </div>
          <form
            className="flex flex-col rounded-lg p-6 shadow-lg space-y-5 bg-slate-200 bg-opacity-50"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormInput
              label="Your email *"
              control={control}
              inputClassName="text-sm py-3"
              error={errors?.email?.message || ""}
              controllerClassName="text-black"
              rules={{
                required: { message: "Email required", value: true },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter valid email",
                },
              }}
              name="email"
              placeholder="Enter your email email"
              type="email"
            />
            <FormInput
              label="Your full name *"
              rules={{
                required: { message: "Name is required", value: true },
              }}
              error={errors?.name?.message || ""}
              name="name"
              placeholder="Enter your full name"
              type="text"
              control={control}
            />
            <FormInput
              label="Your comment *"
              rules={{
                required: { message: "Name is required", value: true },
              }}
              error={errors?.name?.message || ""}
              name="comment"
              placeholder="Enter your comment"
              type="text"
              control={control}
              rows={4}
            />
            <div className="flex flex-row">
              <span className="font-semibold">Rate our service - </span>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event: any, newValue: any) => {
                  setValue(newValue);
                }}
                precision={0.5}
              />
            </div>
            <div className="text-center">
              <button
                className="transition duration-300 ease-in-out bg-[crimson] font-semibold h-[45px] rounded-md text-white hover:scale-[1.02] w-[100px]"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={25} className="text-white" />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default WriteFeedback;
