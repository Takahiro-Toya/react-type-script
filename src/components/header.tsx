import React, { useState } from 'react';
import { MenuMenu } from 'semantic-ui-react';
import { NavMenu } from '../interfaces/site_interface';

const menu = [
    new NavMenu("Flights", "#", [
        new NavMenu("Book flight", "#", []),
        new NavMenu("Manage flight", "#", []),
        new NavMenu("Flight schedule", "#", []),
        new NavMenu("Realtime flight information", "#", []),
        new NavMenu("Destinations", "#", [])
    ]),
    new NavMenu("Deals", "#", [
        new NavMenu("Monthly special", "#", []),
        new NavMenu("Budget flight", "#", []),
        new NavMenu("Travel package", "#", []),
        new NavMenu("Flyers", "#", [])
    ]),
    new NavMenu("Packages", "#", [
        new NavMenu("Flights + Hotels", "#", []),
        new NavMenu("Hotels", "#", []),
        new NavMenu("Insurance", "#", []),
        new NavMenu("Local tour", "#", []),
        new NavMenu("Car", "#", [])
    ]),
    new NavMenu("Destinations", "#", [
        new NavMenu("Domestic", "#", []),
        new NavMenu("Oceania", "#", []),
        new NavMenu("Asia", "#", []),
        new NavMenu("North America", "#", []),
        new NavMenu("Middle East", "#", []),
    ]),
    new NavMenu("In-flight", "#", [
        new NavMenu("Meals", "#", []),
        new NavMenu("Seats", "#", []),
        new NavMenu("Fleet", "#", [
            new NavMenu("Boeing 777", "#", []),
            new NavMenu("Boeing 787", "#", []),
            new NavMenu("Airbus 320", "#", []),
            new NavMenu("Airbus 330", "#", []),
            new NavMenu("Boeing 350", "#", []),
        ]),
    ]),
    new NavMenu("Flyers club", "#", [
        new NavMenu("Join flyers club", "#", []),
    ]),
    new NavMenu("Assistance", "#", [
        new NavMenu("At the airport", "#", []),
        new NavMenu("In-flight meals", "#", []),
        new NavMenu("Frequently asked question", "#", []),
    ]),
]

export function Header(props: any) {

    const [submenuVisible, setSubmenuVisible] = useState(false);
    const [menuIndex, setMenuIndex] = useState(-1);
    const onHover = (index: number, enter: boolean) => {
        setMenuIndex(index);   
    }

    return (
        <header className="airline_header">
            <h1 className="h_pad">TT Airways</h1>
            <nav>
                <ul 
                    onMouseEnter={() => setSubmenuVisible(true)}
                    onMouseLeave={() => {setSubmenuVisible(false)}}
                className="container">
                    <MenuItem index={0} menu={menu[0]} targetIndex={menuIndex} onHover={(e: boolean) => onHover(0, e)}></MenuItem>
                    <MenuItem index={1} menu={menu[1]} targetIndex={menuIndex} onHover={(e: boolean) => onHover(1, e)}></MenuItem>
                    <MenuItem index={2} menu={menu[2]} targetIndex={menuIndex} onHover={(e: boolean) => onHover(2, e)}></MenuItem>
                    <MenuItem index={3} menu={menu[3]} targetIndex={menuIndex} onHover={(e: boolean) => onHover(3, e)}></MenuItem>
                    <MenuItem index={4} menu={menu[4]} targetIndex={menuIndex} onHover={(e: boolean) => onHover(4, e)}></MenuItem>
                    <MenuItem index={5} menu={menu[5]} targetIndex={menuIndex} onHover={(e: boolean) => onHover(5, e)}></MenuItem>
                    <MenuItem index={6} menu={menu[6]} targetIndex={menuIndex} onHover={(e: boolean) => onHover(6, e)}></MenuItem>
                </ul>
            </nav>
            {submenuVisible && 
                <div className="submenu" onMouseEnter={() => setSubmenuVisible(true)} onMouseLeave={() => {setSubmenuVisible(false); setMenuIndex(-1)}}>
                    <SubMenuItem menu={menu[menuIndex]}/>
                </div>
            }
        </header>
    )
}

const MenuItem = (props: any) => {
    return (
        <li
            style={{
                color: props.targetIndex === props.index ? "#282c34" : "#fff", 
                backgroundColor: props.targetIndex === props.index ? "#fff" : "#282c34"}}
            onMouseEnter={() => props.onHover(true)}
            onMouseLeave={() => props.onHover(false)}
        >{props.menu.title}</li>
    )
}

const SubMenuItem = (props: any) => {
    return (
        <div>
            {props.visible && 
                <div style={{margin: 0, padding: "20px"}}>
                    <a href={props.menu.href}>{props.menu.title}</a>
                </div>
            }
             <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                {props.menu.sub_menu.map((s: NavMenu, index: number) => {
                    return (

                        <SubMenuItem key={index} menu={s} visible={true}/>
                    )
                })}
            </div>
        </div>
    )
}

