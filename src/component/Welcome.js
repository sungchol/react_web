import Hello from "./Hello";
import world from "./World";

export default function () {
    return (
        <div>
            <h2 style={{
               color:"#8080ff", 
               borderRight:'2px solid #000',
               marginBottom:"30px",    
               borderStyle: '2px dotted #000', 
               opacity: 0.5,
            }}>Welcome</h2>
            <world />
            
        </div>
    );
}