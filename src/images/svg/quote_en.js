import React, { Fragment } from 'react';

const QuoteEn = ({ number }) => {

	return (
		<Fragment>
			{number === 0 ? <p style={{
				position: "absolute",
				right: "11px",
				top: "2px",
				fontSize: "8px",
				fontFamily: "Amble-light",
				color: "#fff"
			}}>0</p> :
				<p style={{
					position: "absolute",
					right: "11px",
					top: "2px",
					fontSize: "8px",
					fontFamily: "Amble-light",
					color: "#fff"
				}}>{number}</p>
			}
			<svg
				width="49" height="50"
				xmlns="http://www.w3.org/2000/svg"
				x={0}
				y={0}
				viewBox="0 0 49 50"
				style={{
					enableBackground: "new 0 0 49 50",
				}}
				xmlSpace="preserve"
			>
				<style>{".st64{fill:#8db72e}"}</style>
				<path
					className="st64"
					d="M33 8.1h-2.6V6.9c0-.4-.4-.5-.8-.5h-2c-.5-1.3-1.6-2-3-2-1.3-.1-2.5.8-3 2h-2c-.4 0-.7.2-.7.5V8h-2.6c-1.5 0-2.8 1.2-2.8 2.7V30c0 1.5 1.3 2.6 2.8 2.6H33c1.5 0 2.8-1.1 2.8-2.6V10.8c0-1.5-1.2-2.7-2.8-2.7zm-12.6-.4h1.9c.3 0 .6-.3.6-.6.2-.9 1-1.5 1.9-1.5s1.6.7 1.8 1.5c.1.3.3.6.7.6h1.9v2.7h-8.7V7.7h-.1zm14.1 22.4c0 .7-.7 1.2-1.5 1.2H16.5c-.7 0-1.5-.5-1.5-1.2V10.8c.1-.8.7-1.4 1.5-1.4H19v1.7c0 .4.4.7.7.6h9.9c.4 0 .7-.3.8-.6V9.4H33c.8 0 1.4.6 1.5 1.4v19.3z"
				/>
				<path
					className="st64"
					d="M22.2 19.4c-.3-.3-.7-.3-.9 0l-2.2 2.1-.9-.9c-.3-.3-.7-.3-.9 0-.3.3-.3.7 0 1l1.4 1.4c.1.1.3.2.5.2s.3-.1.5-.2l2.6-2.5c.1-.4.2-.8-.1-1.1zM31.8 20.8h-7.7c-.4 0-.7.3-.7.7s.3.7.7.7h7.7c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zM22.2 14c-.3-.3-.7-.3-.9 0l-2.2 2-.9-.9c-.3-.3-.7-.3-.9 0-.3.3-.3.7 0 1l1.4 1.4c.1.1.3.2.5.2s.3-.1.5-.2l2.6-2.5c.1-.3.2-.7-.1-1zM31.8 15.5h-7.7c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h7.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7zM22.2 24.8c-.3-.3-.7-.3-.9 0l-2.2 2.1-.9-.9c-.3-.3-.7-.3-.9 0-.3.3-.3.7 0 1l1.4 1.4c.1.1.3.2.5.2s.3-.1.5-.2l2.6-2.5c.1-.4.2-.8-.1-1.1zM31.8 26.2h-7.7c-.4 0-.7.3-.7.7s.3.7.7.7h7.7c.4 0 .7-.3.7-.7s-.3-.7-.7-.7z"
				/>
				<circle className="st64" cx={35.3} cy={7.1} r={7.1} />
				<path
					className="st64"
					d="M13.8 48.3c-1-.3-1.9-.7-2.9-1.1-.2-.1-.4-.1-.5-.1-1.7-.1-3.2-1.5-3.2-4.1 0-2.3 1.3-4.2 3.6-4.2s3.4 2 3.4 4.1c0 1.9-.7 3.2-1.7 3.6v.1c.6.2 1.2.4 1.8.5l-.5 1.2zm-1.4-5.4c0-1.5-.6-2.7-1.6-2.7-1.1 0-1.7 1.2-1.7 2.7 0 1.6.6 2.7 1.7 2.7 1 .1 1.6-1.1 1.6-2.7zM20.7 47H19v-.8c-.2.4-.8.9-1.7.9-1.2 0-1.9-.8-1.9-2.5v-3.5h1.8v3.2c0 .8.2 1.3.8 1.3.4 0 .7-.3.8-.6 0-.1.1-.3.1-.4V41h1.8v6zM27.2 44c0 2.2-1.5 3.1-2.8 3.1-1.6 0-2.8-1.1-2.8-3 0-2 1.2-3.1 2.9-3.1 1.6 0 2.7 1.2 2.7 3zm-3.8 0c0 1 .3 1.8 1.1 1.8.7 0 1-.8 1-1.8 0-.8-.3-1.8-1-1.8-.8 0-1.1 1-1.1 1.8zM30.3 39.4V41h1.3v1.3h-1.3v2.3c0 .7.2 1 .7 1h.5v1.3c-.2.1-.6.1-1.1.1s-1-.2-1.3-.5-.5-.9-.5-1.7v-2.5h-.8V41h.8v-1.2l1.7-.4zM33.8 44.6c0 .8.7 1.2 1.5 1.2.6 0 1-.1 1.5-.2l.2 1.2c-.5.2-1.2.3-2 .3-1.9 0-2.9-1.1-2.9-3 0-1.6 1-3.1 2.8-3.1 1.7 0 2.4 1.3 2.4 2.9 0 .3 0 .6-.1.8h-3.4v-.1zm1.9-1.2c0-.5-.2-1.2-.9-1.2s-1 .7-1 1.2h1.9zM38.4 43v-1.9h1.5l.1 1c.3-.8.9-1.1 1.5-1.1h.4v1.7h-.4c-.6 0-1 .3-1.2.9v3.5h-1.8l-.1-4.1z"
				/>
			</svg>
		</Fragment>
	);
}

export default QuoteEn;