"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxLayerProps = {
	children: ReactNode;
	speed?: number;
	className?: string;
};

export function ParallaxLayer({ children, speed = 0.3, className = "" }: ParallaxLayerProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const onScroll = () => {
			const rect = el.getBoundingClientRect();
			const center = rect.top + rect.height / 2;
			const offset = (window.innerHeight / 2 - center) * speed;
			el.style.transform = `translate3d(0, ${offset}px, 0)`;
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [speed]);

	return (
		<div ref={ref} className={`will-change-transform ${className}`}>
			{children}
		</div>
	);
}
