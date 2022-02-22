import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import "./rarity.css";

function Rarity() {
  const data = React.useMemo(
    () => [
      {
        col1: "Backgrounds",
        col2: "20",
      },
      {
        col1: "Types",
        col2: "7",
      },
      {
        col1: "Cloths",
        col2: "177",
      },
      {
        col1: "Hair/Hats",
        col2: "45",
      },
      {
        col1: "Mouth",
        col2: "42",
      },
      {
        col1: "Eyes",
        col2: "33",
      },
      {
        col1: "Traits",
        col2: "362",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Total CarrotPerson ",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: " 8,450",
        accessor: "col2",
      },
    ],
    []
  );

  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <div className="s2">
      <div className="main-container">
        <h2 className="team">Rarity</h2>
        <p>
          Carrot Person is a collection of algorithmically generated pieces of
          art. Each CarrotPerson is unique.
        </p>

        <div className="about-wrapper">
          <table>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th>{column.render("Header")}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <td>{cell.render("Cell")}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div id="about" className="about-me">
            <img
              className="rarity"
              src="https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/2974.png"
              alt="CarrotPerson#00,NFT,YettieClub"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rarity;
