import InvestResult from "./InvestResult";

const Calc_investResult = ({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) => {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
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
