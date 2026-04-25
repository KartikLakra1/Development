import { useState } from "react";
import TodoContainer from "./TodoContainer";

const TodoHero = () => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-start gap-4 flex-col p-3"
      style={{ backgroundImage: "url('/img/luffy-background-image.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-white letter-spacing-wide text-decoration-underline decoration-orange-600">
        Luffy's Todo App
      </h1>
      <div className="flex items-center justify-center gap-6 ">
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
      </div>
      <div
        className="flex flex-col items-center justify-start
  max-h-[90%] w-[90%] mx-auto
  backdrop-blur-lg shadow-lg 
  overflow-y-auto opacity-90 bg-slate-950 rounded-lg
  min-h-[100px] pb-1"
      >
        <TodoContainer
          todos={todos}
          setTodos={setTodos}
          show={show}
          setShow={setShow} // please jo likh raha hai dekhke likh bhot tagda bug tha bhai, dhayan rakh age se!!
        />
      </div>
    </div>
  );
};

export default TodoHero;
