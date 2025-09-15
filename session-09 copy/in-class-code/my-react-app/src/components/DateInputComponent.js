import React from "react";
import { createRoot } from "react-dom/client";
import DateInputComponent from "./components/DateInputComponent";

function DateInputComponent() {
    const [date, setDate] = React.useState("");
    
    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setDate(newDate);
        console.log("Selected date:", newDate);
    };
    
    return (
        <div className="control">
            <input
                className="input"
                type="date"
                style={inputStyle}
                value={date}
                onChange={handleDateChange}
            />
        </div>
    );
}

export default DateInputComponent;