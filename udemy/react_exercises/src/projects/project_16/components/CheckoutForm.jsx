const CheckoutForm = () => {
  return (
    <>
      <h3>Checkout</h3>
      <p>Total Amount</p>

      <form className="form-container">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-input" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-input" />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" className="form-input" />
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
