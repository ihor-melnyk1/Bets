import s from './style.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getMatches, setFiltered, setPage } from '../../store/matches';
import { useState, useEffect } from 'react';
import { SIDEMENU } from '../../data';
import noImage from '../../assets/no-image.png'  
import { useRef } from 'react';
import cn from 'classnames';

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

  const form = useRef(null);

  const handleClickAll = (e)=> {
    if(e.target.checked) {
      for(let i=0;i<form.current.length;i++){
        form.current[i].checked=true;
      }
      setFilter(matches);
    } else {
      for(let i=0;i<form.current.length;i++){
        form.current[i].checked=false;
      }
      setFilter(matches);
    }
  }


  
  return (
    <div className={s.side}>
      <h4>Collections</h4>
      <nav className={s.menu}>
        {SIDEMENU.map(({title,to,id,amount})=>(
          <NavLink to={to} className={({ isActive }) => cn(s.item, {
            [s.active]: isActive
          })} end key={id}>
            <svg className={s.icon}>
              <use xlinkHref={`/icons.svg#${id}`}></use>
            </svg>
            <div>{title}</div>
          </NavLink>
        ))}
      </nav>
      <h4>Filter by countries</h4>
      <ul className={s.filter}>
        <li className={s.country}>
          <input className={s.all} type='checkbox' onClick={handleClickAll}></input>
          <div className={s.countryName}>Select all</div>
        </li>
        <form ref={form}>
        {countries.map(({country,flag})=>(
          <li className={s.country} key={country}>
            <input id={country} type='checkbox' onChange={handleClickCheckbox}></input>
            <img src={flag || noImage} className={s.flag} alt={country}></img>
            <div className={s.countryName}>{country}</div>
          </li>
        ))}
        </form>
      </ul>
    </div>
  )
}

export default SideMenu;