import React from 'react'
import styles from './Errorpage.module.css'
import { TbPageBreak } from "react-icons/tb";

const ErrorPage = () => {
  return (
    <div>
        <div className={`container ${styles.error}`}>
        <TbPageBreak className={styles.erroricon}/>
        <h4>404 PAGE NOT FOUND!</h4>
        </div>
    </div>
  )
}

export default ErrorPage