
import React, { useState } from "react";
import Editor from "@monaco-editor/react"

const CodeEditorWindow = ({ onChange, language, code,}) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div style={{border:"none", overflow:"hidden", backgroundColor:"#f6f6f6"}}>
      <Editor
        height="15vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;