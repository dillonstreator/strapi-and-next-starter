import { useState } from "react";

export default (defaultOpened = false) => {
    const [isOpen, setIsOpen] = useState(defaultOpened);
    const toggle = () => setIsOpen((prev) => !prev);
    return { isOpen, toggle };
};
