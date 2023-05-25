import Header from "@/components/page-components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Luke.com",
	description: "An RSC e-commerce site",
};

export default function RootLayout(props) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{props.modal}
				<Suspense fallback={<p>Loading...</p>}>{props.children}</Suspense>
			</body>
		</html>
	);
}
