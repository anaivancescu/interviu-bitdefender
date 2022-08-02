import * as React from "react";
import { Dropdown } from 'primereact/dropdown';
import {useState} from "react";


const CustomizedHeader = () => {
    const [selectedValue, setSelectedValue] = useState<any>("Welcome, John Smith");

    const cities = [
        { name: "Welcome, Anca" },
        { name: "Welcome, Maria" },
    ];
    const onCityChange2 = (e: {value: any} ) => {
            setSelectedValue(e.value);
    }
    return (
        <div className={"Customized-header-container"}>
            <div className={"icons"}>
            <i className="pi pi-bell"  style={{'fontSize': '32px', color: '#4C4C4C', marginLeft: 20}}></i>
            <i className="pi pi-question-circle"  style={{'fontSize': '32px',color: '#4C4C4C', marginLeft: 20}}></i>
            <i className="pi pi-box"  style={{'fontSize': '32px',color: '#4C4C4C', marginLeft: 20}}></i>
            </div>
            <div className={"drop-down"}>
            <Dropdown value={selectedValue} options={cities} onChange={onCityChange2} optionLabel="name" editable />
            </div>
        </div>
    )
}

export default CustomizedHeader
