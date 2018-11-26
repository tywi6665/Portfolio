import React from "react";
import "./TextBox.scss";

    const TextBox = ({ children }) => (
        <div className="textBox">
            {children}
        </div>
    );

export default TextBox;