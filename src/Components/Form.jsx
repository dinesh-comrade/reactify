import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setValue(e.target.name, e.target.value);
  };

  const onClear = () => {
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="form-floating mb-3">
        <input
          type="text"
          className={`form-control ${errors?.name ? "is-invalid" : ""}`}
          name="name"
          id="name"
          onChange={handleChange}
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Only alphabetic characters are allowed",
            },
          })}
          onInput={(e) => {
            const input = e.target;
            const value = input.value;
            input.value = value.replace(/[^A-Za-z]/g, "");
            e.preventDefault();
          }}
        />
        <label htmlFor="name">Name</label>
        {errors?.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>

      <div className="form-floating mb-3">
        <input
          type="email"
          className={`form-control ${errors?.email ? "is-invalid" : ""}`}
          id="email"
          name="email"
          onChange={handleChange}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <label htmlFor="email">Email address</label>
        {errors?.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>

      <div className="form-floating mb-3">
        <input
          type="tel"
          className={`form-control ${errors?.mobile ? "is-invalid" : ""}`}
          id="number"
          name="number"
          onChange={handleChange}
          {...register("mobile", {
            required: "Mobile number is required",
            minLength: {
              value: 10,
              message: "Mobile number must be 10 digits",
            },
            maxLength: {
              value: 10,
              message: "Mobile number must be 10 digits",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Only numeric characters are allowed",
            },
          })}
          onInput={(e) => {
            const input = e.target;
            const value = input.value;
            input.value = value.replace(/[^0-9]/g, "");
            e.preventDefault();
          }}
        />
        <label htmlFor="mobile">Mobile Number</label>
        {errors?.mobile && (
          <div className="invalid-feedback">{errors.mobile.message}</div>
        )}
      </div>
      <div className="mb-3">
        <label>Gender</label>
        <div className="d-flex justify-content-evenly">
          <div className="form-check">
            <input
              className={`form-check-input ${
                errors?.gender ? "is-invalid" : ""
              }`}
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={handleChange}
              {...register("gender", { required: "Gender is required" })}
            />

            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className={`form-check-input ${
                errors?.gender ? "is-invalid" : ""
              }`}
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={handleChange}
              {...register("gender", { required: "Gender is required" })}
            />

            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        {errors?.gender && (
          <div className="invalid-feedback">{errors.gender.message}</div>
        )}
      </div>
      <div className="form-check">
        <input
          className={`form-check-input ${errors?.terms ? "is-invalid" : ""}`}
          type="checkbox"
          id="terms"
          {...register("terms", { required: "Terms is required" })}
        />
        <div>
          <label className="form-check-label" htmlFor="flexCheckDefault">
            * I agree to the Terms and Conditions
          </label>
        </div>
        {errors?.terms && (
          <div className="invalid-feedback">{errors.terms.message}</div>
        )}
      </div>
      <div className="d-flex justify-content-around mt-4">
        <button
          className="btn btn-success rounded-pill px-5 py-2"
          type="submit"
        >
          Submit
        </button>
        <button
          className="btn btn-success rounded-pill px-5 py-2"
          type="button"
          onClick={onClear}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export { Form };
