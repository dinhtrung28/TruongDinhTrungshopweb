import './Head.css'
function Head () {
    return(
    <div className='header'>
        {/* <img className='logo' src='https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/425866298_122114649644193340_1641349145565488220_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Ht2Dj0tolo4Q7kNvgGB7k3J&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=Aksg1xsij30ON2u7pPVqXwt&oh=00_AYADATTxCEEMghSBEOIkMrIalFdSPKVkW8MC8qBbJvRgug&oe=67892FAD'></img> */}
        <div>
            <ul className='flex justify-center'>
                <li className='header-item'>Home</li>
                <li className='header-item'>About</li>
                <li className='header-item'>Events</li>
                <li className='header-item'>Contact</li>
            </ul>
        </div>
    </div>
    );
}




export default Head