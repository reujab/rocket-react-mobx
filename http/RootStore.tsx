import React from "react"
import { makePersistable } from "mobx-persist-store"
import { makeAutoObservable } from "mobx"

export default class RootStore {
	constructor() {
		makeAutoObservable(this)
		makePersistable(this, {
			name: "RootStore",
			properties: ["field"],
		})
	}

	field = "foobar"
}

export const context = React.createContext<RootStore>(null)
