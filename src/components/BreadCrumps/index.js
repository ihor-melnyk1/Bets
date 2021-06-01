import s from './style.module.scss';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const BreadCrumps = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div className={s.breadcrumbs}>
      {breadcrumbs.map(({ breadcrumb,match }) => (
        <NavLink to={match.url} className={s.item} exact activeClassName={s.active} key={match.url}>
          {breadcrumb}
        </NavLink>
      ))}
    </div>
  );
}

export default BreadCrumps;