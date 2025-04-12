


import heroImg from '../../assets/images/hero_sec.png'

const HeroSect = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-[430px] max-w-5xl w-full z-10">
      <img
        className="max-h-[350px] w-full object-contain"
        src={heroImg}
        alt="hero image"
      />
    </div>
  );
};

export default HeroSect;
