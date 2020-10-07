import React, { useState } from 'react';
import { MenuMenu } from 'semantic-ui-react';
import { INavMenu, } from '../interfaces/site_interface';

const menu: Array<INavMenu> = [
    {title: "Flights", href: "", description: "", sub_menu: [
        {title: "Book flight", href: "#", description: "Book your next journey!", sub_menu: []},
        {title: "Manage flight", href: "#", description: "Manage your flight schedule, select seats, pre-order meals.", sub_menu: []},
        {title: "Flight information", href: "#", description: "Information of departure, arrivals and delays.", sub_menu: []},
        {title: "Destination", href: "#", description: "Our network consists of 93 routes and 60 destination from our hub!", sub_menu: []},
    ]},
    {title: "Specials", href: "", description: "", sub_menu: [
        {title: "Special offer", href: "#", description: "Check our special offer of this month. Book early to secure your special flight tickets", sub_menu: []},
        {title: "Travel packages", href: "#", description: "We offer range of packages", sub_menu: []},
        {title: "Flyers point", href: "#", description: "Earn flyers point from daily shoppings and get free flight tickets!", sub_menu: []}
    ]},
    {title: "Packages", href: "", description: "", sub_menu: [
        {title: "Flights + Hotels", href: "#", description: "Book Flights + Hotels combo and get discount", sub_menu: []},
        {title: "Hotels", href: "#", description: "Book place to stay through this web site. We offer specials for those who has booked flight with us!", sub_menu: []},
        {title: "Rent & Hire a car", href: "#", description: "We can help you hire a car from your house to departing airport, and from arriving airport to your destination", sub_menu: []},
        {title: "Taxi", href: "#", description: "We can arrange taxi and offer specials for our passengers", sub_menu: []},
        {title: "Tour", href: "#", description: "If you are going on holiday, then search local tours here", sub_menu: []},
    ]},
    {title: "Destination", href: "", description: "", sub_menu: [
        {title: "Domestic", href: "", description: "", sub_menu: [
            {title: "Adelaide", href: "#", description: "", sub_menu: []},
            {title: "Aris Springs", href: "#", description: "", sub_menu: []},
            {title: "Brisbane", href: "#", description: "", sub_menu: []},
            {title: "Cairns", href: "#", description: "", sub_menu: []},
            {title: "Darwin", href: "#", description: "", sub_menu: []},
            {title: "Gold Coast", href: "#", description: "", sub_menu: []},
            {title: "Melbourne", href: "#", description: "", sub_menu: []},
            {title: "Perth", href: "#", description: "", sub_menu: []},
            {title: "Sydney", href: "#", description: "", sub_menu: []},
            {title: "Tasmania", href: "#", description: "", sub_menu: []},
            {title: "Whitsundays", href: "#", description: "", sub_menu: []},
        ]},
        {title: "Oceania", href: "", description: "", sub_menu: [
            {title: "Auckland", href: "#", description: "", sub_menu: []},
            {title: "Christchurch", href: "#", description: "", sub_menu: []},
            {title: "Wellington", href: "#", description: "", sub_menu: []},
        ]},
        {title: "Asia", href: "", description: "", sub_menu: [
            {title: "Bangkok", href: "#", description: "", sub_menu: []},
            {title: "Hanoi", href: "#", description: "", sub_menu: []},
            {title: "Ho Chi Minh", href: "#", description: "", sub_menu: []},
            {title: "HongKong", href: "#", description: "", sub_menu: []},
            {title: "Osaka", href: "#", description: "", sub_menu: []},
            {title: "Seould", href: "#", description: "", sub_menu: []},
            {title: "Shanghai", href: "#", description: "", sub_menu: []},
            {title: "Singapore", href: "#", description: "", sub_menu: []},
            {title: "Taipei", href: "#", description: "", sub_menu: []},
            {title: "Tokyo", href: "#", description: "", sub_menu: []},
        ]},
        {title: "Middle East", href: "", description: "", sub_menu: [
            {title: "Dubai", href: "#", description: "", sub_menu: []},
        ]},
        {title: "North America", href: "", description: "", sub_menu: [
            {title: "Honolulu", href: "#", description: "", sub_menu: []},
            {title: "Los Angels", href: "#", description: "", sub_menu: []},
            {title: "San Francisco", href: "#", description: "", sub_menu: []},
        ]}
    ]},
    {title: "Flyers club", href: "", description: "", sub_menu: [
        {title: "About Flyers club", href: "#", description: "Passengers join Flyers club will receive special benefits. Click to see more details", sub_menu: []},
        {title: "Members", href: "", description: "", sub_menu: [
            {title: "Gold Travler", href: "#", description: "", sub_menu: []},
            {title: "Super Traveler", href: "#", description: "", sub_menu: []},
            {title: "Diamond Traveler", href: "#", description: "", sub_menu: []},
        ]},
        {title: "Offer", href: "", description: "", sub_menu: [
            {title: "Rounge", href: "#", description: "", sub_menu: []},
            {title: "Priority", href: "#", description: "", sub_menu: []},
            {title: "Gifts", href: "#", description: "", sub_menu: []},
        ]},
        {title: "Join Flyers club", href: "#", description: "Join our loyal Flyers club now", sub_menu: []},
    ]},
    {title: "Our services", href: "", description: "", sub_menu: [
        {title: "Classes", href: "", description: "", sub_menu: [
            {title: "First class", href: "#", description: "", sub_menu: []},
            {title: "Business class", href: "#", description: "", sub_menu: []},
            {title: "Premium Economy class", href: "#", description: "", sub_menu: []},
            {title: "Economy class", href: "#", description: "", sub_menu: []},
        ]},
        {title: "Rounge", href: "", description: "", sub_menu: [
            {title: "Sweet Rounge", href: "#", description: "", sub_menu: []},
            {title: "Business Rounge", href: "#", description: "", sub_menu: []},
            {title: "Traveler Rounge", href: "#", description: "", sub_menu: []},
        ]},
        {title: "Meals", href: "", description: "", sub_menu: [
            {title: "First class", href: "#", description: "", sub_menu: []},
            {title: "Business class", href: "#", description: "", sub_menu: []},
            {title: "Premium Economy class", href: "#", description: "", sub_menu: []},
            {title: "Economy class", href: "#", description: "", sub_menu: []},
            {title: "Pre-order meal", href: "#", description: "", sub_menu: []},
            {title: "Dietary requirement class", href: "#", description: "*If you need special meal request, such as Vegetarian, Vegan, Haral, Allergy, please click here to read more.", sub_menu: []},
        ]},
        {title: "Seats", href: "", description: "", sub_menu: [
            {title: "First class", href: "#", description: "", sub_menu: []},
            {title: "Business class", href: "#", description: "", sub_menu: []},
            {title: "Premium Economy class", href: "#", description: "", sub_menu: []},
            {title: "Economy class", href: "#", description: "", sub_menu: []},
            {title: "For kids", href: "#", description: "", sub_menu: []},
            {title: "Special assistance", href: "#", description: "", sub_menu: []},
        ]},

    ]},
    {title: "Fleet", href: "", description: "", sub_menu: [
        {title: "Airbus 320", href: "#", description: "", sub_menu: []},
        {title: "Airbus 330", href: "#", description: "", sub_menu: []},
        {title: "Airbus 350", href: "#", description: "", sub_menu: []},
        {title: "Boeing 777", href: "#", description: "", sub_menu: []},
        {title: "Boeing 787", href: "#", description: "", sub_menu: []},
    ]},
    {title: "Assistance", href: "", description: "", sub_menu: [
        {title: "At the airport", href: "#", description: "Check our departure policy and assistance at the airport", sub_menu: []},
        {title: "Request In-flight meals", href: "#", description: "We take care of all our passengers. We will help and assist any dietary requirements", sub_menu: []},
        {title: "Request special assistance", href: "#", description: "Do you need special assistance to make a booking?", sub_menu: []},
        {title: "Frequently asked questions", href: "#", description: "Check FAQ here", sub_menu: []},
        {title: "Ask questions to our team", href: "#", description: "We will assist you via chat, email or phone", sub_menu: []},
    ]}
]

