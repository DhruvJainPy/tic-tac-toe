import React, { useState } from "react";
import logo from "../logo.png";
const Board = () => {
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(0);
  const defaultTiles = [
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
    { id: 9, value: "" },
  ];

  const [tiles, setTiles] = useState(defaultTiles);
  const handleTurn = (tile) => {
    if (winner === null) {
      setTiles(
        tiles.map((t) => {
          if (t.id === tile.id) {
            if (player) {
              t.value = "O";
            } else {
              t.value = "X";
            }
            return t;
          }
          return t;
        })
      );
      setPlayer((player) => !player);
      setTurn((turn) => turn + 1);
      checkWinner();
    }
  };
  const reset = () => {
    setTiles(defaultTiles);
    setPlayer(true);
    setWinner(null);
    setTurn(0);
  };
  const checkWinner = () => {
    if (
      tiles[0].value === tiles[1].value &&
      tiles[0].value === tiles[2].value &&
      tiles[0].value !== ""
    ) {
      return setWinner(() => tiles[0].value);
    } else if (
      tiles[0].value !== "" &&
      tiles[0].value === tiles[3].value &&
      tiles[0].value === tiles[6].value
    ) {
      return setWinner(() => tiles[0].value);
    } else if (
      tiles[0].value !== "" &&
      tiles[0].value === tiles[4].value &&
      tiles[0].value === tiles[8].value
    ) {
      return setWinner(() => tiles[0].value);
    } else if (
      tiles[1].value !== "" &&
      tiles[1].value === tiles[4].value &&
      tiles[1].value === tiles[7].value
    ) {
      return setWinner(() => tiles[1].value);
    } else if (
      tiles[2].value !== "" &&
      tiles[2].value === tiles[5].value &&
      tiles[2].value === tiles[8].value
    ) {
      return setWinner(() => tiles[2].value);
    } else if (
      tiles[2].value !== "" &&
      tiles[2].value === tiles[4].value &&
      tiles[2].value === tiles[6].value
    ) {
      return setWinner(() => tiles[2].value);
    } else if (
      tiles[3].value !== "" &&
      tiles[3].value === tiles[4].value &&
      tiles[3].value === tiles[5].value
    ) {
      return setWinner(() => tiles[3].value);
    } else if (
      tiles[6].value !== "" &&
      tiles[6].value === tiles[7].value &&
      tiles[6].value === tiles[8].value
    ) {
      return setWinner(() => tiles[6].value);
    } else {
      if (turn === 8) {
        return setWinner(() => "Tie!");
      }
    }
  };
  return (
    <div className="container-fluid">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center d-md-flex justify-content-md-center">
          <button
            className={`btn ${
              player ? "btn-success" : "btn-light"
            }  my-2 my-md-3 mx-2 mx-md-3 fw-bold`}
          >
            Player O
          </button>
          <button
            className="btn btn-outline-dark  my-2 my-md-3 mx-2 mx-md-3"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
          <button
            className={`btn ${
              !player ? "btn-success" : "btn-light"
            }  my-2 my-md-3 mx-2 mx-md-3 fw-bold`}
          >
            Player X
          </button>
        </div>
        <div className="col-10 col-md-4">
          <div className="row text-center">
            {tiles.map((tile) => {
              return (
                <div
                  className={`col-4 display-1 bg-dark text-white p-1 p-md-2 ${
                    tile.id > 6 ? "border1 border-bottom-0" : "border1"
                  } ${tile.id % 3 === 0 ? "border-end-0" : ""}`}
                  key={tile.id}
                  style={{ minHeight: "10vh" }}
                >
                  <button
                    className="bg-dark text-white border-0 h-100 w-100 text-center"
                    disabled={tile.value !== ""}
                    key={tile.id}
                    onClick={() => handleTurn(tile)}
                  >
                    {tile.value}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`modal ${winner !== null ? "modal-dialog-centered" : ""}`}
        id="exampleModal"
        tabIndex="-1"
      >
        <div className="modal-dialog mx-4 mx-md-auto">
          <div
            className="modal-content text-center p-3 border-dark shadow-lg"
            style={{ minWidth: "20rem", maxWidth: "25rem" }}
          >
            <div className="modal-header border-dark">
              <img src={logo} alt="" className="mx-3" />
              <h5 className="modal-title" id="exampleModalLabel">
                Tic-Tac-Toe
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => reset()}
              ></button>
            </div>
            <div className="modal-body">
              <p className="h3 p-3">
                {winner === "Tie!" ? "Tie!" : `${winner} wins!`}
              </p>
            </div>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
