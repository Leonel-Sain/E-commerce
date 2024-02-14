import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <>
            <nav>
                <h3>Torres e Hijos</h3>
                <h4>Maquinas de acero</h4>
                <div>
                    <button>Inicio</button>
                    <button>Quienes somos</button>
                    <button>Servicios</button>
                    <button>Maquinarias</button>
                </div>
            </nav>
            <CartWidget />
        </>
    )
}
export default NavBar