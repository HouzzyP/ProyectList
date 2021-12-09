import React from "react";
import "./Home.css";

function HomeC() {
	const accountName = "Jonapi";

	return (
		<div className="homeC">
			<div className="header">
				<h1 className="titleHome">MyAnimeListarda</h1>
			</div>
			<div className="info">
				<p>
					Que onda {accountName} esta es una pagina donde se van a
					poder agregar a una lista personal los animes que viste y
					completaste dandoles un puntaje, y un comentario sobre el
					mismo.
				</p>
			</div>
			<div className="footer">
				<p>Crafteado por @jonapiii hecho en react</p>
				<span>
					{" "}
					<a href="https://github.com/HouzzyP">GitHub</a>{" "}
				</span>
			</div>
		</div>
	);
}

export default HomeC;
