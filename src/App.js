import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faArrowUp,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faArrowUp, faArrowDown, faArrowLeft, faArrowRight);

export default function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    moveFocus();
  }, []);

  const moveFocus = () => {
    const node = ref.current;
    node.addEventListener("keydown", function (e) {
      const active = document.activeElement;

      if (e.keyCode === 37 && active.nextSibling) {
        active.nextSibling.focus();
      }
      if (e.keyCode === 39 && active.previousSibling) {
        active.previousSibling.focus();
      }
    });
  };

  return (
    <div className="App" ref={ref}>
      <label htmlFor="rows">Rows:</label>
      <input
        id="rows"
        type="number"
        onChange={(e) => setRows(parseInt(e.target.value))}
      />
      <br />
      <label htmlFor="rows">Columns:</label>
      <input
        id="rows"
        type="number"
        onChange={(e) => setCols(parseInt(e.target.value))}
      />
      <hr />
      <div className="nav-arrows">
        <buttton>
          <FontAwesomeIcon icon="arrow-up" />
        </buttton>
        <buttton>
          <FontAwesomeIcon icon="arrow-down" />
        </buttton>
        <buttton>
          <FontAwesomeIcon icon="arrow-left" />
        </buttton>
        <buttton>
          <FontAwesomeIcon icon="arrow-right" />
        </buttton>
      </div>

      <table>
        {Array.from({ length: rows }, (_, index) => (
          <tr key={index}>
            {Array.from({ length: cols }, (_, colIndex) => (
              <td key={`${index}-${colIndex}`} tabIndex="0"></td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
