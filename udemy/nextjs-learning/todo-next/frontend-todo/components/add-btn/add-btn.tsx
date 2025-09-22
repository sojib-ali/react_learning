'use client'
import React from "react"
import styles from  './add-btn.module.css'


type AddButtonProps = {
    children: React.ReactNode;
}

export default function AddButton({children}:AddButtonProps){
    return(
       <button className={styles.addbutton} > {children} </button> 
    )
}