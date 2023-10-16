import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextAreaInput(
    { className = "", isFocused = false, cols = 20, rows = 4, ...props },
    ref
) {
    const textareaRef = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            textareaRef.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            className={
                "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
                className
            }
            cols={cols}
            rows={rows}
            ref={textareaRef}
        />
    );
});
