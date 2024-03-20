import { Editor } from "react-draft-wysiwyg";
import "./editor.css";
const CustomEditor = ({editorState, onEditorStateChange }) => {
    return (
        <div className="editor">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={data => onEditorStateChange(data)}
          />
        </div>
    )
}

export default CustomEditor;