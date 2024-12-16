import "./App.css";
import React, { useState } from "react";

function App() {
  const [table, setTable] = useState([
    { serial: "1", date: "2022-09-01", views: 100, article: "Article 1" },

    { serial: "2", date: "2023-09-01", views: 100, article: "Article 1" },

    { serial: "3", date: "2023-09-02", views: 150, article: "Article 2" },

    { serial: "4", date: "2023-09-02", views: 120, article: "Article 3" },

    { serial: "5", date: "2020-09-03", views: 200, article: "Article 4" }
  ]);
  const clickHandler = (sortType) => {
    const mySorted = table.slice();
    console.log(mySorted);
    if (sortType === "date") {
      console.log("Sorting by date");
      mySorted.sort((a, b) => {
        const bDate = new Date(b.date).getTime();
        const aDate = new Date(a.date).getTime();

        if (bDate === aDate) {
          return b.views - a.views;
        } else {
          return bDate - aDate;
        }
      });
    }

    if (sortType === "views") {
      console.log("Sorting by views");
      mySorted.sort((a, b) => {
        const bDate = new Date(b.date).getTime();
        const aDate = new Date(a.date).getTime();

        if (a.views === b.views) {
          return bDate - aDate;
        } else {
          return b.views - a.views;
        }
      });
    }
    setTable(mySorted);
  };
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={() => clickHandler("date")}>Sort by Date</button>
      <button onClick={() => clickHandler("views")}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>S_No</th>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row) => {
            return (
              <tr key={row.serial}>
                <td>{row.serial}</td>
                <td>{row.date}</td>
                <td>{row.views}</td>
                <td>{row.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
