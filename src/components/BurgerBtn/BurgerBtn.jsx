import "./BurgerBtn.scss";

const BurgerBtn = () => {
	function toggleBurger2() {
		document.querySelector(".burger-2").classList.toggle("burger-2--active");
	}
	return (
		<>
			<div onClick={toggleBurger2} className="burger-2"></div>
		</>
	);
};

export default BurgerBtn;
