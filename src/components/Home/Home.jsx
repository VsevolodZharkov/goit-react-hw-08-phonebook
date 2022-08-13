import homeCover from '../../images/home.png';
import Style from './Home.module.css';

const Home = () => {
  const home = homeCover;
  return (
    <div className={Style.wrapper}>
      <img src={home} alt="cover"></img>
    </div>
  );
};

export default Home;