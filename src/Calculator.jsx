import { useEffect, useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState(" ");
  const [brdClr, setBrdClr] = useState(false);
  const allowedCharacters = /^[0-9./*+\- ]*$/;

  const handleDisplay = (e) => {
    setDisplay(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      try {
        setDisplay(eval(display));
      } catch (err) {
        setBrdClr(true);
        alert(
          `Your input is not correct\n Possible Errors: \n 1)preceding 0's also not allowed \n 2)only the values present in the below buttons are allowed`
        );
      }
    }
  };

  useEffect(() => {
    if (!allowedCharacters.test(display)) {
      setBrdClr(true);
    } else {
      setBrdClr(false);
    }
  }, [display]);

  return (
    <div className="main-container">
      <h1>Calculator</h1>
      <div className="container">
        <div className="user-inp">
          <input
            type="text"
            className={brdClr ? "red-brd" : "black-brd"}
            onChange={handleDisplay}
            onKeyDown={handleEnter}
            value={display}
          />
        </div>
        <div className="user-btn-inp">
          <div className="cal-row">
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + "1");
              }}
            >
              1
            </button>
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + "2");
              }}
            >
              2
            </button>
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + "3");
              }}
            >
              3
            </button>
            <button
              className="btn btn-warning col"
              onClick={() => {
                setDisplay(display + " + ");
              }}
            >
              +
            </button>
          </div>
          <div className="cal-row">
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + "4");
              }}
            >
              4
            </button>
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + "5");
              }}
            >
              5
            </button>
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + "6");
              }}
            >
              6
            </button>
            <button
              className="btn btn-warning col"
              onClick={() => {
                setDisplay(display + " - ");
              }}
            >
              -
            </button>
          </div>
          <div className="cal-row">
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + "7");
              }}
            >
              7
            </button>
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + "8");
              }}
            >
              8
            </button>
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + "9");
              }}
            >
              9
            </button>
            <button
              className="btn btn-warning col"
              onClick={() => {
                setDisplay(display + " * ");
              }}
            >
              *
            </button>
          </div>
          <div className="cal-row">
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + "0");
              }}
            >
              0
            </button>
            <button
              className="btn btn-primary col"
              onClick={() => {
                setDisplay(display + ".");
              }}
            >
              .
            </button>
            <button
              className="btn btn-success col"
              onClick={() => {
                setDisplay(eval(display));
              }}
            >
              =
            </button>
            <button
              className="btn btn-warning col"
              onClick={() => {
                setDisplay(display + " / ");
              }}
            >
              /
            </button>
          </div>
          <div className="center-btn cal-row">
            <button
              className="btn btn-danger"
              onClick={() => {
                setDisplay("");
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
