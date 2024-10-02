import { MENU_IMG_URL } from "../utils/constants";

const MenuCard = (props) => {
  const { menuCard } = props;
  const { name, defaultPrice, price, description, imageId } =
    menuCard?.card?.info;

  return (
    <div className="menu-card-container">
      <div className="txt-on-left">
        <div className="menu-heading">
          <p>{name}</p>
        </div>
        <div>
          <p className="menu-price">
            <span>&#8377;</span>
            {defaultPrice / 100 || price / 100}
          </p>
        </div>
        <div>
          <p className="menu-offer">{description}</p>
        </div>
      </div>
      <div className="image">
        <img
          className="menu-img"
          alt="menu-image"
          src={MENU_IMG_URL + imageId}
        ></img>
      </div>
    </div>
  );
};

export default MenuCard;
