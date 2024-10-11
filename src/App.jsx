import { useState } from "react";

import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, SetUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handdleChange(inputIdentifier, newValue) {
    SetUserInput((prevuserInput) => {
      return {
        ...prevuserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handdleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;
