import React, { useState } from "react";

const FormInput = () => {
    const [text, setText] = useState("");

    const handleChange = (event) => setText(event.target.value);

    return (
        <div>
            <h1>Form Input</h1>
            <input 
            type="text"
            placeholder="Enter Text"
            value={text}
            onChange={handleChange}
            />
            <p>You entered: {text}</p>
        </div>
    );
};
export default FormInput;