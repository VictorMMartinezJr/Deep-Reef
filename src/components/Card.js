const Card = ({ data, roadmapCard }) => {
  return (
    <div
      className={`${
        roadmapCard ? "h-auto" : "h-[300px]"
      } w-[350px] p-[2rem] my-4 rounded-xl custom-card`}
    >
      {!roadmapCard && (
        <img src={data.img} alt="white chart" className="h-10" />
      )}
      {roadmapCard && <p className="text-blue-700">{data.date}</p>}
      <h3 className="text-2xl my-4">{data.title}</h3>
      <p className="w-[90%] text-gray-300 text-sm">{data.p}</p>
    </div>
  );
};

export default Card;
