import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <nav className="Nav">
            <ul>
                <li><Link to="/"><i className="bi bi-house"></i>Home</Link></li>
                <li><Link to="post"><i className="bi bi-plus-circle"></i>ADD</Link></li>

            </ul>
        </nav>
      </>
    )
}

export default Nav
