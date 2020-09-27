import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
export default function Header() {
  return (
      <Link href="/">
        <Typography variant="h1" >
        Header     {/*TODO : Header */}
        </Typography>
      </Link>
  )
}
