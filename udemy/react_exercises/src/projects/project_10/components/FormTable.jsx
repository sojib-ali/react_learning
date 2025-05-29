const FormTable = ({ listItems }) => {
  return (
    <ul>
      {listItems.map((items, index) => (
        <li key={index}>
          {items.description}
          {items.amount}
          {items.category}
        </li>
      ))}
    </ul>
  );
};

export default FormTable;
