import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import cn from "classnames";

const Menu = ({ isOpen, toggleOpen }) => {
    const classes = cn({
        "main-menu": true,
        "main-menu_open": isOpen,
        "main-menu_closed": !isOpen,
    });
    return (
        <div className={classes} id="navbarNav">
            <div className="top">
                <div className="logo">Logo</div>
                <button onClick={toggleOpen}>
                    <FontAwesomeIcon icon={faTimes} aria-hidden={!isOpen} />
                </button>
            </div>
            <ul className="menu">
                <li>
                    <Link href="/">
                        <a onClick={toggleOpen}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a onClick={toggleOpen}>About</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
