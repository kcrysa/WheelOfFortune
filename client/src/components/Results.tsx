import { Paper, TableContainer } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import { IQuizResponse } from "../data/questions";

const Results: React.FC = () => {
  const [responses, setResponses] = useState<IQuizResponse[]>([]);

  useEffect(() => {
    const getResponses = async () => {
      const { data } = await axios.get("/api/responses");
      setResponses(data);
    };

    getResponses();
  }, []);

  const columns: GridColDef[] = [
    { field: "date", headerName: "Date", width: 250 },
    {
      field: "prize",
      headerName: "Prize",
      width: 250,
    },
    {
      field: "isCorrect",
      headerName: "Correct",
      width: 150,
      type: "boolean",
    },
    {
      field: "aborted",
      headerName: "Aborted",
      width: 150,
      type: "boolean",
    },
    {
      field: "questionNumber",
      headerName: "Question",
      width: 150,
      type: "number",
    },
    {
      field: "correctAnswer",
      headerName: "Correct answer",
      width: 150,
      type: "number",
    },
    {
      field: "selectedAnswer",
      headerName: "User answer",
      width: 150,
      type: "number",
    },
  ];

  const getRowId = (data: any) => {
    return data.date;
  };

  return (
    <div className="content">
      <TableContainer
        component={Paper}
        style={{ height: "90vh", width: "90%" }}
      >
        <DataGrid
          rows={responses}
          columns={columns}
          getRowId={getRowId}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 50 },
            },
          }}
          pageSizeOptions={[50, 100]}
        />
      </TableContainer>
    </div>
  );
};

export default Results;
