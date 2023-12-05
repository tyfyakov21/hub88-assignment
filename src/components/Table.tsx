import { css } from "@emotion/css";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Country } from "../pages/MainPage";

const columnHelper = createColumnHelper<Country>();

const columns = [
  columnHelper.accessor((row) => row.name, {
    id: "countryName",
    cell: (info) => info.getValue(),
    header: () => "Country Name",
  }),
  columnHelper.accessor("code", {
    header: () => "Country Code",
    cell: (info) => info.renderValue(),
  }),
];

export const Table = ({ data }: { data: Country[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={styles.container} data-testid="main_page_table">
      <thead data-testid="table_head">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className={styles.headerCell}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody data-testid="table_body">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} data-testid={`table_row_${row.id}`}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={styles.cell}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  container: css`
    width: "100%";
    height: "100%";
    margin: 20px;
    border: 1px solid lightgrey;
  `,
  headerCell: css`
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding: 2px 4px;
  `,
  cell: css`
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
  `,
};
