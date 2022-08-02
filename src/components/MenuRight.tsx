import * as React from "react";
import { ListBox } from 'primereact/listbox';
import {useState} from "react";


const MenuRight = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const item = [
        {
            name: "Dashboard",
            icon: "acascascacas"
        }, {
            name: "Incidents",
            icon: "acascascacas"
        }, {
            name: "Network",
            icon: "acascascacas"
        }, {
            name: "Risk Management",
            icon: "acascascacas"
        }, {
            name: "Policies",
            icon: "acascascacas"
        }, {
            name: "Reports",
            icon: "acascascacas"
        },{
            name: "Quarantine",
            icon: "acascascacas"
        },{
            name: "Compenies",
            icon: "acascascacas"
        },{
            name: "Accounts",
            icon: "acascascacas"
        },{
            name: "Sandbox Analyzer",
            icon: "acascascacas"
        }
    ];

    return (
        <div>
            <ListBox
                value={selectedValue}
                options={item}
                onChange={(e) => setSelectedValue(e.value)}
                optionLabel="name"
                style={{ width: '15rem' }} />
        </div>
    )
}

export default MenuRight;
