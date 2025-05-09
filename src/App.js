import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${currentStep >= 1 ? "active" : ""}`}>1</div>
        <div className={`${currentStep >= 2 ? "active" : ""}`}>2</div>
        <div className={`${currentStep === 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message"> {messages[currentStep - 1] || "anything"} </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          disabled={currentStep === 1}
          onClick={() => {
            if (currentStep === 1) {
              return;
            } else {
              setCurrentStep((prev) => prev - 1);
            }
          }}
        >
          Prev
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          disabled={currentStep === messages.length}
          onClick={() => {
            if (currentStep === messages.length) {
              return;
            } else {
              setCurrentStep((prev) => prev + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
