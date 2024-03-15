import styles from './styles.module.css'
export default function Button({text, typeBtn}){
	return(
		<button className={styles.btn} type={typeBtn}>{text}</button>
	)
}