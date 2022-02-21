import React, { useState, useEffect } from "react";
import { useTable } from "react-table";

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    
            <div>
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
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: "10px",
                                width: "100%",
                                display: "inline",
                                backgroundColor: "#f0ead6",
                              }}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
         
  );
}

export default Rarity;
