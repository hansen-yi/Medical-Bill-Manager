import { useContext } from "react";
import { BillsContext } from "../App";
import { DataGrid } from '@mui/x-data-grid';

function Home() {
    const { bills } = useContext(BillsContext);
    const columns = [
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'hospital_name', headerName: 'Hospital' },
        { field: 'date_of_service', headerName: 'Date of Service', width: 200 },
        { field: 'bill_amount', headerName: 'Bill Amount' },
    ];

    console.log(bills);
    return (
        <div>
            <h1>Welcome to Your Bill Manager</h1>
            <a href="/upload">
                <button>Upload</button>
            </a>
            <DataGrid rows={bills} columns={columns} />
        </div >

    );
}

export default Home;