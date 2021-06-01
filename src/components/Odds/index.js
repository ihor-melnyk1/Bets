import { nanoid } from 'nanoid';
import { getBets } from '../../functions';
import s from './style.module.scss';

const Odds = () => {
  const BETS = getBets();
  return  (
    <div className={s.kefs}>
      {BETS.map(({name,values})=>(
        <div className={s.bet} key={nanoid()}>
          <div className={s.name}>{name}</div>
          <div className={s.ratio}>
            {values.map(({value,odd},index)=>(
              <button className={s.button} key={index}>
                <div className={s.value}>{value}</div>
                {odd}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Odds;