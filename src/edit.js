import { useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";

export default function edit() {
    const blockProps = useBlockProps();
    return <p {...blockProps}>Edit JSX</p>;
}
