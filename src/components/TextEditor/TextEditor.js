import React, {useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { txtinit } from "../../config/txtEditorInit";

export default function TextEditor({ setFieldValue, values, val }) {
  const editorRef = useRef(null);
  function decodeHTMLEntities(text) {
    let textArea = document.createElement("textarea");
     textArea.innerHTML = text;
    return textArea.value;
  }
  const saveContent = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setFieldValue("ticketDescription", editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey='no-api-key'
        onInit={(evt, editor) => (editorRef.current = editor)}
        onBlur={()=>{
          saveContent();
        }}
        initialValue={val ? decodeHTMLEntities(val) : ""}
        init={txtinit}
      />
    </>
  );
}