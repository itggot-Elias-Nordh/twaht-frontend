import React from 'react';
import './ModalTrigger.css';

const ModalTrigger = ({
    onOpen,
    text,
    buttonRef
  }) => <button className="c-btn" onClick = {onOpen} ref={buttonRef} >{text}</button>;

export default ModalTrigger;