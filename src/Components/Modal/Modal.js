import React, {Component} from 'react';
import ModalTrigger from './ModalTrigger.js';
import ModalContent from './ModalContent.js';

export class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('u-lock-scroll');
    };

    setBlur = () => {
        document.querySelector('main').classList.toggle('set-blur')
    }

    onOpen = () => {
        this.setState({isOpen: true}, () => {
            this.closeButtonNode.focus();
       });
        this.toggleScrollLock();
        this.setBlur();
    };

    sleep = (miliseconds) => {
        var currentTime = new Date().getTime();
     
        while (currentTime + miliseconds >= new Date().getTime()) {
        }
     }

    onClose = () => {
        document.querySelector('.c-modal').classList.add('close-animation');
        setTimeout(
            function() {
                this.closePortal();
            }
            .bind(this),
            100
        );
    };

    closePortal = () => {
        this.setState({isOpen: false});
        this.openButtonNode.focus();
        this.toggleScrollLock();
        this.setBlur();
    };

    onKeyDown = (e) => {
        return e.keyCode === 27 && this.onClose();
      };

      onClickAway = (e) => {
        if (this.modalNode && this.modalNode.contains(e.target)) return;
        this.onClose();
      };
    
    render(){
        const {isOpen} = this.state;
        const {triggerText,role,ariaLabel,children} = this.props;
        return (
            <>
            <ModalTrigger 
            onOpen = {this.onOpen}
            text = {triggerText}
            buttonRef = {n => this.openButtonNode = n}
            />
            {isOpen && 
            <ModalContent
            ariaLabel = {ariaLabel}
            content = {children}
            onClose = {this.onClose}
            onKeyDown = {this.onKeyDown}
            onClickAway = {this.onClickAway}
            modalRef = {n => this.modalNode = n}
            buttonRef = {n => this.closeButtonNode = n}
            role = {role}
            />  
            }
            
            </>
        );
    }
}