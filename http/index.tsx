import React from "react"
import ReactDOM from "react-dom"
import RootStore, { context } from "./RootStore"
import { observer } from "mobx-react";

@observer
class Index extends React.Component {
	store = new RootStore()

	render() {
		return (
			<context.Provider value={this.store}>
				<span>Hello, world!</span>
			</context.Provider>
		)
	}
}

addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Index />, document.querySelector("#root"))
})
