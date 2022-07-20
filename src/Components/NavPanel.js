import React from "react";
import {navPanelItems} from "./NavPanelItems";
import NavPanelItems from "./NavPanelItems";

const NavPanel = () => {
    return(
        <nav>
            <ul className="menus">
                {navPanelItems.map((menu, index) => {
                    return <NavPanelItems items={menu} key={index} />
                })}
            </ul>
        </nav>
    )
}

export default NavPanel