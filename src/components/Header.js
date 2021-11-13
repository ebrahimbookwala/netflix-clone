import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FaceIcon from "@mui/icons-material/Face";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles["logo-container"]}>
				<Link to="/">
					<img
						src="images/logo.jpg"
						className={styles["logo-image"]}
						alt="company logo"
					/>
				</Link>
			</div>
			<nav className={styles["primary-nav"]}>
				<Link to="/"> Home</Link>
				<Link to="/tv"> TV Shows</Link>
				<Link to="/"> Movies</Link>
				<Link to="/"> News & Popular</Link>
				<Link to="/my-list"> My List</Link>
			</nav>
			<nav className={styles["secondary-nav"]}>
				<Link to="/">
					<SearchBar />
				</Link>
				<Link to="/">
					<NotificationsIcon />
				</Link>
				<Link to="/">
					<FaceIcon />
					<ArrowDropDownIcon />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
