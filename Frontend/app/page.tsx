"use client";
import {Image} from "@nextui-org/react";
import styles from "../styles/styleop.module.css"
export default function Home() {
	return (
		<div className="mt-8">
			<div>
				<Image
				isBlurred
				isZoomed
				alt="NextUI Fruit Image with Zoom"
				src="https://informatica.uv.cl/templates/yootheme/cache/75/Banner_Web_2023_Informatica_2_1-75ac94f1.webp"
				/>
			</div>
			<div className={styles.boximgs}>
				<Image className={styles.imgs}
					isBlurred
					isZoomed
					alt="NextUI Fruit Image with Zoom"
					src="https://informatica.uv.cl/templates/yootheme/cache/b2/Banner_Web_2023_Doctorado-b2d17953.webp"
					/>
				<div className={styles.imgs2}>
					<Image className={styles.imgs}
						isBlurred
						isZoomed
						alt="NextUI Fruit Image with Zoom"
						src="https://informatica.uv.cl/templates/yootheme/cache/3a/Banner_Web_2023_Magister-3a979e62.webp"
						/>
					<Image className={styles.imgs}
						isBlurred
						isZoomed
						alt="NextUI Fruit Image with Zoom"
						src="https://informatica.uv.cl/templates/yootheme/cache/f4/Banner_Web_2023_DiplomadoEnDS-f44e94c6.webp"
						/>
				</div>
			</div>
		</div>
	);
}
