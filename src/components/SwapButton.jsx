import { BsArrowDownUp } from "react-icons/bs";
import "../App.css"

function SwapButton({ handleSwap }) {
    return (
        <div className="div3 absolute top-12">
            <button onClick={handleSwap} className="px-4 py-2 bg-[#7c677f] text-white rounded-full">
                <BsArrowDownUp />
            </button>
        </div>
    );
}


export default SwapButton;