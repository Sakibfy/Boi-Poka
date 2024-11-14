import bannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-[#f3f3f3] mt-16 mb-8 rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse p-8  ">
    <img className='w-[320px] h-[400px] rounded-3xl'
      src={bannerImg} />
    <div className='w-6/12 mr-16'>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <button className="btn btn-primary mt-20 bg-[#23be0a] border-none">View The List</button>
    </div>
  </div>
</div>
  );
};

export default Banner;