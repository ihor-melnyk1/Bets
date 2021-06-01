import s from './style.module.scss';
import cn from 'classnames';
import {NavLink} from 'react-router-dom';
import { MOBILEMENU } from '../../data';

const MobileMenu = ({isActive,onSetMenu}) => {
  return  (
        <div className={cn(s.menuContainer,{
          [s.active]: isActive===true,
          [s.deactive]: isActive===false
        })}>
          <div >
            <nav className={s.menu}>
              {
                MOBILEMENU.map(({title,to,id},index)=>(
                  <NavLink to ={to} className={s.item} exact activeClassName={s.linkActive} key={index} onClick={()=>{onSetMenu()}} >
                    <svg className={s.icon}>
                      <use xlinkHref={`/icons.svg#${id}`}></use>
                    </svg>
                    {title}
                  </NavLink>
                ))
              }
            </nav>
          </div>
        </div>
    )
}

export default MobileMenu;