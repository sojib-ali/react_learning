import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "../schemas/authSchema";
import "./../foodOrder.css";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(authSchema) });

  const onSubmit = (data) => {
    console.log("success", data);
    reset();
  };

  return (
    <>
      <h3>Checkout</h3>
      <p>Total Amount</p>

      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-input" {...register("fullName")} />
          {errors.fullName && <p> {errors.fullName.message} </p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-input" {...register("email")} />
          {errors.email && <p> {errors.email.message} </p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-input"
            {...register("password")}
          />
          {errors.password && <p> {errors.password.message} </p>}
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" className="form-input" {...register("city")} />
          {errors.city && <p> {errors.city.message} </p>}
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary">
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
