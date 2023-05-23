import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { tw } from "twind";
import { css } from "twind/css";

function FormInput({
  containerClass,
  controllerClassName,
  inputClassName,
  control,
  error,
  label,
  rules,
  placeholder,
  name,
  type,
  rows,
}: any) {
  return (
    <div className={containerClass}>
      <span className="font-semibold">{label}</span>
      <div className={`${controllerClassName} mt-2`}>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder={placeholder}
              fullWidth
              size="small"
              color="primary"
              type={type}
              inputProps={{
                className: inputClassName,
              }}
              rows={rows}
              multiline
              className={tw(
                css({
                  "& .MuiInputBase-root": {
                    padding: "10px",
                  },
                })
              )}
            />
          )}
        />
        {error && <p className="font-semibold text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
}

export default FormInput;
