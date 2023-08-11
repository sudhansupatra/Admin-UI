import React from "react";
import DataTable from "react-data-table-component";

function CustomDataTable({
  columns,
  data,
  handleEdit,
  handleDelete,
  editingRowId,
  editName,
  setEditName,
  editEmail,
  setEditEmail,
  editRole,
  setEditRole,
  handleSaveEdit,
  cancelEdit,
  selectedRows,
  handleRowSelected,
}) {
  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      selectableRows
      onSelectedRowsChange={handleRowSelected}
    />
  );
}

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "black",
      color: "white",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "600",
      textTransform: "uppercase",
    },
  },
  cells: {
    style: {
      fontSize: "15px",
    },
  },
};

export default CustomDataTable;




