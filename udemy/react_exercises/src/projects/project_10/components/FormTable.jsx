const FormTable = ({ onDelete, listItems }) => {
  const totalAmount = listItems.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listItems.map((items) => (
            <tr key={items.id}>
              <td> {items.description} </td>
              <td> {items.amount} </td>
              <td> {items.category} </td>
              <td>
                <button onClick={() => onDelete(items.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>{totalAmount}</strong>
            </td>
            <td colSpan="2"></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FormTable;
