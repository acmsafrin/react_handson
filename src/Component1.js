import { useEffect, useState } from "react"
import useStore from "./useStore";

function Component1() {
    const count=useStore(-1)
    return (
        <div>
            Hello
            {count}
        </div>
    )
}

export default Component1