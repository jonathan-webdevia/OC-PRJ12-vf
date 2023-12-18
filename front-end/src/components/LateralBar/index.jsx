import yoga from "../../assets/media/yoga.png";
import swimming from "../../assets/media/swimming.png";
import biking from "../../assets/media/bike.png";
import dumbell from "../../assets/media/dumbell.png";

const LateralBar = () => {
  return (
    <aside>
      <div>
        <img src={yoga} alt="yoga"></img>
        <img src={swimming} alt="swimming"></img>
        <img src={biking} alt="biking"></img>
        <img src={dumbell} alt="dumbell"></img>
      </div>
      <p className="copiryght">Copiryght, SportSee 2020</p>
    </aside>
  );
};
export default LateralBar;
