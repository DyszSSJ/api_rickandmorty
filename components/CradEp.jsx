const CradEp = ({ name, air_date, episode, id }) => {
  return (
    <div className="bg-[#d1d1d1] rounded-lg shadow-lg p-4" key={id}>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold !text-black">{name}</h2>
        <p className="text-black">{air_date}</p>
        <p className="text-black">{episode}</p>
      </div>
    </div>
  );
};

export default CradEp;
