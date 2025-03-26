import { useNavigate } from "react-router-dom";
import SavatchaModal from "./SavatchaModal";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        <span
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer"
        >
          Logo
        </span>
      </div>
      <div>
        <SavatchaModal />
      </div>
    </nav>
  );
};

export default Navbar;
