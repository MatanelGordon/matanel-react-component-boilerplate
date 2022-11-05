import {FC, useEffect, useState} from "react";

export const Matanel: FC = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log('count changed: ', count)
	}, [count])

	return (<>
		<button onClick={() => setCount(i => i + 1)}>count</button>
		{!!count && <span>{count}</span>}
	</>)
}