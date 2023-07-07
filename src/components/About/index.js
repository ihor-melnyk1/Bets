import s from './style.module.scss';

const About = () => {

  return  (
    <div className={s.about}>
      <div className={s.description}>Loot Bet is an international sports betting company with headquarters in Kyiv, Ukraine, founded in 2021.</div>
      <iframe
        className={s.map} title='map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325527.8310597864!2d29.908906429190253!3d50.400367755113066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1688736769534!5m2!1sru!2sua" 
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
    </div>
  )
}

export default About;