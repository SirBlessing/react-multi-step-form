function Step3({ formData, setFormData, nextStep, prevStep }) {
  const isYearly = formData.billing === "yearly";

  const addOns = [
    {
      name: "Online service",
      desc: "Access to multiplayer games",
      price: isYearly ? 10 : 1,
    },
    {
      name: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: isYearly ? 20 : 2,
    },
    {
      name: "Customizable profile",
      desc: "Custom theme on your profile",
      price: isYearly ? 20 : 2,
    },
  ];

  const handleToggle = (addOnName) => {
    const alreadyAdded = formData.addons.includes(addOnName);
    const updatedAddons = alreadyAdded
      ? formData.addons.filter((a) => a !== addOnName)
      : [...formData.addons, addOnName];
    setFormData({ ...formData, addons: updatedAddons });
  };

  return (
    <div className="step">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="addons-list">
        {addOns.map((addOn) => (
          <label
            key={addOn.name}
            className={`addon-item ${
              formData.addons.includes(addOn.name) ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={formData.addons.includes(addOn.name)}
              onChange={() => handleToggle(addOn.name)}
            />
            <div className="addon-details">
              <h4>{addOn.name}</h4>
              <p>{addOn.desc}</p>
            </div>
            <span className="addon-price">
              +${addOn.price}/{isYearly ? "yr" : "mo"}
            </span>
          </label>
        ))}
      </div>

      <div className="nav-buttons">
        <button className="back-btn" onClick={prevStep}>Go Back</button>
        <button className="next-btn" onClick={nextStep}>Next Step</button>
      </div>
    </div>
  );
}

export default Step3;
