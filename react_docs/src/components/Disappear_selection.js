import {useState} from 'react';
import { initialLetters } from './Disappear_data.js';
import Letter from './Disappear_letter.js';

export default function MailClient(){
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedId, setHighlightedId] = useState(null);

    function handleHover(letterId){
        setHighlightedId(letterId)
    }

    function handleStar(starredId){
        setLetters(letters.map(letter =>{
            if(letter.id === starredId){
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            }else{
                return letter;
            }
        }));
    }

    return(
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter =>(
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighLighted={
                            letter.id === highlightedId
                        }
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}    
            </ul>        
        </>
    )
}