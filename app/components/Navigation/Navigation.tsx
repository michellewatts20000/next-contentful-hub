import { NavigationProps } from '@/app/types'

const Navigation: React.FC<NavigationProps> = ({
	categories
}: NavigationProps) => {
	return (
		<div className="absolute top-[3rem] right-[10rem] z-10">
			<ul className="flex max-w-[40rem]">
				{categories.map((category) => (
					<li
						key={category}
						className="li-margin">
						<a
							href="#"
							className="text-white text-[1.6rem] uppercase">
							{category}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Navigation
