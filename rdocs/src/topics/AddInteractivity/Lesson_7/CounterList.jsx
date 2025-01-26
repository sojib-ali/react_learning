import { useState } from "react";

const CounterList = () => {
  const [listNumber, setListNumber] = useState([0, 0, 0]);

  const handleClick = (index) => {
    setListNumber(listNumber.map((item, i) => (i === index ? item + 1 : item)));
  };
  return (
    <div>
      <ul>
        {listNumber.map((item, index) => (
          <li key={index}>
            {" "}
            {item}
            <button onClick={() => handleClick(index)}>+1</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CounterList;
