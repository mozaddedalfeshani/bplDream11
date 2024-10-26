import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "../../assets/banner-main.png";

export default function Hero({ addMoney }) {
  const handleClaimCredit = () => {
    addMoney(); // Call the function to add money
    setTimeout(() => {
      toast.success("Free credit claimed successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
      });
    }, 0);
  };

  return (
    <div
      className="hero w-full rounded-2xl"
      style={{
        backgroundImage:
          "linear-gradient(45deg, #a1a1aa 0%, #000000 50%, #9b8d8b 90%, white 100%)",
      }}>
      <ToastContainer />
      <div className="hero-content text-center">
        <div className="max-w-2xl flex flex-col items-center justify-center">
          <img
            src={banner}
            alt="Cricket Icon"
            className="w-[248px] mx-auto mb-4"
          />
          <h1 className="text-[40px] font-bold text-white max-w-[970px] text-center">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white text-opacity-70 text-xl mt-2">
            Beyond Boundaries Beyond Limits
          </p>
          <button
            className="p-1 font-bold border-[#E7FE29] border rounded-lg"
            onClick={handleClaimCredit}>
            <div className="bg-[#eeff59] flex justify-center items-center text-center w-[150px] h-10 rounded-lg">
              Claim Free Credit
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
