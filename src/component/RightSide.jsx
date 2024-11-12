import { UserRow } from "./UserRow"
import { DisplayChat } from "./DisplayChat"
export function RightSide(){
    return(
        <div className="rightSide">
            <UserRow/>
            <DisplayChat />
        </div>
        
    )
}