const Card = ({ data, roadmapCard }) => {
  return (
    <div
      className={`${
        roadmapCard ? "h-auto" : "h-[340px]"
      } w-auto xs:w-[350px] l p-[2rem] my-4 rounded-xl custom-card`}
    >
      {!roadmapCard && <img src={data.img} alt="white chart" className="h-8" />}
      {roadmapCard && <p className="text-blue-700">{data.date}</p>}
      <h3 className="text-2xl my-4 md:text-3xl">{data.title}</h3>
      <p className="w-[90%] text-gray-300 text-sm xs:text-base">{data.p}</p>
    </div>
  );
};

export default Card;
