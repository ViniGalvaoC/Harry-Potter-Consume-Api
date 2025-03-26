import './Menu.css';

function Menu(){
    return(
        <header className="menu">
            <div className="menu-logo">
                <img className='menu-logo-image' src="/hogwarts.png" alt="" />
            </div>
            <div className="menu-navigation">
                <a href="/books">Livros</a>
                <a href="/characters">Personagens</a>
                <a href="/spells">Magias</a>
                <a href="/houses">Casas</a>
            </div>
        </header>
    )
}

export default Menu;