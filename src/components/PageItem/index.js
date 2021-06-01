import s from './style.module.scss';
import { NavLink } from 'react-router-dom';
import Odds from '../Odds';
import noImage from '../../assets/no-image.png';

const PageItem = ({fixture:{id,date,status:{short}},league:{name},teams:{home,away}}) => {
  
  return (
    <li key={id} className={s.item}>
      <div className={s.info}>
        <div className={s.bar}>
          <div>
            <svg className={s.ball}>
              <use xlinkHref={`/icons.svg#ball`}></use>
            </svg>
            <span className={s.league}>{name}</span>
          </div>
          <div className={s.icons}>
            {(short==='NS' || short==='TBD' || short==='FT')?null:<div className={s.live}>Live</div>}
            <svg className={s.icon}>
              <use xlinkHref={`/icons.svg#favorite`}></use>
            </svg>
          </div>
        </div>
        <NavLink to='/' className={s.match}>
          <div className={s.time}>
            <div>
              <p className={s.pTime}>{date.split('T')[1].split('+')[0].split(':').slice(0,2).join(':')}</p>
              <p>{date.split('T')[0].split('-').slice(1,3).join('-')}</p>
            </div>
          </div>
          <div className={s.teams}>
            <div className={s.team1}>
              <img src={home.logo} onError={(e)=>{ e.target.src=noImage}} alt={home.name} className={s.logo}></img>
              {home.name}
            </div>
            <div className={s.team2}>
              <img src={away.logo} onError={(e)=>{ e.target.src=noImage}} alt={away.name} className={s.logo}></img>
              {away.name}
            </div>
          </div>
        </NavLink>
      </div>
      <Odds></Odds>
    </li>
  )
}

export default PageItem;