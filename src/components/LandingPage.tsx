"use client";

import Link from "next/link";
import type { Post } from "@/lib/db/schema";
import { ParallaxLayer } from "./ParallaxLayer";
import { PostCard } from "./PostCard";

type LandingPageProps = {
	posts: Post[];
};

export function LandingPage({ posts }: LandingPageProps) {
	return (
		<div className="overflow-hidden">
			{/* Hero */}
			<section className="relative flex min-h-screen flex-col items-center justify-center bg-black px-6 pt-12 text-center text-white">
				<ParallaxLayer speed={0.15} className="pointer-events-none absolute inset-0">
					<div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#0071e3]/30 blur-[120px]" />
					<div className="absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-[#bf5af2]/20 blur-[100px]" />
					<div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#30d158]/10 blur-[80px]" />
				</ParallaxLayer>

				<ParallaxLayer speed={-0.08} className="relative z-10 max-w-[980px]">
					<p className="mb-4 text-[17px] font-medium tracking-wide text-[#2997ff] animate-fade-up">
						Introducing
					</p>
					<h1
						className="mb-6 text-[56px] font-semibold leading-[1.05] tracking-tight sm:text-[80px] animate-fade-up"
						style={{ animationDelay: "0.1s" }}
					>
						เรื่องราว
						<br />
						<span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
							ที่น่าจดจำ
						</span>
					</h1>
					<p
						className="mx-auto mb-10 max-w-[600px] text-[21px] leading-relaxed text-[#a1a1a6] animate-fade-up"
						style={{ animationDelay: "0.2s" }}
					>
						บล็อกสไตล์มินิมอล อ่านง่าย สวยงาม
						<br />
						ขับเคลื่อนด้วย Cloudflare Edge
					</p>
					<div
						className="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
						style={{ animationDelay: "0.3s" }}
					>
						<Link
							href="/posts"
							className="rounded-full bg-[#0071e3] px-6 py-2.5 text-[17px] text-white transition-all hover:bg-[#0077ed]"
						>
							อ่านบทความ
						</Link>
						<Link
							href="#latest"
							className="flex items-center gap-1 text-[17px] text-[#2997ff] transition-opacity hover:opacity-80"
						>
							ดูล่าสุด
							<span aria-hidden>›</span>
						</Link>
					</div>
				</ParallaxLayer>

				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
					<div className="h-8 w-5 rounded-full border-2 border-white/30 p-1">
						<div className="mx-auto h-1.5 w-1 animate-pulse rounded-full bg-white/60" />
					</div>
				</div>
			</section>

			{/* Parallax showcase */}
			<section className="relative bg-[#fbfbfd] py-32">
				<div className="mx-auto max-w-[980px] px-6">
					<ParallaxLayer speed={0.12}>
						<p className="mb-2 text-center text-[17px] font-semibold text-[#bf4800]">ประสบการณ์ใหม่</p>
						<h2 className="mb-6 text-center text-[48px] font-semibold tracking-tight text-[#1d1d1f] sm:text-[64px]">
							ออกแบบมาเพื่อการอ่าน
						</h2>
						<p className="mx-auto max-w-[680px] text-center text-[21px] leading-relaxed text-[#86868b]">
							ตัวอักษรที่ชัดเจน พื้นที่ว่างที่เหมาะสม และการจัดวางที่เรียบง่าย
							ทุกรายละเอียดถูกออกแบบให้คุณโฟกัสกับเนื้อหา
						</p>
					</ParallaxLayer>

					<ParallaxLayer speed={-0.1} className="mt-20">
						<div className="overflow-hidden rounded-[28px] bg-gradient-to-b from-[#1d1d1f] to-[#000] p-1 shadow-2xl">
							<div className="rounded-[24px] bg-[#161617] px-8 py-16 text-center sm:px-16 sm:py-24">
								<p className="text-[14px] font-medium uppercase tracking-widest text-[#86868b]">
									Featured
								</p>
								<h3 className="mt-4 text-[40px] font-semibold tracking-tight text-white sm:text-[56px]">
									ความเร็วระดับ Edge
								</h3>
								<p className="mx-auto mt-4 max-w-[500px] text-[19px] text-[#a1a1a6]">
									โหลดเร็วจากทุกมุมโลก ด้วย Cloudflare Workers และ D1 Database
								</p>
								<Link
									href="/posts"
									className="mt-8 inline-block text-[17px] text-[#2997ff] hover:underline"
								>
									เรียนรู้เพิ่มเติม ›
								</Link>
							</div>
						</div>
					</ParallaxLayer>
				</div>
			</section>

			{/* Features */}
			<section className="bg-white py-24">
				<div className="mx-auto grid max-w-[980px] gap-12 px-6 sm:grid-cols-3">
					{[
						{
							title: "อ่านง่าย",
							desc: "Typography ที่ออกแบบมาเพื่อการอ่านยาว สบายตา",
							color: "text-[#0071e3]",
						},
						{
							title: "จัดการง่าย",
							desc: "หน้า Admin สำหรับเพิ่ม แก้ไข และเผยแพร่บทความ",
							color: "text-[#bf4800]",
						},
						{
							title: "เร็วทันใจ",
							desc: "Deploy บน Cloudflare Edge ใกล้ผู้อ่านทุกคน",
							color: "text-[#30d158]",
						},
					].map((item) => (
						<div key={item.title} className="text-center">
							<h3 className={`text-[24px] font-semibold tracking-tight ${item.color}`}>
								{item.title}
							</h3>
							<p className="mt-2 text-[17px] leading-relaxed text-[#86868b]">{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Latest posts */}
			<section id="latest" className="bg-[#f5f5f7] py-24">
				<div className="mx-auto max-w-[980px] px-6">
					<ParallaxLayer speed={0.08}>
						<h2 className="mb-2 text-center text-[40px] font-semibold tracking-tight text-[#1d1d1f] sm:text-[48px]">
							บทความล่าสุด
						</h2>
						<p className="mb-16 text-center text-[19px] text-[#86868b]">
							ค้นพบเรื่องราวและข่าวสารที่น่าสนใจ
						</p>
					</ParallaxLayer>

					{posts.length === 0 ? (
						<p className="text-center text-[17px] text-[#86868b]">ยังไม่มีบทความที่เผยแพร่</p>
					) : (
						<div className="grid gap-6 sm:grid-cols-2">
							{posts.map((post, i) => (
								<ParallaxLayer key={post.id} speed={0.05 * (i % 2 === 0 ? 1 : -1)}>
									<PostCard post={post} variant="compact" />
								</ParallaxLayer>
							))}
						</div>
					)}

					{posts.length > 0 && (
						<div className="mt-12 text-center">
							<Link
								href="/posts"
								className="text-[17px] text-[#0071e3] transition-opacity hover:opacity-80"
							>
								ดูบทความทั้งหมด ›
							</Link>
						</div>
					)}
				</div>
			</section>

			{/* CTA */}
			<section className="bg-black py-24 text-center text-white">
				<ParallaxLayer speed={0.1}>
					<h2 className="text-[40px] font-semibold tracking-tight sm:text-[56px]">
						พร้อมเริ่มอ่านแล้วหรือยัง
					</h2>
					<p className="mx-auto mt-4 max-w-[500px] text-[19px] text-[#a1a1a6]">
						สำรวจบทความทั้งหมด หรือจัดการเนื้อหาผ่านหน้า Admin
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<Link
							href="/posts"
							className="rounded-full bg-[#0071e3] px-6 py-2.5 text-[17px] transition-all hover:bg-[#0077ed]"
						>
							เริ่มอ่าน
						</Link>
						<Link
							href="/admin"
							className="rounded-full border border-white/30 px-6 py-2.5 text-[17px] transition-all hover:bg-white/10"
						>
							ไปหน้า Admin
						</Link>
					</div>
				</ParallaxLayer>
			</section>
		</div>
	);
}
