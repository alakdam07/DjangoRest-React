import React, { useEffect, useState } from 'react';

import './App.css';

interface IData {
  id?: number;
  title?: string,
  date?: Date;
  completed?: boolean;
}

function App({ title, date, id, completed }: IData) {

  const [state, setstate] = useState<IData[]>([]);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/task-lists/`
      );
      const data = await response.json();
      console.log(data);
      setstate(data)

    } catch (error) {
      console.log(error, "FAILED TO FETCH");
    }

  };

  return (
    <div className="App">

      {
        state.map((i: IData) => <ul key={i.id}><li>{i.title}</li></ul>)
      }

    </div>
  );
}

export default App;
