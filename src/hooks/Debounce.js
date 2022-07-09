import { useState, useEffect } from "react";


function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const Handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(Handler)
    }, [value])

    return debounceValue
}

export default useDebounce