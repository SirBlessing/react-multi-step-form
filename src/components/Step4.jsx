function Step4({ formData, prevStep, nextStep }) {
  // Calculate total
  const planPrice =
    formData.billing === "monthly"
      ? formData.price
      : formData.price * 10; // Example yearly multiplier

  const addonPrices = {
    "Online service": 1,
    "Larger storage": 2,
    "Customizable profile": 2,
  };

  const totalAddons = formData.addons.reduce((total, addon) => {
    const addonPrice =
      formData.billing === "monthly" ? addonPrices[addon] || 0 : (addonPrices[addon] || 0) * 10;
    return total + addonPrice;
  }, 0);

  const total = planPrice + totalAddons;

  return (
    <div className="step summary-step">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="summary-box">
        <div className="summary-plan">
          <div>
            <strong>
              {formData.plan} ({formData.billing === "monthly" ? "Monthly" : "Yearly"})
            </strong>
            <a href="#" className="change-link" onClick={(e) => e.preventDefault()}>
              Change
            </a>
          </div>
          <span className="price">
            ${planPrice}/{formData.billing === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        <hr />

        <div className="summary-addons">
          {formData.addons.length > 0 ? (
            formData.addons.map((addon) => (
              <div className="addon-row" key={addon}>
                <span>{addon}</span>
                <span className="addon-price">
                  +$
                  {formData.billing === "monthly"
                    ? addonPrices[addon]
                    : addonPrices[addon] * 10}
                  /{formData.billing === "monthly" ? "mo" : "yr"}
                </span>
              </div>
            ))
          ) : (
            <p className="no-addons">No add-ons selected</p>
          )}
        </div>
      </div>

      <div className="total-row">
        <span>
          Total (per {formData.billing === "monthly" ? "month" : "year"})
        </span>
        <strong className="total-price">
          +${total}/{formData.billing === "monthly" ? "mo" : "yr"}
        </strong>
      </div>

      <div className="nav-buttons">
        <button className="back-btn" onClick={prevStep}>
          Go Back
        </button>
        <button className="confirm-btn" onClick={nextStep}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Step4;
