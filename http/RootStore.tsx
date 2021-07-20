import React from "react"
import { makePersistable } from "mobx-persist-store"
import { observable } from "mobx"

export default class RootStore {
	constructor() {
		makePersistable(this, {
			name: "RootStore",
			properties: ["field"],
		})
	}

	@observable
	field: string = "foobar"
}

export const context = React.createContext<RootStore>(null)
