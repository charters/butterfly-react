var COUNSELORS = [
	{
		name: "Woodchuck",
		money: 1200,
		id: 1,
	},
	{
		name: "Cookie",
		money: 1000,
		id: 2,
	},
	{
		name: "Pepper",
		money: 800,
		id: 3,
	},
	{
		name: "Blink",
		money: 300,
		id: 4,
	},
];

function Header(props) {
	return(
		<div className = "header">
			<h1>{props.title}</h1>
		</div>
		);
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired,
};

function Counselor(props) {
	return(
		<div className = "counselor">
			<div className = "counselor-nickname">
				{props.name}
			</div>

			<div className = "counselor-money">
				${props.money}
			</div>
			
		</div>
		);
}

Counselor.propTypes = {
	name: React.PropTypes.string.isRequired,
	money: React.PropTypes.number.isRequired,
};

function Application (props) {
	return(
		<div className="leaderboard">
			<Header title = {props.title} />

			<div className = "counselors">
				{props.counselors.map(function(counselor) {
					return <Counselor name={counselor.name} money={counselor.money} key = {counselor.id} />
				})}
			</div>

		</div>

		);
}

Application.propTypes = {
	title: React.PropTypes.string,
	counselors: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		money: React.PropTypes.number.isRequired,
		id: React.PropTypes.number.isRequired,
		}
	)).isRequired,
};

Application.defaultProps = {
	title: "Butterfly",

};

ReactDOM.render(<Application counselors={COUNSELORS} />, document.getElementById('root'));