import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.scss";

const ContactUs = ({ children }) => {
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
			{children}
		</div>
	);
};

export default ContactUs;
