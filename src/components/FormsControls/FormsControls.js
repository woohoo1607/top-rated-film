import React from 'react';
import styles from "./FormsControls.module.css";


export const Input = ({input, meta, ...props}) => {

    return (
            <div className={styles.formControl}>
                <input {...input} {...props} />
                { meta.touched && meta.error && <span> ! </span>}
            </div>
    );
};