export function Header(props: any) {

    const [submenuVisible, setSubmenuVisible] = useState(false);
    const [menuIndex, setMenuIndex] = useState(-1);
    const onHover = (index: number, enter: boolean) => {
        setMenuIndex(index);   
    }

    return (
        <header className="airline_header">
            <h1 className="h_pad v_pad">TT Airways</h1>
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
                    <SubMenuInGrid menu={menu[menuIndex].sub_menu}/>
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

const SubMenuInGrid = (props: any) => {
    return (
        <div className="submenu_grid">
            {props.menu.map((s: INavMenu, index: number) => {
                return (
                    <div className={s.href !== "" ? "submenu_grid_item clickable" : "submenu_grid_item"}>
                        {s.href !== "" ?
                            <a href={s.href}>
                                <h3>{s.title}</h3>
                                <p>{s.description}</p>
                            </a> :
                            <div>
                                <h3>{s.title}</h3>
                                <p>{s.description}</p>
                            </div>
                        }
                        
                        {s.sub_menu.map((s: INavMenu, index: number) => {
                            return (
                                <div className={s.href !== "" ? "submenu_grid_item clickable" : "submenu_grid_item"}>
                                    <a href={s.href}>
                                        <p>{s.title}</p>
                                        <p className="submenu_grid_item_2_description">{s.description}</p>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}





