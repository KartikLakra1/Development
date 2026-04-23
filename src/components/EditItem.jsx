import { useState } from "react";

const EditItem = ({ todo, index, setShowEdit, setSelectedIndex }) => {
  const [inputText, setinputText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter you chores"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
      />
      <button
        onClick={() => {
          todo[index] = inputText;
          setShowEdit(false);
          setSelectedIndex(null);
        }}
      >
        Done
      </button>
    </div>
  );
};

export default EditItem;
