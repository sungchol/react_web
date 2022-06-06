import styles from "./Hello.module.css";
import { useState } from "react";

const Hello = function({age}) {

    //let name = "Mike";
    const [name, setName] = useState('Mike');
    const [year, setAge] = useState(age);
    const msg = year>19 ?"adult" : "child";
    function changeName() {
        //const newName = name === "Mike" ? "Jane" : "Mike";
        //console.log(name);
        //document.getElementById("name").innerText = name;
        setName(name === "Mike" ? "Jane" : "Mike");
        setAge(year+1);
    } 


    return (
    <div>
            <h1>Hello</h1>;

            <div className = {styles.box}>Hello</div>
            <h2 id="name">{name}({year} {msg})</h2>
            <button onClick={changeName}>Change</button>

    </div>
    )
}

export default Hello;