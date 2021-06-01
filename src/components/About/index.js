import s from './style.module.scss';

const About = () => {

  return  (
    <div className={s.about}>
      <div className={s.description}>Loot Bet is an international sports betting company with headquarters in Donetsk, Ukraine, founded in 2021.</div>
      <iframe className={s.map} title='map' 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1245.3699560915888!2d37.694389146250266!3d47.94421771431353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e0977555bdf57b%3A0x99ee1e254b5d6da4!2z0YPQuy4g0JLRi9GB0L7RhtC60L7Qs9C-LCA2LCDQlNC-0L3QtdGG0LosINCU0L7QvdC10YbQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDgzMDAw!5e0!3m2!1sru!2sua!4v1622585218179!5m2!1sru!2sua"
        allowFullScreen="" loading="lazy" sandbox='allow-scripts allow-same-origin'>
       </iframe>
    </div>
  )
}

export default About;