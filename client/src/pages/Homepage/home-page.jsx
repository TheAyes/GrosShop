import { Link } from "react-router-dom";
import { CategoryBarImage } from "../../components/CategoryBarImage/CategoryBarImage";
import { DealList } from "../../components/DealList/DealList";
import { NavBar } from "../../components/NavBar/NavBar";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import styles from "./Homepage.module.scss";


export const HomePage = () => {
	return (
		<div className={styles.Homepage}>
			<SearchBar />
			<section>
				<div>
					<Link to="/itemlist">Get 20% OFF</Link>
				</div>
				<div>
					<Link to="/itemlist">Get 40% OFF</Link>
				</div>
			</section>
			<CategoryBarImage />
			<div className={styles.fruitsBanner}>
				<Link to="/itemlist?category=649d85519011477c830b89cd">Naturally Sweet, Nutritious Treats: Embrace the Power of Healthy Fruits</Link>
			</div>
			<DealList amount={6} offset={95} />
			<div className={styles.seafoodBanner}>
				<Link to="/itemlist?category=649d853e9011477c830b89cb">Dive into Freshness: Seafood Delights that Make Waves in Flavor</Link>
			</div>
			<DealList amount={6} offset={64} />
			<div className={styles.meatBanner}>
				<Link to="/itemlist?category=649d50bd924b2f32645d0f24">Savor the Flavor, Embrace the Meat: Fuel Your Body with Protein Power</Link>
			</div>
			<DealList amount={6} offset={140} />
			<div className={styles.breadBanner}>
				<Link to="/itemlist?category=649d85909011477c830b89d1">Rise to the Taste: Savor the Finest Breads, Baked with Love</Link>
			</div>
			<DealList amount={6} offset={47} />
			<div className={styles.vegetablesBanner}>
				<Link to="/itemlist?category=649d85139011477c830b89c9">Fuel Your Body, Nurture Your Soul: Embrace a Healthy Lifestyle</Link>
			</div>
			<DealList amount={6} offset={5} />
			<NavBar />
		</div>
	);
};
