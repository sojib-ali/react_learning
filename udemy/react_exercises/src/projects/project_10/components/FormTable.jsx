const FormTable = ({ onDelete, listItems }) => {
  return (
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
              {" "}
              <button onClick={() => onDelete(items.id)}>Delete</button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FormTable;
