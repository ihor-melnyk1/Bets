import s from './style.module.scss';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png'
import {useState} from 'react';
import Menu from '../MobileMenu';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getIsBlured, setIsBlured } from '../../store/matches';
import { MENU } from '../../data';



const Header = () => {
  const dispatch = useDispatch();
  const isBlured = useSelector(getIsBlured)
  const [isActive,setActive] = useState(null);
  const handleSetMenu =()=>{
    setActive(prevstate=>!prevstate);
    dispatch(setIsBlured(!isBlured));
  }
  return  (
    <>
    <header className={s.header}>
        <Link className={s.logo} to='/'>
          <img src={logo} alt='logo'></img>
        </Link>
        <nav className={s.menu}>
              {
                MENU.map(({title,to,id},index)=>(
                  <NavLink to ={to} className={s.item} exact activeClassName={s.active} key={index}>
                    <svg className={s.icon}>
                      <use xlinkHref={`/icons.svg#${id}`}></use>
                    </svg>
                    {title}
                  </NavLink>
                ))
              }
        </nav>
        <div className={s.auth}>
            <button className={s.login} >LOGIN</button>
            <button className={s.signUp} >SIGN UP</button>
        </div>
        <div className={cn(s.menuButton,{[s.active]:isActive})} onClick={handleSetMenu}>
          <span />
        </div>
    </header>
    <Menu isActive={isActive} onSetMenu={handleSetMenu}/>
    </>
  )
}

export default Header;