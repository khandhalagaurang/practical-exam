import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD } from './action';

export default function Input() {
    const [Input, setInput] = useState("");
    let Dispatch = useDispatch();

    const submitFrom = (e) => {
        e.preventDefault();
        Dispatch(ADD(Input));
        e.target.reset();
    };

    return (
        <>
            <h1>Input</h1>
            <form onSubmit={submitFrom}>
                <input
                    type="text"
                    placeholder="Enter TO DO"
                    onChange={(e) => setInput(e.target.value)} />
                <br />
                <br />
                <button>ADD TO DO</button>
            </form>
        </>
    );

}