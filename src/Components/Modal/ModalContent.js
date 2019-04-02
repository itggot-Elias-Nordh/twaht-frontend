import React from 'react';
import ReactDOM from 'react-dom';
import './ModalContent.css'

const ModalContent = 
({onClose,role= "dialog", ariaLabel, content, onKeyDown, modalRef, buttonRef, onClickAway}) => {
    return ReactDOM.createPortal(
    
        <aside 
        className = "c-modal-cover" 
        aria-modal = "true"  
        tabIndex = "1" 
        role = {role} 
        aria-label = {ariaLabel} 
        onKeyDown = {onKeyDown}
        onClick = {onClickAway}
        >
          <div className="c-modal" ref = {modalRef}>

            <div className="c-modal__header">
                <button className="c-modal__close" aria-label="Close Modal" aria-labelledby="Close modal" onClick={onClose} ref={buttonRef}>
                <span id="Close modal" className="u-hide-visually">Close</span>
                <svg className="c-modal__close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
                </button>
                <h4 className="modal-title">Titel goes here</h4>
            </div>

            <div className="c-modal__body">
              {content}
            </div>

            <div className="c-modal__footer">
                 <button className="f-btn">button Down here ;)</button> 
            </div>
          </div>

        </aside>,
        document.body
      );
}

export default ModalContent;