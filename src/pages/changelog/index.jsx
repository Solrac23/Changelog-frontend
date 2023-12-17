import { useContext, useEffect } from 'react'
import Head from 'next/head'
import styles from './styles.module.css'
import { ChangelogContext } from '@/contexts/ChangelogContext'

export default function Changelog() {
  const { changelog } = useContext(ChangelogContext)
  return (
    <>
      <Head>
        <title>Changelog</title>
        <meta name="description" content="Site para versionamento de códigos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.changelog}>
          <h1>Changelog</h1>
          {changelog.map(values => {
            return (
              <div key={values.id}>
                <span>{values.date} - {values.version}</span>
                <article key={values.id} className={styles.content}>
                  <p>{values.description}</p>
                  <section id={styles.major} className={styles.categories}>
                    <span>{values.major_changes}</span>
                    <ul className={styles.listGroup}>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                    </ul>
                  </section>
                  <section id={styles.changes} className={styles.categories}>
                    <span>{values.changed_features}</span>
                    <ul className={styles.listGroup}>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                    </ul>
                  </section>
                  <section id={styles.fixes} className={styles.categories}>
                    <span>{values.fix}</span>
                    <ul className={styles.listGroup}>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                    </ul>
                  </section>
                </article>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}