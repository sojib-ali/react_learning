import { useEffect, useState } from "react";

type Person = {
  name: string;
};

function get_person_2(): Promise<Person> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Bob" }), 1000)
  );
}

export default function Person_Score_2() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    get_person_2().then((person) => {
      setLoading(false);
      setName(person.name);
    });
  }, []);
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <button onClick={() => setScore(score + 1)}>Add</button>
      <button onClick={() => setScore(score - 1)}>Subtract</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}
