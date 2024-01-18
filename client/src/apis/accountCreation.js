import React, { useState, useEffect } from 'react';

const DateTimeComponent = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1>Current Date and Time:</h1>
            <p>{currentDateTime.toLocaleString()}</p>
        </div>
    );
};

export default DateTimeComponent;
