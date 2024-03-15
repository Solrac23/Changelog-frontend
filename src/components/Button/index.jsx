import styles from './styles.module.css'
export default function Button({typeBtn, block, children}){
  return(
    <button className={styles.btn} type={typeBtn} disabled={block}>{children}</button>
  )
}