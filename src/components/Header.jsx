import { Link } from "react-router-dom"

function Header({ text }) {
    const headerStyles = {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'pink',
        textDecoration: 'none',
    }
  return (
    <Link to='/' style={headerStyles} >
      <header style={headerStyles} >
        <div className="container"> 
          <h2 >{text}</h2>
        </div>
      </header>
    </Link>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
}

export default Header
