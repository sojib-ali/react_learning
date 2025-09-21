'use client'

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label, name}){
    const imageInputRef = useRef();
    const [imagePicked, setImagePicked] = useState(null);

    function handlePickClick(){
        imageInputRef.current.click();
    }

    function handleImageChange(event){
        const file = event.target.files[0];

        if (!file){
            setImagePicked(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = ()=>{
            setImagePicked(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }



    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!imagePicked && <p>No image picked yet.</p>}
                    {imagePicked && (
                        <Image
                            src={imagePicked}
                            alt='The image seleced by the user'
                            fill
                        />

                    )}
                </div>
                <input 
                    className={classes.input}
                    type="file" 
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInputRef}
                    onChange = {handleImageChange}
                />
                <button className={classes.button} type='button' onClick={handlePickClick} >Pick an image</button>
            </div>
        </div>
    )
}