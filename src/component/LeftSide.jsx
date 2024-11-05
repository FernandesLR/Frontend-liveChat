import arrowBlack from '../assets/ArrowBlack.svg'

export function LeftSide(){
    return(
        <div className='LeftSide'>
            <div className="header">
                <h1>Mensagens</h1>
                <img src={arrowBlack} alt="Arrow down" />
                <p className='qtdMsg'>12</p>
            </div>
        </div>
    )
}