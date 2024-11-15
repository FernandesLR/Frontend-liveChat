import { UserRow } from "./UserRow"
import { DisplayChat } from "./DisplayChat"
export function RightSide(){
    return(
        <div className="rightSide">
            <UserRow user={{id:5, name:"head", lastMS:"Online"}} className="UserInHeader"/>
            <DisplayChat />
        </div>
        
    )
}