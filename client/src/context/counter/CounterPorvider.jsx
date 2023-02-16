import React, { useState } from "react";
import { CounterContext } from "./CounterContext";

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCounter(item.id)) {
      const newCounter = counter.map((counterItem) => {
        if (counterItem.item.id === item.id) {
          return { item, quantity: counterItem.quantity + 1 };
        } else {
          return counterItem;
        }
      });
      setCounter(newCounter);
    } else {
      setCounter([...counter, { item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const newCounter = counter.filter(
      (counterItem) => counterItem.item.id !== itemId || counterItem.quantity > 1
    );
    const newCounter2 = newCounter.map((counterItem) => {
      if (counterItem.item.id === itemId) {
        return { item: counterItem.item, quantity: counterItem.quantity - 1 };
      } else {
        return counterItem;
      }
    });
    setCounter(newCounter2);
  };

  const clear = () => {
    setCounter([]);
  };

  const isInCounter = (itemId) => {
    return counter.some((counterItem) => counterItem.item.id === itemId);
  };

  const quantityCounter = counter.reduce((acc, cur) => acc + cur.quantity, 0);
  const priceCounter = counter.reduce((acc, cur) => acc + cur.item.price * cur.quantity, 0);

  return (
    <CounterContext.Provider value={{ counter, addItem, removeItem, clear, quantityCounter, priceCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;