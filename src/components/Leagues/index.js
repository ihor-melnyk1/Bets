import s from './style.module.scss';
import {useState, useEffect} from 'react';
import {response} from '../../leagues.json'
import { nanoid } from 'nanoid';

const Leagues = () => {
  const [count,setCount] = useState(0);
  const [leagues,setLeagues] = useState([]);
  const handleClickButton = () => {
    setCount(count+10);
  }
  useEffect(()=>{
    setLeagues(prevState=>prevState.concat(response.slice(count,count+9)));
  },[count])
    return  (
      <>
      <ul className={s.leagues}>
        {leagues.map(({league:{name,logo}})=>(
          <li className={s.item} key={nanoid()}>
            <figure className={s.figure}>
              <div className={s.container}><img src={logo} alt={name} className={s.logo}></img></div>
              <figcaption>{name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <button className={s.button} onClick={handleClickButton}>More</button>
      </>
    )
}

export default Leagues;