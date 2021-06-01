import s from './style.module.scss';
import {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMatches, setFiltered, setIsFound, setPage } from '../../store/matches';
 


const Actions = () => {
  const dispatch = useDispatch();
  const matches = useSelector(getMatches);

  const handleChangeSearch = (e)=> {
    if(e.target.value!=='') {
      dispatch(setFiltered(matches.filter(({teams:{home,away}})=>(
        home.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
        away.name.toLowerCase().includes(e.target.value.toLowerCase())))))
      dispatch(setPage(1));
      dispatch(setIsFound(true));
    } else {
      dispatch(setFiltered(matches))
      dispatch(setPage(1));
    }
  }

  const [isAscLeague,setIsAscLeague] = useState(null);
  useEffect(()=>{
    if(isAscLeague!==null){
      const arr = matches.slice();
      if(isAscLeague) dispatch(setFiltered(arr.sort((a, b) => a.league.name > b.league.name ? 1 : -1)))
      else dispatch(setFiltered(arr.sort((a, b) => a.league.name > b.league.name ? -1 : 1)))
    }
  },[isAscLeague,dispatch,matches])
  const handleSortLeague = () => {
    setIsAscLeague(prevState=>setIsAscLeague(!prevState))
  }

  const [isAscTime,setIsAscTime] = useState(null);
  useEffect(()=>{
    if(isAscTime!==null){
      const arr = matches.slice();
      if(isAscTime) dispatch(setFiltered(matches))
      else dispatch(setFiltered(arr.reverse()))
    }
  },[isAscTime,dispatch,matches])
  const handleSortTime = () => {
    setIsAscTime(prevState=>setIsAscTime(!prevState))
  }

  return  (
    <div className={s.actions}>
      <input className={s.search} type='search' placeholder='Search by team name' onChange={handleChangeSearch} ></input>
      <div className={s.buttons}>
        <button onClick={handleSortLeague}>Sort by league</button>
        <button onClick={handleSortTime}>Sort by time</button>
      </div>
    </div>
  )
}

export default Actions;