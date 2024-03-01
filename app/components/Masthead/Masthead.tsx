import Image from 'next/image'
import smhLogo from '@/public/smh-logo-white.svg'

const Masthead = () => {
	return (
		<div className="bg-[#0a1633] absolute top-0 left-0 h-[4.4rem] w-full py-[3rem] flex flex-col items-center justify-center">
			<a
				href="https://www.smh.com.au/"
				rel="noopener noreferrer"
				target="_blank">
				<Image
					src={smhLogo.src}
					alt="SMH Logo"
					// className="max-w-[23rem] w-full"
					width={230}
					height={40}
					style={{ width: 230, height: 40 }}
				/>
			</a>
		</div>
	)
}

export default Masthead
