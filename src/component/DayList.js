import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
//import dummy from '../db/data.json';


export default function DayList() {

    //화면이 랜더링될때(처음, 화면갱신시) 호출됨
    //처음실행시 1번만 실행시키기 위해 2번째 인자에 [] 빈배열을 추가
    //Api 비동기 통신 fetch() -> promise반환 then -> 
    // useEffect(()=>{
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json();
    //     }).then(data => {
    //         setDays(data);
    //     });
    // }, []);
    const days = useFetch('http://localhost:3001/days');

    if(days.length === 0) 
    {
        return <span>Loading...</span>
    }
    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>
                    Day {day.day}
                    </Link>
                </li>

            )) }
        </ul>
    
    );
}