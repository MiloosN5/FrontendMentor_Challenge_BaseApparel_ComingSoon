const Decorative = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="decorativeImg" viewBox="0 0 830 800">
            <defs>
                <linearGradient id="a2" x1="95.861%" x2="10.913%" y1="2.476%" y2="101.718%">
                    <stop offset="0%" stopColor="#FFF1F1" />
                    <stop offset="100%" stopColor="#FFF" />
                </linearGradient>
                <linearGradient id="b2" x1="95.937%" x2="10.848%" y1="2.476%" y2="101.718%">
                    <stop offset="0%" stopColor="#FFF1F1" />
                    <stop offset="100%" stopColor="#FFF" />
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path fill="url(#a2)" d="M0 800c48.557-184.991 167.048-301.57 355.473-349.737C543.898 402.096 688.074 252.008 788 0v800H0z" transform="rotate(180 394 400)" />
                <path fill="url(#b2)" d="M413 800c25.696-97.814 88.4-159.455 188.112-184.924C700.824 589.608 777.12 510.25 830 377v423H413z" />
            </g>
        </svg>
    )
}

export default Decorative