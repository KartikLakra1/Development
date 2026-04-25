import { useState } from "react";

const EditItem = ({ todo, index, setShowEdit, setSelectedIndex }) => {
  const [inputText, setinputText] = useState("");
  return (
    <div className="flex items-center justify-around w-full">
      <input
        className="bg-gray-600 text-white font-bold border-2xl border-black p-1.5 rounded-lg mb-1.5 min-w-[60%]"
        type="text"
        placeholder="enter you chores"
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
      />
      <button
        className="bg-orange-600 text-white font-bold p-2.5 rounded-2xl"
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
