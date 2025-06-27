import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.scss";

const ContactUs = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const work = document.querySelector(".contact-us");
		let element = null;

		work.addEventListener("mousemove", (e) => {
			const projectRect = work.getBoundingClientRect();

			// Check if the element already exists
			if (!element) {
				// Create the img element on the first mousemove event
				element = document.createElement("div");
				element.classList.add("div-element");
				element.innerHTML = '<img src="/icons/up-arrow.png" alt="" />';
				work.appendChild(element);
			}

			element.classList.add("div-element--active");

			// Calculate mouse position relative to the project element
			let mouseX = e.clientX - projectRect.left;
			let mouseY = e.clientY - projectRect.top;

			const offset = 25;

			mouseX = Math.max(offset, Math.min(mouseX, projectRect.width - offset));
			mouseY = Math.max(offset, Math.min(mouseY, projectRect.height - offset));

			// Move the element based on the mouse position
			if (element) {
				element.style.top = mouseY + "px";
				element.style.left = mouseX + "px";
			}
		});

		work.addEventListener("mouseleave", () => {
			if (element) {
				// element.remove();
				// element = null; // Reset element
				element.classList.remove("div-element--active");
			}
		});

		work.addEventListener("click", () => {
			if (element) {
				// element.remove();
				// element = null; // Reset element
				element.classList.remove("div-element--active");
				navigate("/contact");
			}
		});
	});

	return (
		<div className="contact-us" to={"/contact"}>
			<p className="contact-us__title">
				Ready to empower your SVJ with intelligent energy?
			</p>
			<div>
				<p>
					Let MaxFlow 360&deg; turn your building into a self-managing,
					cost-efficient, solar-powered community.
				</p>
				<NavLink className="contact-us__link" to={"/contact"}>
					<span>Chci nabídku</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20px"
						viewBox="0 -960 960 960"
						width="20px"
						fill="#ffffff"
					>
						<path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
					</svg>
				</NavLink>
			</div>
			{/* <NavLink to={"/contact"}>Knotaktujte nas</NavLink> */}
		</div>
	);
};

export default ContactUs;
