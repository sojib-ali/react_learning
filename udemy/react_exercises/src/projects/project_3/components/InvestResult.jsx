const InvestResult = ({ duration }) => {
  const years = [];
  for (let i = 1; i <= Number(duration); i++) {
    years.push(
      <tr key={i}>
        <td>{i}</td>
      </tr>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>year</th> <th>Investment value</th> <th>Investment value</th>{" "}
          <th>Invest(year)</th> <th>Invested capital</th>{" "}
        </tr>
      </thead>
      <tbody>{years}</tbody>
    </table>
  );
};

export default InvestResult;
