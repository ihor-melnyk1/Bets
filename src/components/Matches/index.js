import s from './style.module.scss';
import {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFound, getPageItems,  setCountries, setFiltered, setIsFound,  setMatches,  } from '../../store/matches';
import Actions from '../Actions';
import Loader from '../Loader';
import PageItem from '../PageItem';
import { nanoid } from 'nanoid'
import Paginator from '../Paginator';

const Matches = ({request}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const pageItems = useSelector(getPageItems);
  const isFound = useSelector(getIsFound);

  useEffect(() => { 
    fetch(request, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "8de0cb804bb283073955390506333b4c"
        }
      })
      .then(res => res.json())
      .then(
        (result) => {
          if(result.status === 'error' || result.message || !result.response.length) {
            setError(result.errors.token);
            setIsLoaded(true); 
          } else {
            setIsLoaded(true);
            dispatch(setMatches(result.response));
            dispatch(setFiltered(result.response));
            dispatch(setIsFound(true));
            dispatch(setCountries(result.response.map((el)=>el.league.country).filter((item, pos,arr)=> arr.indexOf(item) === pos).sort().map((el)=>({country:el,flag:result.response.find((item)=>(item.league.country===el)).league.flag}))));
          }
        },
        (error) => {
          setError(String(error));
          setIsLoaded(true); 
        }
      )
  }, [request,dispatch])

  if (error) {
    return <div className={s.error}>{error}</div>;
  } else if (!isLoaded) {
    return <Loader></Loader>
  } else {
    return (
      <>
        <Actions></Actions>
        <ul>{pageItems.map(item => <PageItem {...item} key={nanoid()}></PageItem>)}</ul>
        {isFound ? <Paginator></Paginator> :<div className={s.notFound}>Unfortunately, nothing was found</div>}   
      </>
    );
    }
  }

export default Matches;