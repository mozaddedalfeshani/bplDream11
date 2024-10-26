import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import playersData from "../../assets/playerinfo.json";
import PlayerCard from "./PlayerCard";

const Players = ({ money, setMoney, selectedPlayers, setSelectedPlayers }) => {
  const handlePlayerSelect = (player) => {
    // Check if the player is already selected
    const alreadySelected = selectedPlayers.some((p) => p.name === player.name);

    if (alreadySelected) {
      toast.warning("This player is already selected.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Limit the number of selected players to 6
    if (selectedPlayers.length >= 6) {
      toast.error("Maximum of 6 players can be selected.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Convert player.price to a number
    const playerPrice = Number(player.price);

    // Deduct the price from money and update the state if player is not already selected
    if (money >= playerPrice) {
      setMoney(money - playerPrice);
      setSelectedPlayers([
        ...selectedPlayers,
        { ...player, price: playerPrice },
      ]); // Add the player to the selected players list
      toast.success(`${player.name} has been added to your team!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Not enough money to select this player.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playersData.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            country={player.country}
            role={player.role}
            rating={player.rating}
            price={Number(player.price)} // Ensure price is a number
            image={player.image}
            buttonText={player.buttonText}
            onButtonClick={() => handlePlayerSelect(player)}
          />
        ))}
      </div>
    </div>
  );
};

export default Players;
