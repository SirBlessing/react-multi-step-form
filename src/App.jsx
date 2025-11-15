import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    price: 0,
    billing: "monthly",
    addons: [],
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <Step4
            formData={formData}
            prevStep={prevStep}
            nextStep={nextStep} // 👈 Add this so Step 4 can go to Step 5
          />
        );
      case 5:
        return <Step5 />; // ✅ Show success page
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <Sidebar step={step} />
      <div className="form-container">{renderStep()}</div>
    </div>
  );
}

export default App;
