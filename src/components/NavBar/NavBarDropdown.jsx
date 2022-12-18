export default function NavBarDropdown () {
    const categories = ["Cafe", "Bakery", "Accesorios"];

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Categorias</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href={categories[0]}>{categories[0]}</a></li>
                    <li><a className="dropdown-item" href={categories[1]}>{categories[1]}</a></li>
                    <li><a className="dropdown-item" href={categories[2]}>{categories[2]}</a></li>
                </ul>
            </li>
        </ul>
    );
}