import { forwardRef, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Pastikan untuk mengimpor stylesheet yang sesuai

export default forwardRef(function TextAreaInput(
    { className = "", isFocused = false, style = {}, ...props },
    ref
) {
    const textareaRef = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            textareaRef.current.focus();
        }
    }, []);

    return (
        <ReactQuill
            {...props}
            className={className}
            ref={textareaRef}
            theme="snow"
            style={style}
        />
    );
});
