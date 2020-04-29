import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import CustomSelect from "./components/CustomSelect";
function App() {
	return (
		<Container>
			<Row>
				<Col md={4} />
				<Col md={4}>
					<h2>Secret Santa</h2>
				</Col>
				<Col md={4} />
			</Row>

			<CustomSelect />
		</Container>
	);
}

export default App;
