import React, { useState } from "react";
import { RutineContext } from "./RutineContext";

const RutineProvider = ({ children }) => {
  
  const [rutine, setRutine] = useState([]);

  const addRutine = (item, quantity) => {
    if (isInRutine(item.id)) {
      const newRutine = rutine.map((rutineItem) => {
        if (rutineItem.item.id === item.id) {
          return { item, quantity: rutineItem.quantity };
        } else {
          return rutineItem;
        }
      });
      setRutine(newRutine);
    } else {
      setRutine([...rutine, { item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const newRutine = rutine.filter(
      (rutineItem) => rutineItem.item.id !== itemId || rutineItem.quantity > 1
    );
    const newRutine2 = newRutine.map((rutineItem) => {
      if (rutineItem.item.id === itemId) {
        return { item: rutineItem.item, quantity: rutineItem.quantity - 1 };
      } else {
        return rutineItem;
      }
    });
    setRutine(newRutine2);
  };

  const clear = () => {
    setRutine([]);
  };

  const isInRutine = (itemId) => {
    return rutine.some((rutineItem) => rutineItem.item.id === itemId);
  };

  const quantityRutine = rutine.reduce((acc, cur) => acc + cur.quantity, 0);
  const caloriesRutine = rutine.reduce((acc, cur) => acc + cur.item.calories * cur.quantity, 0);
  const minutesRutine = rutine.reduce((acc, cur) => acc + cur.item.estimatedTime * cur.quantity, 0);
  const repetitionRutine = rutine.reduce((acc, cur) => acc + cur.item.repetition * cur.quantity, 0);



  return (
    <RutineContext.Provider value={{clear, rutine, addRutine, removeItem, clear, quantityRutine, caloriesRutine, minutesRutine, repetitionRutine }}>
      {children}
    </RutineContext.Provider>
  );
};

export default RutineProvider;