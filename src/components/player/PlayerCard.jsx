import flag from "../../assets/flag.png";

const PlayerCard = ({
  name,
  country,
  role,
  rating,
  price,
  image,
  buttonText,
  onButtonClick = () => {}, // Default function
}) => (
  <div className="p-4 border rounded-lg shadow-md relative max-w-sm bg-white">
    {/* Player Image */}
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover rounded-t-lg"
    />

    {/* Player Information */}
    <div className="p-4">
      <h3 className="text-xl font-semibold">{name}</h3>

      {/* Country and Role */}
      <div className="flex items-center text-gray-500 text-sm mt-1">
        <img src={flag} alt="Country Flag" className="mr-2 w-4 h-4" />
        <span>{country}</span>
        <span className="ml-auto px-2 py-1 text-xs bg-gray-200 rounded-full">
          {role}
        </span>
      </div>

      {/* Rating */}
      <div className="text-sm text-gray-600 mt-2">
        <span className="font-medium">Rating:</span> {rating}
      </div>

      {/* Price */}
      <div className="text-sm text-gray-600">
        <span className="font-medium">Price:</span> {price}
      </div>

      {/* Choose Player Button */}
      <button
        className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-md font-semibold flex items-center justify-center border border-yellow-500 shadow-md"
        onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  </div>
);

export default PlayerCard;
