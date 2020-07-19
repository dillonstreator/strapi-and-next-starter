import cn from "classnames";

const Overlay = ({ isOpen, onClick, className = "", ...rest }) => {
    if (!isOpen) return null;

    const classes = cn(["overlay", className]);
    return <div {...rest} className={classes} onClick={onClick}></div>;
};

export default Overlay;
