import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { ReactMediaRecorder } from "react-media-recorder";
import async from 'react-async';
import { Button } from 'react-bootstrap';

function Record ()  {
  const [playing, setPlaying] = useState(false);

	const HEIGHT = 200;
	const WIDTH = 200;

	const startVideo = () => {
		setPlaying(true);
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

	const stopVideo = () => {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};

	return (
		<div className="record body">
			<div class="borderd-div record">
			<div className="app">
			<div className="app__container">
				<video
					height={HEIGHT}
					width={WIDTH}
					muted
					autoPlay
					className="app__videoFeed"
				></video>
			</div>
			<div className="app__input">
				{playing ? (
					<Button onClick={stopVideo}>Stop</Button>
				) : (
					<Button onClick={startVideo}>Start</Button>
				)}
			</div>
		</div>
			</div>
		</div>
	);
}

export default withRouter(Record);
