import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"


const Header = ({ visibleCount }) => {
    const { isLoading, error, flights } = useSelector((store) => store.flight)
    return (
        <div>
            <header>
                <Link to="/" className="logo">
                    <img src="logo.webp" alt="logo" width={40} />
                    <h3>Uçuş Radarı</h3>
                </Link>

                <div className="buttons">
                    <NavLink to="/"

                    >
                        <button>Harita</button>
                    </NavLink>
                    <NavLink to="/list"


                    >
                        <button>Liste</button>
                    </NavLink>
                </div>

                <h3>
                    {isLoading
                        ? "Uçuşlar Yükleniyor"
                        : error
                            ? <p className="error">{error}</p>
                            : visibleCount !== undefined
                                ? `${visibleCount} Uçuş Gösteriliyor`
                                : `${flights.length} Uçuş Bulundu`}
                </h3>
            </header>
        </div>
    )
}

export default Header
