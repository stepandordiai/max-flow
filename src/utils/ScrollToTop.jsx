import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname, hash } = useLocation();
	useEffect(() => {
		if (pathname && !hash) {
			window.scrollTo({
				top: 0,
			});
		}
	}, [pathname]);

	return null;
};

export default ScrollToTop;
