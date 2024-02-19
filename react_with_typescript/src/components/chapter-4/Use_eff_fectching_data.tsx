import { useEffect } from "react";

interface Person {
  name: string;
}

function get_person(): Promise<Person> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Bob" }), 1000)
  );
}

export default function Person_Score() {
  useEffect(() => {
    // get_person().then((person) => console.log(person));
    async function get_the_person() {
      const person = await get_person();
      console.log(person);
    }
    get_the_person();
  }, []);

  return null;
}
