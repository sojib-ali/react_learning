import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "../schemas/authSchema";
import "./../foodOrder.css";

const CheckoutForm = ({ onCheckOut, cartItems, onCartItems }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(authSchema) });

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const onSubmit = async (data) => {
    console.log("success", data);
    const order = {
      items: cartItems,
      customer: data,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      if (!response.ok) {
        throw new Error("Order submission failed");
      }
      onCartItems([]);
      reset();
      onCheckOut((prev) => ({ ...prev, showCheckOut: false }));
      alert("successfully data stored");
    } catch (error) {
      console.error("Submission Error:", error);
      alert(
        "Failed to submit order. Please check your connection and try again."
      );
    }
  };

  return (
    <>
      <h3>Checkout</h3>
      <p>Total Amount : ${totalAmount.toFixed(2)}</p>

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
          <button
            onClick={() =>
              onCheckOut((prev) => ({
                ...prev,
                showCart: true,
                showCheckOut: false,
              }))
            }
            type="button"
            className="btn btn-secondary"
          >
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
