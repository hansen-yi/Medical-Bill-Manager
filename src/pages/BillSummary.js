import React, { useState } from 'react';
import BillForm from './BillForm';
import { useLocation } from 'react-router-dom';

// function BillSummary({ bill }) {
function BillSummary() {
    const location = useLocation();
    const bill = location.state?.bill;
    const [editing, setEditing] = useState(false);

    const edit = () => {
        setEditing(true);
    };

    if (editing) {
        return (
            <div>
                <BillForm finishEditing={() => setEditing(false)} billToEdit={bill} />
            </div>
        );
    }
    return (
        <div>
            {/* Display bill summary */}
            {JSON.stringify(bill, null, 2)}
            <button onClick={edit}>Edit</button>
        </div>
    );
};

export default BillSummary;
