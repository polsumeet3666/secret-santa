import React from "react";
import Select from "react-select";
import "./CustomSelect.css";
import userdata from "../input.json";
import optionsdata from "../options.json";
import { Button, Row, Col, Modal } from "react-bootstrap";
const users = userdata;
const options = optionsdata;
class CustomSelect extends React.Component {
	state = {
		selectedOption: null,
		finalList: {},
		options: options,
		show: false,
		name: "",
	};

	handleChange = (selectedOption) => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	};

	handleFinalPrint = () => {
		console.log(this.state.finalList);
	};

	handleClick = () => {
		console.log("button clicked");
		console.log(`Option selected:`, this.state.selectedOption);
		console.log(this.state.options);

		let index = this.getRandomInt(0, this.state.options.length);
		let copyOptions = JSON.parse(JSON.stringify(this.state.options));
		let copyFinalOptions = JSON.parse(JSON.stringify(this.state.finalList));

		console.log(copyFinalOptions[this.state.selectedOption.value]);

		if (copyFinalOptions[this.state.selectedOption.value]) {
			alert("You have already assigned a friend");
		} else {
			console.log(copyOptions.length);

			let removed = copyOptions.splice(index, 1);
			console.log(removed);

			console.log(index);
			console.log(copyOptions.length);
			//	alert("You have to bring gift for " + removed[0]);

			copyFinalOptions[this.state.selectedOption.value] = removed[0];
			this.setState({
				options: copyOptions,
				finalList: copyFinalOptions,
				show: true,
				name: removed[0],
			});
		}
	};
	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}

	modalShow = () => {
		//this.setState({ show: true });
	};
	handleModalHide = () => {
		this.setState({ show: false });
	};
	render() {
		const { selectedOption } = this.state;

		let modal = (
			<Modal show={this.state.show} onHide={this.handleModalHide}>
				<Modal.Header closeButton>
					<Modal.Title>Suprise !!!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					You have to bring gift for {this.state.name}
				</Modal.Body>
			</Modal>
		);

		return (
			<div>
				<Row>
					<Col md={3} />
					<Col md={5}>
						<Select
							className="my-select"
							value={selectedOption}
							onChange={this.handleChange}
							options={users}
						/>
					</Col>
					<Col md={4} />
				</Row>
				<Row>
					<Col md={3} />
					<Col>
						<Button variant="success" onClick={this.handleClick}>
							Search
						</Button>
						<Button
							variant="primary"
							onClick={this.handleFinalPrint}
							className="finalprint"
						>
							Print Master Sheet on Console
						</Button>
					</Col>
					<Col md={3} />
				</Row>
				{modal}
			</div>
		);
	}
}

export default CustomSelect;
