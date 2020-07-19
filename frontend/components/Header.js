import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import Overlay from "./Overlay";
import useToggle from "../hooks/use-toggle";

const Header = () => {
    const { isOpen: isMenuOpen, toggle: toggleMenuOpen } = useToggle();

    return (
        <header>
            <nav className="">
                <button
                    className=""
                    type="button"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                    aria-hidden={!isMenuOpen}
                    onClick={toggleMenuOpen}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div>logo</div>
                <div>social</div>
            </nav>

            <Menu isOpen={isMenuOpen} toggleOpen={toggleMenuOpen} />
            <Overlay isOpen={isMenuOpen} onClick={toggleMenuOpen} />
        </header>
    );
};

export default Header;
