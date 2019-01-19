import React from "react";
import "./Modal.scss";

    const Modal = (props) => (
        <div className="modal">
            <div className="modalContent">
                <p className="modalHeader">{props.modalHeader}</p>
                <p className="modalTech">{props.modalTech}</p>
                <p className="modalDescription">{props.modalDesription}</p>
            </div>
        </div>
    );

export default Modal;