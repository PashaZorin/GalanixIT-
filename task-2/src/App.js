import React, { useState, useEffect } from "react";
import first from "./images/1.jpg";
import second from "./images/2.jpg";
import third from "./images/3.jpg";
import fourth from "./images/4.jpg";
import fifth from "./images/5.jpg";
import sixth from "./images/6.jpg";
import seventh from "./images/7.jpg";
import eighth from "./images/8.jpg";
import nineth from "./images/9.jpg";
import tenth from "./images/10.jpg";
import eleventh from "./images/11.jpg";
import twelfth from "./images/12.jpg";
import Popup from "./components/Popup";
const App = () => {
  const initialState = [
    { src: first, id: 1 },
    { src: second, id: 2 },
    { src: third, id: 3 },
    { src: fourth, id: 4 },
    { src: fifth, id: 5 },
    { src: sixth, id: 6 },
    { src: seventh, id: 7 },
    { src: eighth, id: 8 },
    { src: nineth, id: 9 },
    { src: tenth, id: 10 },
    { src: eleventh, id: 11 },
    { src: twelfth, id: 12 },
  ];
  const [list, setList] = useState(initialState);
  const [count, setCount] = useState();
  const date = new Date().toLocaleString().slice(0, -3);
  const [popup, setPopup] = useState({ active: false, img: "" });
  const togglePopup = (src) => {
    setPopup({ ...popup, active: !popup.active, img: src });
  };

  useEffect(() => {
    const deletedItemsId =
      JSON.parse(localStorage.getItem("deletedItems")) || [];
    const filteredItems = list.filter((el) => !deletedItemsId.includes(el.id));
    setList(filteredItems);
  }, []);
  useEffect(() => {
    setCount(list.length);
  }, [list]);

  const deleteItem = (id) => {
    const filteredItems = list.filter((el) => el.id !== id);
    const deletedItems = JSON.parse(localStorage.getItem("deletedItems")) || [];
    deletedItems.push(id);
    localStorage.setItem("deletedItems", JSON.stringify(deletedItems));
    setList(filteredItems);
  };

  const returnItems = (id) => {
    localStorage.setItem("deletedItems", JSON.stringify([]));
    setList(initialState);
  };

  return (
    <div className="main__conteiner">
      <div className="main">
        {popup && <Popup popup={popup} onClick={() => togglePopup()} />}
        <div className="main__title-conteiner">
          <h2 className="main__title">количество картинок : {count}</h2>
          <h4>дата : {date}</h4>
        </div>
        <ul className="main__content">
          {list.map((el) => (
            <li key={el.id} id={el.id} className="main__content-item">
              <img
                onClick={() => togglePopup(el.src)}
                className="main__content-img"
                src={el.src}
                alt={el.src}
              />
              <span onClick={() => deleteItem(el.id)}> X</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="main__btn-conteiner">
        <button className="main__btn" onClick={returnItems}>
          Восстановить
        </button>
      </div>
    </div>
  );
};

export default App;
