import React, {useState} from 'react';
import { Dropdown } from 'react-bootstrap';

export function Header(props: any) {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <header className="airline_header">
            <h1 className="h_pad">TT Airways</h1>
            <nav>
                <ul className="container">
                    <li>Flights</li>
                    <li>Deals</li>
                    <LiWithSubmenu sub={[{title: "Insurance",href: ""}, {title: "Flight + Hotels", href: ""}]}>
                        Packages
                    </LiWithSubmenu>
                    <li>Packages</li>
                    <li>Destinations</li>
                    <li>Fleets</li>
                    <li>Flyers</li>
                    <li>Assistance</li>
                </ul>
            </nav>
            {props.children}
        </header>
    )
}

const LiWithSubmenu = (props: any) => {

    const [onHover, setOnHover] = useState(false);
    return (
        <div>
            <li
                onMouseEnter={() => setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}
            >{props.children}</li>
            {onHover && (
                <ul className="dropdown">
                    {props.sub.map((s :any) => {
                        return (
                            <li>
                                {s.title}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}