import './style.scss'

const BrightcoveVideo = () => {
	// this is breaking - https://github.com/brightcove/react-player-loader/issues/102
	// return (
	// 	<BrightcovePlayer
	// 		accountId="6165065566001"
	// 		videoId="6310587103112"
	// 		playerId="wIpGq2Kd0p"
	// 		embedType="iframe"
	// 		embedOptions={{ responsive: true }}
	// 	/>
	// )

	return (
		<div
			style={{
				position: 'relative',
				display: 'block',
				maxWidth: '100%',
				height: '100%'
			}}>
			<div style={{ paddingTop: '56.25%' }}>
				<iframe
					src="https://players.brightcove.net/6165065566001/wIpGq2Kd0p_default/index.html?videoId=6310587103112&loop=true&autoplay=true&muted=true"
					allow="encrypted-media"
					style={{
						position: 'absolute',
						top: '0px',
						right: '0px',
						bottom: '0px',
						left: '0px',
						width: '100%',
						height: '100%'
					}}></iframe>
			</div>
		</div>
	)
}

export default BrightcoveVideo
