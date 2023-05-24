import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

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
				{props.children}
				{props.modal}
			</body>
		</html>
	);
}
