import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p className="message"> {messages[currentStep] || "anything"} </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          disabled={currentStep === 0}
          onClick={() => {
            if (currentStep === 0) {
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
          disabled={currentStep === messages.length - 1}
          onClick={() => {
            if (currentStep === messages.length - 1) {
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
