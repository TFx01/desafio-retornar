import React, {
  useContext,
  useCallback,
  useRef,
  forwardRef,
  memo,
} from "react";
import { Provider } from "./context/context";
import { Context } from "./context/context";

import { ContentJSX, Container } from "./styles/app";

import Button from "./components/Button";

const Screen = forwardRef((props, ref) => {
  const data = useContext(Context);
  const { state } = data;
  const [addSabor, addTamanho] = props.handlers;
  const [screen2] = props.screens;

  const handleSabor = useCallback(
    (value, target) => {
      addSabor(value);
      const actives = document.querySelectorAll(".active");

      if (target.classList.contains("active")) {
        addSabor("");
        target.classList.remove("active");
      } else {
        target.classList.add("active");
        for (let element of actives) {
          element.classList.remove("active");
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleTamanho = useCallback((value, target) => {
    switch (value) {
      case "Medio (500Ml)":
        addTamanho({ text: value, valor: 12, tempo: 7 });
        break;
      case "Pequeno (300Ml)":
        addTamanho({ text: value, valor: 10, tempo: 5 });
        break;
      case "Grande (700Ml)":
        addTamanho({ text: value, valor: 15, tempo: 9 });
        break;
      default:
        break;
    }

    const actives = document.querySelectorAll(".active__tamanho");

    if (target.classList.contains("active__tamanho")) {
      addTamanho("");
      target.classList.remove("active__tamanho");
    } else {
      target.classList.add("active__tamanho");
      for (let element of actives) {
        element.classList.remove("active__tamanho");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextPage = () => {
    if (state.sabor !== "" && state.tamanho !== "") {
      ref.current.classList.toggle("hidden");
      screen2.current.classList.remove("hidden");
    } else alert("Selecione alguma opção.");
  };

  return (
    <section ref={ref} className="screen">
      <header>
        <h1>Escolha seu açai</h1>
      </header>

      <div className="choose">
        <h2>Sabor:</h2>
        <div className="buttons">
          <Button handleValue={handleSabor} value="Morango" text="Morango" />
          <Button handleValue={handleSabor} value="Banana" text="Banana" />
          <Button handleValue={handleSabor} value="Kiwi" text="Kiwi" />
        </div>
      </div>
      <div className="choose">
        <h2>Tamanho:</h2>
        <div className="buttons">
          <Button handleValue={handleTamanho} value="Pequeno (300Ml)" />
          <Button handleValue={handleTamanho} value="Medio (500Ml)" />
          <Button handleValue={handleTamanho} value="Grande (700Ml)" />
        </div>
      </div>

      <div className="button">
        <button onClick={handleNextPage}>Avançar</button>
      </div>
    </section>
  );
});

const Screen2 = forwardRef(({ addPersonalizacao, screens }, ref) => {
  const [screen3] = screens;

  const handlePersonalizar = useCallback((value, target) => {
    addPersonalizacao({ text: value, valor: 3 });

    const actives = document.querySelectorAll(".active__personalizar");

    if (target.classList.contains("active__personalizar")) {
      addPersonalizacao({ text: "", valor: 0 });
      target.classList.remove("active__personalizar");
    } else {
      target.classList.add("active__personalizar");
      for (let element of actives) {
        element.classList.remove("active__personalizar");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextPage = () => {
    ref.current.classList.toggle("hidden");
    screen3.current.classList.remove("hidden");
  };

  return (
    <section ref={ref} className="screen hidden">
      <header>
        <h1>Personalizar</h1>
      </header>

      <div className="choose">
        <h2>Personalizar:</h2>
        <div className="buttons">
          <button onClick={(e) => handlePersonalizar("Granola", e.target)}>
            Granola
          </button>
          <button onClick={(e) => handlePersonalizar("Paçoca", e.target)}>
            Paçoca
          </button>
          <button onClick={(e) => handlePersonalizar("Leite Ninho", e.target)}>
            Leite Ninho
          </button>
        </div>
      </div>

      <div className="button">
        <button onClick={handleNextPage}>Finalizar pedido</button>
      </div>
    </section>
  );
});

const Screen3 = memo(
  forwardRef((props, ref) => {
    const data = useContext(Context);
    const { state } = data;
    const [screen1] = props.screens;

    const handleNextPage = () => {
      ref.current.classList.toggle("hidden");
      screen1.current.classList.remove("hidden");
    };

    return (
      <section ref={ref} className="screen hidden">
        <header>
          <h1>Resumo do pedido:</h1>
        </header>

        <div className="item">
          <h2>Tamanho:</h2>
          <div>
            <p>-{state.tamanho.text}</p>
            <p>R${state.tamanho.valor},00</p>
          </div>
        </div>
        <div className="item">
          <h2>Sabor:</h2>
          <div>
            <p>-{state.sabor}</p>
            <p>R$0,00</p>
          </div>
        </div>
        <div className="item">
          <h2>Personalização:</h2>
          <div>
            <p>-{state.personalizar.text}</p>
            <p>R${state.personalizar.valor},00</p>
          </div>
        </div>

        <div className="item__result">
          <p>
            Valor total: R${state.tamanho.valor + state.personalizar.valor},00
          </p>
          <p>Tempo de preparo: {state.tamanho.tempo}min</p>
        </div>

        <div className="button">
          <button onClick={handleNextPage}>Refazer pedido</button>
        </div>
      </section>
    );
  })
);
const Screens = (data) => {
  const { addSabor, addTamanho, addPersonalizacao } = data;
  const screen1 = useRef();
  const screen2 = useRef();
  const screen3 = useRef();

  return (
    <Container>
      <div className="screens">
        <Screen
          ref={screen1}
          handlers={[addSabor, addTamanho]}
          screens={[screen2]}
        />
        <Screen2
          ref={screen2}
          addPersonalizacao={addPersonalizacao}
          screens={[screen3]}
        />
        <Screen3 ref={screen3} screens={[screen1]} />
      </div>
    </Container>
  );
};

function Content() {
  const data = useContext(Context);

  return <ContentJSX>{Screens(data)}</ContentJSX>;
}

function App() {
  return (
    <Provider>
      <Content />
    </Provider>
  );
}

export default App;
