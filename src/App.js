import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BillForm from './pages/BillForm';
import BillSummary from './pages/BillSummary'
import { createContext, useEffect, useState } from "react";

export const BillsContext = createContext();

const getExisitingBills = () => {
    const storedBills = localStorage.getItem("bills");
    return storedBills ? JSON.parse(storedBills) : [];
}

const App = () => {
    const [bills, setBills] = useState(getExisitingBills);

    const addBill = (bill) => {
        const idNum = bills.length;
        bill.id = idNum;
        setBills((prevBills) => [...prevBills, bill]);
        return bill;
    };

    const editBill = (updatedBill) => {
        setBills((prevBills) => {
            const updatedBills = prevBills.map((bill) =>
                bill.id === updatedBill.id ? updatedBill : bill
            );
            return updatedBills;
        });
        return updatedBill;
    };

    useEffect(() => {
        localStorage.setItem("bills", JSON.stringify(bills));
    }, [bills]);

    return (
        <BillsContext.Provider value={{ bills, addBill, editBill }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/upload" element={<BillForm />} />
                    <Route path="/summary" element={<BillSummary />} />
                </Routes>
            </Router>
        </BillsContext.Provider>

    );
};

export default App;