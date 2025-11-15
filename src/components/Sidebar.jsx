function Sidebar({ step }) {
  const steps = [
    { num: 1, label: "YOUR INFO" },
    { num: 2, label: "SELECT PLAN" },
    { num: 3, label: "ADD-ONS" },
    { num: 4, label: "SUMMARY" },
  ];

  return (
    <div className="sidebar">
      {steps.map(s => (
        <div key={s.num} className={`step-item ${step === s.num ? "active" : ""}`}>
          
          {/* Add active-circle class based on step */}
          <div className={`circle ${step === s.num ? "active-circle" : ""}`}>
            {s.num}
          </div>

          <div className="text">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
