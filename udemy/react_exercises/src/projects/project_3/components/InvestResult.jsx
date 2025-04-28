import { formatter } from "./Calc_investResult";

const InvestResult = ({ annualData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((yrData) => (
          <tr key={yrData.year}>
            <td>{yrData.year}</td>
            <td>{formatter.format(yrData.valueEndOfYear)}</td>
            <td>{formatter.format(yrData.interest)}</td>
            <td>{formatter.format(yrData.annualInvestment * yrData.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestResult;
