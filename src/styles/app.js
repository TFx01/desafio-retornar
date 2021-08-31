import styled from "styled-components";

export const ContentJSX = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Container = styled.div`
  background: #fff;
  padding: 3rem 4rem;
  border-radius: 10px;
  width: clamp(30rem, 80vw, 70rem);
  header {
    margin-bottom: 3rem;
    h1 {
      text-align: center;
      font-size: 2.6rem;
      color: #42258c;
    }
  }

  .choose {
    margin: 2rem 0;
    h2 {
      margin: 1rem 0;
      color: #42258c;
      font-weight: 500;
    }

    p {
      font-size: 1.4rem;
    }

    .buttons {
      display: grid;
      grid-auto-flow: column;
      gap: 2.5rem;

      button.active {
        background: #42258c;
        color: #fff;
      }

      button.active__tamanho {
        background: #42258c;
        color: #fff;
      }

      button.active__personalizar {
        background: #42258c;
        color: #fff;
      }

      button {
        background: none;
        border: none;
        outline: none;
        border-radius: 100px;
        border: 1px solid #42258c;
        padding: 1rem;
        cursor: pointer;
        font-family: var(--main-font);
        color: #42258c;
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

        :hover {
          background: #42258c;
          color: #fff;
        }
      }
    }
  }

  .item {
    margin: 2rem 0 0;

    > div {
      display: flex;
      justify-content: space-between;
    }

    h2 {
      margin: 1rem 0;
      color: #42258c;
      font-size: 2rem;
      font-weight: 700;
    }

    p {
      color: #42258c;
      font-size: 1.4rem;
    }
  }

  .item__result {
    margin-top: 3rem;

    p {
      color: #42258c;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  .button {
    width: 100%;
    display: flex;
    button {
      background: none;
      border: none;
      outline: none;
      border-radius: 10px;
      border: 1px solid #42258c;
      padding: 1rem 1.4rem;
      color: #42258c;
      cursor: pointer;
      font-weight: 700;
      margin-left: auto;
      font-family: var(--main-font);
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      :hover {
        background: #42258c;
        color: #fff;
      }
    }
  }

  .screens {
    display: flex;
    width: 100%;

    .screen {
      width: 100%;
    }
    .screen.hidden {
      display: none;
    }
  }
`;
