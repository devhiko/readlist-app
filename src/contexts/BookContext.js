// context container function
import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Origin', id: 1 },
    { title: 'Strange Night', id: 2 },
    { title: 'Transition', id: 3 },
    { title: 'Pride and Prejudice', id: 4 }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;