import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_sabor":
      return {
        ...state,
        sabor: action.payload,
      };
    case "add_tamanho":
      return { ...state, tamanho: action.payload };
    case "add_personalizacao":
      return { ...state, personalizar: action.payload };

    default:
      return state;
  }
};

const addSabor = (dispatch) => {
  return (data) => {
    dispatch({ type: "add_sabor", payload: data });
  };
};

const addTamanho = (dispatch) => {
  return (data) => {
    dispatch({ type: "add_tamanho", payload: data });
  };
};

const addPersonalizacao = (dispatch) => {
  return (data) => {
    dispatch({ type: "add_personalizacao", payload: data });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addSabor, addTamanho, addPersonalizacao },
  {
    sabor: "",
    tamanho: { text: "", valor: 0, tempo: 0 },
    personalizar: { text: "", valor: 0 },
  }
);
