import {FC, useState} from "react";

export const Matanel: FC = () => {
    const [count, setCount] = useState(0);

    return (<>
        <button onClick={() => setCount(i => i + 1)}>count</button>
        {!!count && <span>{count}</span>}
    </>)
}