import avatar from '../assets/avatar.png'

export function UserList(){
    return(
        <div className="rows">
            <div className="row">
                <img src={avatar} alt="" style={{width: "5rem", borderRadius: "6px" }}/>

                <div className="name-msg">
                    <span>Nome</span>
                    <p>ult. msg</p>
                </div>
                <p style={{color: 'rgb(183, 184, 185)', fontWeight: 'bold'}}>1m</p>
            </div>

            <div className="row">
                <img src={avatar} alt="" style={{width: "5rem", borderRadius: "6px" }}/>

                <div className="name-msg">
                    <span>Nome</span>
                    <p>ult. msg</p>
                </div>
                <p style={{color: 'rgb(183, 184, 185)', fontWeight: 'bold'}}>1m</p>
            </div>
        </div>
    )
}