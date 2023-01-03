export default function NavBarDropdown () {
    const categories = ["Cafe", "Bakery", "Accesorios"];

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Categorias</a>
                <ul className="dropdown-menu">
                    {categories.map((element) => (<li key={element}><a className="dropdown-item" href={element}>{element}</a></li>))}
                </ul>
            </li>
        </ul>
    );
}