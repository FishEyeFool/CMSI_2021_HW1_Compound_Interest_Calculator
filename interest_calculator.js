const interestForm = document.getElementById("interestForm");
const principalBox = document.querySelector("#principalAmount");
const annualRateBox = document.querySelector("#annualRate");
const compoundType = document.getElementById("compoundTypeButton");
const numOfYearsBox = document.querySelector("#numOfYears");
const compoundedInterestOutput = document.querySelector("#compoundedInterest");
const amountOfMoneyEarnedOutput = document.querySelector(
  "#amountOfMoneyEarned"
);

let totalCompoundedAmount;

// Function to calculate and update the interest and amounts
const calculateInterest = () => {
  const principal = Number(principalBox.value);
  const annualRate = Number(annualRateBox.value);
  const annualRateDecimal = annualRate / 100;
  const selectedCompoundTypeValue = Number(compoundType.value);
  const numOfYears = Number(numOfYearsBox.value);

  if (principal <= 0 || annualRate <= 0 || numOfYears <= 0) {
    return; // Avoid calculating with invalid values
  }

  if (selectedCompoundTypeValue === 0) {
    totalCompoundedAmount =
      principal * Math.pow(Math.E, annualRateDecimal * numOfYears);
  } else {
    totalCompoundedAmount =
      principal *
      Math.pow(
        1 + annualRateDecimal / selectedCompoundTypeValue,
        selectedCompoundTypeValue * numOfYears
      );
  }

  // Update the output
  amountOfMoneyEarnedOutput.textContent = `The Amount of Money Earned is $ ${(
    totalCompoundedAmount - principal
  ).toFixed(2)}`;

  compoundedInterestOutput.textContent = `The Total Accrued Amount is $ ${totalCompoundedAmount.toFixed(
    2
  )}`;
};

principalBox.addEventListener("input", calculateInterest);
annualRateBox.addEventListener("input", calculateInterest);
compoundType.addEventListener("change", calculateInterest);
numOfYearsBox.addEventListener("input", calculateInterest);
