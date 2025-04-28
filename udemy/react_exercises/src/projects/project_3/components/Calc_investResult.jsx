import InvestResult from "./InvestResult";

const Calc_investResult = ({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) => {
  // Convert the inputs to numbers to ensure proper calculations
  const initInvest = parseFloat(initialInvestment);
  const annInvest = parseFloat(annualInvestment);
  const expectedRet = parseFloat(expectedReturn);
  const years = parseInt(duration, 10);

  const annualData = [];
  let investmentValue = initInvest;

  for (let i = 0; i < years; i++) {
    const interestEarnedInYear = investmentValue * (expectedRet / 100);
    investmentValue += interestEarnedInYear + annInvest;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annInvest,
    });
  }
  console.log(annualData);

  return <InvestResult annualData={annualData} />;
};

export default Calc_investResult;

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
