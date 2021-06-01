import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeButtonState } from '../../functions';
import { getFiltered, getLastPage, getPage, getPageSize, setIsFound, setIsLoaded, setPage, setPageItems, setLastPage } from '../../store/matches';
import s from './style.module.scss';

const Paginator = () => {
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const dispatch = useDispatch();
  const page = useSelector(getPage);
  const lastPage = useSelector(getLastPage);
  const filtered = useSelector(getFiltered);
  const pageSize = useSelector(getPageSize);

  useEffect(() => {
    dispatch(setIsLoaded(false))
    setTimeout(() => {
      setIsLoaded(true)
    }, 500);
    if(!filtered.length) {
      dispatch(setIsFound(false));
      dispatch(setPageItems([]));
    } else {
      dispatch(setIsFound(true));
      dispatch(setPageItems(filtered.slice(pageSize * (page - 1), pageSize * (page))));
      dispatch(setLastPage(Math.ceil(filtered.length / pageSize)));
    }
    if(prevButton.current) {
      if (page === 1) {
        changeButtonState(prevButton,true)
      }
      if (page === lastPage) {
        changeButtonState(nextButton,true)
      }
      if (page > 1) {
        changeButtonState(prevButton,false)
      }
      if (page < lastPage) {
        changeButtonState(nextButton,false)
      }
    }
  }, [page,lastPage,filtered,dispatch,pageSize])
  
  return  (
    <ul className={s.paginator}>
      <button onClick={()=>{dispatch(setPage(1))}}>First</button>
      <button onClick={()=>{dispatch(setPage(page-1))}} ref={prevButton}>Prev</button>
      <div className={s.pageCount}>
        <div>Page: {page}/{lastPage}</div>
      </div>
      <button onClick={()=>{dispatch(setPage(page+1))}} ref={nextButton}>Next</button>
      <button onClick={()=>{dispatch(setPage(lastPage))}}>Last</button>
    </ul>
  )
}

export default Paginator;