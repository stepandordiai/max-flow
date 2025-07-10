import "./BurgerBtn.scss";

const BurgerBtn = () => {
	function toggleBurger2() {
		document.querySelector(".burger-2").classList.toggle("burger-2--active");
		document.querySelector(".menu").classList.toggle("menu--active");
		document
			.querySelector(".menu__inner")
			.classList.toggle("menu__inner--active");
	}
	return <div onClick={toggleBurger2} className="burger-2"></div>;
};

export default BurgerBtn;
