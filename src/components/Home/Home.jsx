import Style from './Home.module.css';

export const Home = () => {
  return (
    <div className={Style.wrapper}>
      <img
        className={Style.image_home}
        src="https://cdn-icons-png.flaticon.com/512/4298/4298345.png"
        alt="phone book"
      ></img>
    </div>
  );
};
