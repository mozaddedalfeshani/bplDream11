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
              <a>Link</a>
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
        <button className="btn min-w-[125px] text-[16px] btn-[#ffffff]">
          {money} Coin
        </button>
      </div>
    </div>
  );
}
