import { Container } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import Parser from 'html-react-parser';
import {Link, RichText, Date} from 'prismic-reactjs';


export default function PostBody({ content }) {
  return (
    <Container>
    {Parser(content)}
    {/* <RichText render={content} Component="title" /> */}
    </Container>
  )
}