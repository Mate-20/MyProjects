import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const today = new Date();
  return (
    <div className={styles.footer}>
      &copy; | The Events And Co Limited | {today.getFullYear()} | Akash Jindal
    </div>
  )
}

export default Footer