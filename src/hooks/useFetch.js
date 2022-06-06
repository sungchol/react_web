import { useEffect, useState } from "react";

export default function useFetch(url) {

    const [data, setData] = useState([]);
    
    //화면이 랜더링될때(처음, 화면갱신시) 호출됨
    //처음실행시 1번만 실행시키기 위해 2번째 인자에 [] 빈배열을 추가
    //Api 비동기 통신 fetch() -> promise반환 then -> 

    useEffect( () => {
        fetch(url)
        .then( res => {
            return res.json();
        })
        .then( data => {
            setData(data);
        });
    }, []);

    return data;
}

