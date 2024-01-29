"use client";

import { useEffect } from "react";

export default function Error({error,reset}:{error:Error;reset:()=>void}){
    useEffect(()=>{
        console.log(error)
    },[error]);
    return(
        <div className="">
            <h2>Something when wrong</h2>
            <button onClick={()=>reset()}>try again</button>
        </div>

    );
}