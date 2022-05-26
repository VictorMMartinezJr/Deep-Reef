const Card = ({ data }) => {
  return (
    <div className="h-[300px] w-[350px] p-[2rem] my-4 rounded-xl bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-800 md:mx-2 xl:mx-6">
      <img src={data.img} alt="white chart" className="h-10" />
      <h3 className="text-3xl my-4">{data.title}</h3>
      <p className="w-[90%] text-gray-300 text-sm">{data.p}</p>
    </div>
  );
};

export default Card;
