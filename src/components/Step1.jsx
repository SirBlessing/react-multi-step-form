function Step1({ formData, setFormData, nextStep }) {
  return (
    <div className="step">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <label>Name</label>
      <input
        type="text"
        placeholder="e.g. Stephen King"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
      />

      <label>Email Address</label>
      <input
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />

      <label>Phone Number</label>
      <input
        type="text"
        placeholder="e.g. +1 234 567 890"
        value={formData.phone}
        onChange={e => setFormData({ ...formData, phone: e.target.value })}
      />

      <button className="next-btn" onClick={nextStep}>Next Step</button>
    </div>
  );
}

export default Step1;
