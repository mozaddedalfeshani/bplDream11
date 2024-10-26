import deleteIcon from "../../assets/delete.png";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setMoney,
  setCount,
}) => {
  const handleRemovePlayer = (player) => {
    setMoney((prevMoney) => prevMoney + Number(player.price));

    // Remove player from selected list
    setSelectedPlayers((prevSelected) =>
      prevSelected.filter((p) => p.name !== player.name)
    );
  };

  return (
    <div className="player-card">
      {selectedPlayers.map((player, index) => (
        <div
          key={index}
          className="player-info card my-2 p-4 shadow-lg rounded-md flex flex-col">
          <div className="flex flex-row items-center justify-between mb-2">
            <div className="flex flex-row items-center">
              <img
                src={player.image}
                className="w-12 h-12 rounded-full mr-4"
                alt={`${player.name}'s image`}
              />
              <div>
                <div className="player-name text-lg font-semibold">
                  {player.name}
                </div>
                <div className="batting-hand text-sm text-gray-600">
                  {player.role} ({player.country}) - Price: {player.price}
                </div>
              </div>
            </div>
            <button
              className=" ml-auto"
              onClick={() => handleRemovePlayer(player)}>
              <img src={deleteIcon} className="w-8" alt="Delete Icon" />
            </button>
          </div>

          {/* Optionally remove the hr */}
          {/* {index !== selectedPlayers.length - 1 && (
      <hr className="border-t-2 border-gray-300 my-2" />
    )} */}
        </div>
      ))}
      <button
        className="p-1 font-bold border-[#E7FE29] border rounded-lg"
        onClick={() => {
          setCount(false), console.log("clli");
        }}>
        <div className="bg-[#eeff59] flex justify-center items-center text-center w-[150px] h-10 rounded-lg font-medium">
          Add More Players
        </div>
      </button>
    </div>
  );
};

export default SelectedPlayers;
