import { UserRow } from "./UserRow";
import { DisplayChat } from "./DisplayChat";
import DotGreen from "../assets/DotGreen.png";

export function RightSide() {
    return (
        <div className="rightSide">
            <UserRow 
                user={{
                    id: 5, 
                    name: "Rodolfo da Silva", 
                    lastMS: (
                        <p style={{display: 'flex', marginTop: '0.6rem', fontSize: '1.1rem'}}>
                            <img src={DotGreen} alt="" style={{ height: '16px',width: "17px", marginRight: "15px" }} />
                            Online
                        </p>
                    )
                }} 
                className="userRow" 
            />
            <DisplayChat />
        </div>
    );
}
