import React, { useState } from "react";

function TextFillBox() {
  // State to hold the text input value
  const [textInput, setTextInput] = useState("");

  // Function to handle text input changes
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        value={textInput}
        onChange={handleInputChange}
        placeholder='Type something...'
      />
    </div>
  );
}

export default TextFillBox;
