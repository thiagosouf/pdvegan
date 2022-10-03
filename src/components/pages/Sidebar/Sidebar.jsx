import { CgLogOut, CgHomeAlt, CgShoppingBag, CgCoffee } from 'react-icons/cg';
import { FaMotorcycle, FaShoppingBag, FaHamburger } from 'react-icons/fa'
import './Sidebar.sass'

const menu = [
    { nome: "home", icone: <CgHomeAlt className='itens-menu' />, pagina: "Home" },
    { nome: "pedidos", icone: <FaMotorcycle className='itens-menu' />, pagina: "Pedidos" },
    { nome: "quiosque", icone: <CgCoffee className='itens-menu' />, pagina: "Quiosque" },
    { nome: "feira", icone: <CgShoppingBag className='itens-menu' />, pagina: "Feira" },
    { nome: "loja", icone: <FaShoppingBag className='itens-menu' />, pagina: "Loja" }
]

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <ul>
                {
                    menu.map((item) => (
                        <div className='item-icon' href='#'>
                            {item.icone}
                            <li key={item.nome}>{item.nome}</li>
                        </div>
                    ))
                }
            </ul>
            <div className='sair' href="#Login">
                <CgLogOut />
                <span>Sair</span>
            </div>
        </aside>
    )
}

export default Sidebar