import Navbar from "../components/Navbar";

import SimpleCard from "../components/SimpleCard";
import Head from "next/head";

export default function index() {
	return (
		<div className="bg-yellow-400 h-full md:h-screen">
			<Head>
				<title>Ardy Ubanos</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="Ardy Ubanos website and electronic profile"
				/>
			</Head>
			<div className="font-extrabold text-center">
				<div className="text-2xl md:text-6xl">I am a </div>
				<div className="text-2xl md:text-8xl text-white">
					Computer Science
				</div>
				<div className="text-2xl md:text-8xl">student.</div>
			</div>
			<div className="grid grid-row-3 grid-flow-row py-10 gap-8 justify-center  md:grid-cols-auto md:grid-flow-col md:gap-4 md:mt-5  md:mx-96 md:my-2">
				
			</div>
			<div className="font-extrabold text-center pb-10 md:mt-10">
				<div className="animate-pulse text-2xl md:text-6xl">
					Gutom lang yan
				</div>
			</div>
		</div>
	);
}