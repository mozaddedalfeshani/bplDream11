import coin from "../../assets/coin.png";
export default function NavBar({ money }) {
  return (
    <div className=" mb-2 ">
      <div className="navbar bg-base-100 p-3 container mx-auto">
        <div className="flex-1">
          <img src="src\assets\logo.png" className="h-[72px] w-[73.16px]" />
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Scedules</a>
            </li>
          </ul>
        </div>
        <button className="border border-black rounded-md p-2 font-medium min-w-[125px] text-[16px] btn-[#ffffff]">
          {money} Coin <img src={coin} className="w-6" />
        </button>
      </div>
    </div>
  );
}
