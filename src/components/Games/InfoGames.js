import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import FilterGamesInfo from "./FilterGamesInfo";
import "./Games.css";

const InfoGames = () => {
	console.log("renderizado");
	const [Page, setPage] = useState(1);
	const [Info, setInfo] = useState([]);
	const [loading, setLoading] = useState(false);

	const showId = (asd) => {
		console.log(asd);
	};

	const saveInfo = async () => {
		let tempinfo = await FilterGamesInfo(Page);
		setInfo(tempinfo);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			saveInfo();
		}, 2000);
		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Page]);

	return (
		<div className="card_grid">
			<div className="header">
				<h1 className="titleHome">MyAnimeListarda</h1>
			</div>

			{loading ? (
				<div className="loading_info">
					<Loading />
				</div>
			) : (
				<div className="Info">
					{Info.map((anime) => {
						return (
							<li
								key={anime.mal_id}
								id={anime.mal_id}
								className="card"
							>
								<ul onClick={() => showId(anime.mal_id)}>
									<p>{anime.title}</p>
									<img
										src={anime.image_url}
										alt={anime.title}
									/>
								</ul>
							</li>
						);
					})}
				</div>
			)}

			<div className="footer">
				<p>Crafteado por @jonapiii hecho en react</p>
				<span>
					<a href="https://github.com/HouzzyP">GitHub</a>{" "}
				</span>
			</div>
		</div>
	);
};

export default InfoGames;
