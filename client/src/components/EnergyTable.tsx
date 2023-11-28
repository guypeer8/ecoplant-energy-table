import { useState } from 'react';
import { Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

import useEnergyApi from '../hooks/useEnergyApi';

const columnsSharedFields: Partial<GridColDef> = { align: 'left', headerAlign: 'left', flex: 1 };
const columns: GridColDef[] = [
  { field: 'timestamp', headerName: 'Timestamp', ...columnsSharedFields },
  { field: 'kwh', headerName: 'kWh', type: 'number', ...columnsSharedFields },
  { field: 'pressure', headerName: 'Pressure', type: 'number', ...columnsSharedFields },
  { field: 'temperature', headerName: 'Temperature', type: 'number', ...columnsSharedFields },
];

const EnergyTable: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [paginationParams, setPaginationParams] = useState({ page: 0, pageSize: 20 });

  const { data, error, isLoading } = useEnergyApi(paginationParams, startDate, endDate);

  if (error) {
    return <Alert severity="error">An error has occurred, please refresh.</Alert>;
  }

  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row" alignItems="center">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
          />
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={setEndDate}
          />
        </LocalizationProvider>
      </Stack>
      
      <div>
        <DataGrid
          pagination
          columns={columns}
          disableColumnMenu
          autoHeight={false}
          loading={isLoading}
          disableColumnFilter
          rowCount={data.count}
          paginationMode="server"
          disableRowSelectionOnClick
          paginationModel={paginationParams}
          pageSizeOptions={[10, 20, 50, 100]}
          sx={{ maxHeight: 'calc(100vh - 100px)' }}
          onPaginationModelChange={setPaginationParams}
          rows={data.rows.map((row) => ({ ...row, timestamp: new Date(row.timestamp).toLocaleString() }))}
        />
      </div>
    </Stack>
  );
};

export default EnergyTable;
