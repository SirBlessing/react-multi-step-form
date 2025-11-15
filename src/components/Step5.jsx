import checkIcon from "../assets/images/icon-thank-you.svg"; // make sure this path is correct

function Step5() {
  return (
    <div className="step success-step">
      <div className="thank-you-box">
        <div className="thank-icon">
          <img src={checkIcon} alt="Success" />
        </div>
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using our
          platform. If you ever need support, please feel free to email us at
          <span className="highlight"> support@loremgaming.com</span>.
        </p>
      </div>
    </div>
  );
}

export default Step5;
