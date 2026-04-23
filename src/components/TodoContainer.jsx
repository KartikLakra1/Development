import { useState } from "react";
import EditItem from "./EditItem";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [inputText, setinputText] = useState("");
  return (
    <div>
      <div>
        <button
          onClick={() => {
            // todos.clear();
            setShow(true);
          }}
        >
          Add todo
        </button>
        <button
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
      </div>

      {show ? (
        <>
          <input
            type="text"
            placeholder="enter you chores"
            value={inputText}
            onChange={(e) => setinputText(e.target.value)}
          />
          <button
            onClick={() => {
              if (inputText.length == 0) return;
              setTodos([...todos, inputText]);
              setShow(false);
              setinputText("");
            }}
          >
            Add
          </button>
        </>
      ) : null}

      {todos.length <= 0 ? (
        <>
          <h2>No todos yet</h2>
        </>
      ) : (
        <>
          <div>length of todo is {todos.length}</div>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <h3>{index + 1}</h3>
                {showEdit && selectedIndex === index ? (
                  <>
                    <EditItem
                      todo={todos}
                      index={index}
                      setShowEdit={setShowEdit}
                      setSelectedIndex={setSelectedIndex}
                    />
                  </>
                ) : (
                  <h2>{todo}</h2>
                )}

                <button
                  onClick={() => {
                    setTodos(todos.filter((_, i) => i !== index));
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setShowEdit(true);
                    setSelectedIndex(index);
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default TodoContainer;
