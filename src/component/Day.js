import dummy from '../db/data.json';
import Word from './Word';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Day() {

    const {day} = useParams();
    // const wordList = dummy.words.filter( word => (
    //     word.day === Number(day)
    // ));

    //console.log(day);
    //const [words, setWords] = useState([]);
    // useEffect( ()=>{
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then( res => res.json())
    //     .then( data => setWords(data));
    // }, []);
    
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return <>
       
        <h2>Day {day}</h2>
        {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {words.map(word => (
                    <Word word = {word} key = {word.id}/>
                ))}
            </tbody>        
        </table>

    </>;
}