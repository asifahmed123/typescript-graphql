import { useReducer } from "react";

interface initialStateType {
  increment: number;
  reset: number;
  decrement: number;
}

interface ActionType {
  type: "increment" | "reset" | "decrement";
  payload: number;
}

const initialState: initialStateType = {
  increment: 0,
  reset: 0,
  decrement: 0,
};

// const reducer = (state: initialStateType, action: ActionType) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, increment: state.increment + action.payload }; // Fix here
//     case "reset":
//       return { ...state, increment: 0 }; // Fix here
//     case "decrement":
//       return { ...state, decrement: state.decrement - action.payload }; // Fix here

//     default:
//       throw new Error("Unhandled action type: " + action.type);
//   }
// };

const reducer = (state: initialStateType, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return { ...state, increment: state.increment + action.payload };
    case "reset":
      return { ...state, increment: 0 };
    case "decrement":
      return { ...state, increment: state.increment - action.payload }; // Fix here

    default:
      throw new Error("Unhandled action type: " + action.type);
  }
};


const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="w-full h-[100vh] mx-auto flex flex-col justify-center items-center">
      <h2 className="bg-lime-600 w-40 text-center text-white p-2 rounded mb-10 font-bold">
        Count: {state.increment} {/* Fix here */}
      </h2>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: 1,
            })
          }
          className="p-2 btn-accent rounded mx-2"
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "reset",
              payload: 0, // You can omit payload for reset
            })
          }
          className="p-2 btn-warning rounded mx-2"
        >
          Reset
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: 1,
            })
          }
          className="p-2 btn-info rounded mx-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
