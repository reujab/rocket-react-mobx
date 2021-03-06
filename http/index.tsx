import React from "react"
import ReactDOM from "react-dom"
import RootStore, { context } from "./RootStore"
import { observer } from "mobx-react";

const Index = observer(class Index extends React.Component {
	store = new RootStore()

	render(): JSX.Element {
		return (
			<context.Provider value={this.store}>
				<span>Hello, world!</span>
			</context.Provider>
		)
	}
})

addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Index />, document.querySelector("#root"))
})
