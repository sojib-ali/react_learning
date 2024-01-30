import {useState} from 'react';
import MultipleLetter from './MultipleLetter';
import { initialLetters } from './Disappear_data';

export default function MultipleSelection(){
    const [selectedIds, setSelectedIds] = useState(new Set());

    const selectedCount = selectedIds.size;
    function handleToggle(toggleId){
        const nextIds = new Set(selectedIds);
        if(nextIds.has(toggleId)){
             nextIds.delete(toggleId);
        }else{
            nextIds.add(toggleId);
        }
        setSelectedIds(nextIds);
        
    }

    return(
        <>
            <h2>Inbox</h2>
            <ul>
                {initialLetters.map(letter => (
                    <MultipleLetter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            selectedIds.has(letter.id)
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr />
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>

    )
}