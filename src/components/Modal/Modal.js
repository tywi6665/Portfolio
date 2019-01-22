import React from "react";
import "./Modal.scss";

    const Modal = (props) => (
        <div className="modal">
            <div className="modalContent">
                <h4 className="modalHeader">{props.modalHeader}</h4>
                <h4 className="modalTech">{props.modalTech}</h4>
                <h4 className="modalDescription">{props.modalDescription}</h4>
            </div>
        </div>
    );

export default Modal;