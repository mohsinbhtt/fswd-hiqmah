import { useReducer } from "react";

const initialState = {
  current: 0,         // current question index
  selected: null,     // selected option
  score: 0,           // total score
  status: "ready"     // ready | active | finished
};

function quizReducer(state, action) {
  switch (action.type) {
    case "START":
      return { ...state, status: "active" };

    case "SELECT_OPTION":
      return { ...state, selected: action.payload };

    case "NEXT_QUESTION":
      const isCorrect = action.payload.correct;

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        current: state.current + 1,
        selected: null,
      };

    case "FINISH":
      return { ...state, status: "finished" };

    default:
      return state;
  }
}
