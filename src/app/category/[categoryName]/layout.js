import { Suspense } from "react";

export default function Layout({ children }) {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<div>{children}</div>
		</Suspense>
	);
}
