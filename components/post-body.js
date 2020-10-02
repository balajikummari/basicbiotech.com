import { Container } from '@material-ui/core';
import styles from './post-body.module.css'

import { StylesProvider } from '@material-ui/core/styles';


export default function PostBody({ content }) {
  return (
    <Container maxWidth="md">
     <div  style={{textAlign:"justify"}}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
    </Container>
  )
}