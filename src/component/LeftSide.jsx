import arrowBlack from '../assets/ArrowBlack.svg'
import AddCircle from '../assets/AddCircle.svg'
import { UserList } from './UserList'


export function LeftSide(){
    return(
        <div className='LeftSide'>
            <div className="header">
                <h1>Mensagens</h1>
                <img src={arrowBlack} alt="Arrow down" />
                <p className='qtdMsg'>12</p>
                <img src={AddCircle} alt="Add Circle"  style={{width: "2.5rem", marginRight: 20}}/>
            </div>
            <input type="text" className='searchbar' placeholder='Procurar' />
            <UserList/>
        </div>
    )
}