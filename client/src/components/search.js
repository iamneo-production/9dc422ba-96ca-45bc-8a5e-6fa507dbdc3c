import "./styles.css";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function App() {
  const [search, setSearch] = useState("");
  const [hideInput, setHideInput] = useState(false);

  return (
    <div className="App">
      <div className="input-contain">
        <h2 onClick={() => setHideInput(!hideInput)}>SEARCH</h2>
        <div className="row">
          <AiOutlineSearch className={hideInput ? "hide" : "icon"} />
          <input
            className={hideInput ? "hide" : null}
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* {
        words
          .filter((word) => {
            if (search === "") {
              return (
                <div>
                  <p>{word}</p>
                </div>
              );
            } else if (word.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div>
                  <p>{word}</p>
                </div>
              );
            }
          })
          .map((word) => {
            return (
              <div className="container">
                <p>{word}</p>
              </div>
            );
          })
      } */}
    </div>
  );
}
