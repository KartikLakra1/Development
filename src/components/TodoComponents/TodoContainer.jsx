import { useState } from "react";
import EditItem from "./EditItem.jsx";

const TodoContainer = ({ todos, setTodos, show, setShow }) => {
  // const [todos, setTodos] = useState([]);
  // const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [addinputText, setAddinputText] = useState("");
  const [editInputText, setEditInputText] = useState("");
  return (
    <div className="pt-4 w-full px-2">
      {/* <div className="flex items-center justify-center gap-4 mb-4">
        <button
          className="bg-green-600 text-white font-bold p-2.5 rounded-2xl"
          onClick={() => {
            // todos.clear();
            setShow(true);
          }}
        >
          Add todo
        </button>
        <button
          className="bg-red-600 text-white font-bold p-2.5 rounded-2xl"
          onClick={() => {
            // // todos.clear();
            // todos.length = 0;
            // windows.location.reload();
            // // setShow(true);
            setTodos([]);
          }}
        >
          Delete All
        </button>
      </div> */}

      {show ? (
        <div className="flex items-center justify-center gap-4 mb-1">
          <input
            className="bg-gray-600 text-white font-bold border-2xl border-black p-1.5 rounded-lg mb-1.5 min-w-[50%]"
            type="text"
            placeholder="enter you chores"
            value={addinputText}
            onChange={(e) => setAddinputText(e.target.value)}
          />
          <button
            className="bg-green-600 text-white font-bold p-2.5 rounded-2xl"
            onClick={() => {
              if (addinputText.length == 0) return;
              setTodos([...todos, addinputText]);
              setShow(false);
              setAddinputText("");
            }}
          >
            Add
          </button>
        </div>
      ) : null}

      {todos.length <= 0 && !show ? (
        <>
          <h2 className="text-red-600 bg-amber-200 p-1.5 font-bold text-center">
            !!!!! No todos yet !!!!!
          </h2>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* <h2 className="font-bold text-xl text-white">
              Number of Items : {todos.length}
            </h2> */}
          </div>
          {todos.map((todo, index) => {
            return (
              <div
                key={index}
                className="flex items-start justify-around w-full p-2"
              >
                <h3 className="font-bold text-lg text-white w-[5%] ">
                  {index + 1}.
                </h3>
                {showEdit && selectedIndex === index ? (
                  <>
                    {/* <EditItem
                      todo={todos}
                      index={index}
                      setShowEdit={setShowEdit}
                      setSelectedIndex={setSelectedIndex}
                    /> */}

                    <input
                      className="bg-gray-600 text-white font-bold border-2xl border-black p-1.5 rounded-lg mb-1.5 min-w-[60%]"
                      type="text"
                      placeholder={`${todos[index]}`}
                      value={editInputText}
                      onChange={(e) => setEditInputText(e.target.value)}
                    />
                    {/* <p className="text-white">
                      Index selected: {selectedIndex}
                    </p> */}
                  </>
                ) : (
                  <h2 className="font-bold text-lg text-white w-[70%] wrap-break-word">
                    {todo}
                  </h2>
                )}
                <div className="flex items-start justify-center gap-4 w-[25%]">
                  <button
                    className="bg-red-600 text-white p-2.5 rounded-2xl font-semibold text-center"
                    onClick={() => {
                      setTodos(todos.filter((_, i) => i !== index));
                    }}
                  >
                    Delete
                  </button>
                  {showEdit && selectedIndex !== null ? (
                    <button
                      className="bg-orange-600 text-white font-bold p-2.5 rounded-2xl"
                      onClick={() => {
                        // todos[index] = editInputText;
                        const updatedTodos = [...todos];
                        updatedTodos[index] = editInputText;
                        setTodos(updatedTodos);

                        setShowEdit(false);
                        setSelectedIndex(null);
                      }}
                    >
                      Editting
                    </button>
                  ) : (
                    <button
                      className="bg-green-600 text-white font-bold p-2.5 rounded-2xl"
                      onClick={() => {
                        setShowEdit(true);
                        setSelectedIndex(index);
                      }}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default TodoContainer;
