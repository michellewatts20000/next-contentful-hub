import './styles/globals.scss'
import './styles/fonts.scss'
import { Inter } from 'next/font/google'
import { EXAMPLE_PATH, CMS_NAME } from '@/lib/constants'
import Image from 'next/image'

export const metadata = {
	title: `Next.js and ${CMS_NAME} Example`,
	description: `This is a blog built with Next.js and ${CMS_NAME}.`
}

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap'
})

function Footer() {
	return (
		<footer className="bg-black relative">
			<Image
				src="/footer-car.png"
				width={950}
				height={1080}
				alt="footer car decoration left"
				className="absolute left-0"
			/>
			<Image
				src="/footer-car-right.png"
				width={950}
				height={1080}
				alt="footer car decoration right"
				className="absolute right-0"
			/>
			<div className="container mx-auto px-5">
				<div className="py-28 flex flex-col justify-center items-center text-white text-center h-[1080px]">
					<h1 className="max-w-[745px] font-bold text-60 pb-[4.5rem]">
						Others talk about change, we’re driving it.
					</h1>
					<div className="max-w-[623px]">
						<p>
							Morbi enim nunc faucibus a. Tristique et egestas quis ipsum
							suspendisse ultrices gravida. Morbi quis commodo odio aenean sed
							adipiscing diam. Massa massa ultricies mi quis hendrerit dolor
							magna. Arcu cursus euismod quis viverra nibh cras pulvinar. Neque
							vitae tempus quam pellentesque nec nam aliquam.{' '}
						</p>

						<p>
							A arcu cursus vitae congue. Nunc sed augue lacus viverra vitae
							congue eu consequat ac. Id volutpat lacus laoreet non curabitur
							gravida arcu. Eu tincidunt tortor aliquam nulla facilisi cras
							fermentum odio.
							<br /> Amet dictum sit amet justo donec enim.{' '}
						</p>

						<p>
							Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Purus
							in mollis nunc sed id semper. Venenatis tellus in metus vulputate
							eu scelerisque felis imperdiet proin. Sapien eget mi proin sed
							libero. Arcu non sodales neque sodales. Quis commodo odio aenean
							sed adipiscing diam donec adipiscing tristique.{' '}
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={inter.variable}>
			<body>
				<section className="min-h-screen">
					<main>{children}</main>
					<Footer />
				</section>
			</body>
		</html>
	)
}
