import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  function handleChange(e){
    setName(e.target.value);
  }

  return (
    

    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={handleChange}
        
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
        setName('');
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}
            <button onClick={()=>{
                setArtists(
                    artists.filter(a=>
                        a.id!== artist.id
                    )
                )
            }}>
                Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
