import { useMemo } from "react";
import { useTable } from "react-table";

const TableComponent = ({ data, loading }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Country Name",
        accessor: "name",
      },
      {
        Header: "Code",
        accessor: "abbreviation",
      },
      {
        Header: "Capital",
        accessor: "capital",
      },
      {
        Header: "Ph Code",
        accessor: "phone",
      },
      {
        Header: "Population",
        accessor: "population",
      },
      {
        Header: "Flag",
        Cell: ({ row }) => (
          <img
            width={30}
            height={30}
            src={row.original.media.flag}
            alt="flag"
          />
        ),
      },
      {
        Header: "Emblem",
        Cell: ({ row }) => (
          <img
            width={30}
            height={30}
            src={row.original.media.emblem}
            alt="emblem"
          />
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      style={{ border: "1px solid grey", width: "100%", marginTop: "20px" }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            style={{ backgroundColor: "#f1f1f1" }}
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} style={{ padding: "10px" }}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            Loading ...
          </div>
        )}
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={{ textAlign: "center", borderBottom: "1px solid grey" }}
            >
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} style={{ padding: "10px" }}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
