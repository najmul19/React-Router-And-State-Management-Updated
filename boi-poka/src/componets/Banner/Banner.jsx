// import bannerimg from '../../assets/images/books.jpg'
const Banner = () => {
  return (
    <div className="hero bg-[#13131321] min-h-screen rounded-2xl p-20 ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src="https://i.postimg.cc/1tm7b7G4/hero.png"
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
          
          <button className="btn btn-primary bg-green-600 border-none shadow-md">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
