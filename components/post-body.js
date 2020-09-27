import { Container } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import Parser from 'html-react-parser';


export default function PostBody({ content }) {
  return (
    <Container>
    {Parser(content)}
    {/* <RichText render={content} Component="title" /> */}
    </Container>
  )
}