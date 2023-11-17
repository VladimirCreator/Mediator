type Flat<Array extends ReadonlyArray<unknown>> =
	// @ts-expect-error
	Array extends ReadonlyArray<infer T> ? Array[number] : never

export type { Flat }
