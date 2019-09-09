import React from 'react';
import preloader from "../../img/loading.gif";
import styles from './Preloader.module.css';

let Preloader = () => {
    return <div className={styles.loader}><img src={preloader} width="200px" height="200px" text-align="center"/></div>
};
export default Preloader;