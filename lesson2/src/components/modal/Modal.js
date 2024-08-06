import React from 'react';
import classes from './Modal.module.css'
import Button from "../button/Button";
import Input from "../input/Input";

const Modal = ({closes ,children, inputChange}) => {
    // console.log(closes)
    return (
        <div>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <Button title={'Закрыть'} close={closes}/>
                <Input type="text" handleChange={inputChange}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;