import { useState, useEffect } from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets//images/icon-pro.svg";

function Step2({ formData, setFormData, nextStep, prevStep }) {
  const [billing, setBilling] = useState(formData.billing || "monthly");

  const plans = [
    { name: "Arcade", price: 9, icon: arcadeIcon },
    { name: "Advanced", price: 12, icon: advancedIcon },
    { name: "Pro", price: 15, icon: proIcon },
  ];

  // keep global billing synced
  useEffect(() => {
    setFormData((prev) => ({ ...prev, billing }));
  }, [billing]);

  const handleSelect = (planName, planPrice) => {
    setFormData({
      ...formData,
      plan: planName,
      price: planPrice,
      billing,
    });
  };

  const handleBillingToggle = () => {
    const newBilling = billing === "monthly" ? "yearly" : "monthly";
    setBilling(newBilling);
  };

  return (
    <div className="step">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <div className="plan-options">
        {plans.map((plan) => {
          const isSelected = formData.plan === plan.name;
          const displayPrice =
            billing === "monthly"
              ? `$${plan.price}/mo`
              : `$${plan.price * 10}/yr`;

          return (
            <div
              key={plan.name}
              className={`plan-card ${isSelected ? "selected" : ""}`}
              onClick={() => handleSelect(plan.name, plan.price)}
            >
              <img src={plan.icon} alt={plan.name} />
              <div className="plan-details">
                <h4>{plan.name}</h4>
                <p>{displayPrice}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="billing-toggle">
        <span className={billing === "monthly" ? "active" : ""}>Monthly</span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleBillingToggle}
            checked={billing === "yearly"}
          />
          <span className="slider"></span>
        </label>
        <span className={billing === "yearly" ? "active" : ""}>Yearly</span>
      </div>

      <div className="nav-buttons">
        <button className="back-btn" onClick={prevStep}>Go Back</button>
        <button className="next-btn" onClick={nextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default Step2;
