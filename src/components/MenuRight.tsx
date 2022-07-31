import * as React from "react";
import {Sidebar} from "primereact/sidebar";
import { ListBox } from 'primereact/listbox';
import {useState} from "react";


const MenuRight = ({isVisible}) => {
    const [selectedItem, setSelectedItem] = useState(null);

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
    ]
    return (
        <div className={"Customized-header-container"}>
            <Sidebar visible={isVisible}  position="left" onHide={() => setVisible(false)}>
                <div>

                    <ListBox
                        value={selectedItem}
                        style={{ width: '15rem' }}
                        listStyle={{ height: '250px' }}
                        options={item}
                        onChange={(e) => setSelectedItem(e.value)} />

                </div>
            </Sidebar>
        </div>
    )
}

export default MenuRight;
