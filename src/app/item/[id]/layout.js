import { Suspense } from "react";

export default function Layout({ children, modal }) {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<div>
				{children} {modal}
			</div>
		</Suspense>
	);
}
