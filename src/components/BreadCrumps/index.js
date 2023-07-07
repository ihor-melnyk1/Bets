import s from './style.module.scss';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import cn from 'classnames';

const BreadCrumps = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div className={s.breadcrumbs}>
      {breadcrumbs.map(({ breadcrumb,match }) => (
        <NavLink to={match.url} className={({ isActive }) => cn(s.item, {
          [s.active]: isActive
        })} end key={match.url}>
          {breadcrumb}
        </NavLink>
      ))}
    </div>
  );
}

export default BreadCrumps;