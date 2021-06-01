import s from './style.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getMatches, setFiltered, setPage } from '../../store/matches';
import { useState, useEffect } from 'react';
 
const SIDEMENU = [
  {
    title:'The best',
    to: '/',
    id: 'fire',
    amount: 228,
  },
  {
    title:'Live',
    to: '/live',
    id: 'live',
    amount: 322,
  },
  {
    title:'Favorites',
    to: '/test',
    id: 'star',
    amount: 0,
  },
]  

const SideMenu = () => {
  const matches = useSelector(getMatches);
  const countries = useSelector(getCountries);
  const dispatch = useDispatch();

  const [filter,setFilter] = useState([]);
  useEffect(()=>{
    if(filter.length){
      dispatch(setFiltered(filter));
    } else {
      dispatch(setFiltered(matches));
      dispatch(setPage(1));
    }
  },[filter,dispatch,matches])
  const handleClickCheckbox = (e)=> {
    if(e.target.checked) {
      if(!filter.length) dispatch(setPage(1));
      setFilter(filter.concat(matches.filter(el=>el.league.country===e.target.id)))
    } else {
      setFilter(filter.filter(el=>(el.league.country!==e.target.id)))
    }
  }

  
  return (
    <div className={s.side}>
      <h4>Collections</h4>
      <nav className={s.menu}>
        {SIDEMENU.map(({title,to,id,amount})=>(
          <NavLink to ={to} className={s.item} exact activeClassName={s.active} key={id}>
            <svg className={s.icon}>
              <use xlinkHref={`/icons.svg#${id}`}></use>
            </svg>
            <div>{title}</div>
            <div className={s.amount}>{amount}</div>
          </NavLink>
        ))}
      </nav>
      <h4>Filter by countries</h4>
      <ul className={s.filter}>
        {countries.map(({country,flag})=>(
          <li className={s.country} key={country}>
            <input id={country} type='checkbox' onClick={handleClickCheckbox}></input>
            <img src={flag} className={s.flag} alt={country}></img>
            <div>{country}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideMenu;