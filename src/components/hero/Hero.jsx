export default function Hero({ addMoney }) {
  return (
    <div className="hero w-full rounded-2xl bg-gradient-to-r py-3 from-[#a1a1aa] via-[#000000] to-[#9b8d8b]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <img
            src="src/assets/banner-main.png"
            alt="Cricket Icon"
            className="w-[248px] mx-auto mb-4"
          />
          <h1 className="text-[40px] font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white text-opacity-70 text-xl mt-2">
            Beyond Boundaries Beyond Limits
          </p>

          <button
            className="btn p-3 border-[rgba(231,254,41,1)] border"
            onClick={() => addMoney()} // Call the function here
          >
            <div className="bg-[#eeff59] text-center m-1">
              Claim Free Credit
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
