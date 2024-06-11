import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
    // const [devices, setDevices] = useState([]);
    // const [newDevice, setNewDevice] = useState("");
    //
    // const handleAddDevice = () => {
    //     if (newDevice) {
    //         setDevices([...devices, newDevice]);
    //         setNewDevice("");
    //     }
    // };

    return (
        <div className="dashboard-container">
            <h2>My Devices</h2>
            {/*<div className="device-list">*/}
            {/*    {devices.map((device, index) => (*/}
            {/*        <div key={index} className="device-item">*/}
            {/*            {device}*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            {/*<div className="add-device">*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        value={newDevice}*/}
            {/*        onChange={(e) => setNewDevice(e.target.value)}*/}
            {/*        placeholder="Enter new device"*/}
            {/*    />*/}
            {/*    <button onClick={handleAddDevice}>Add Device</button>*/}
            {/*</div>*/}
        </div>
    );
};

export default Dashboard;
