import { useState } from 'react';
import './BorderlessButton.css';

const BorderlessButton = ({ text, iconClass, hoverIconClass, disabled }) => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <button
            className={`borderless-btn ${active && 'bls-btn-active'} ${
                hover & !disabled && 'bls-btn-hover'
            } ${disabled && 'bls-btn-disabled'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onMouseOut={() => {
                setActive(false);
                setHover(false);
            }}
        >
            <i
                className={`${
                    hover && !disabled ? hoverIconClass : iconClass
                } bls-btn-icon`}
            />
            {text}
        </button>
    );
};

export default BorderlessButton;