import React from "react";
import styled from "styled-components";

const StyledEditorSettings = styled.div`
  display: flex;
  font-size: 0.8em;
  flex-direction: column;
  label {
    margin-bottom: 20px;
  }
  input {
    &&:checked + label {
    }
  }
`;

const EditorSettings = () => {
  return (
    <StyledEditorSettings>
      <label>
        <input type="checkbox" name="" id="" />
        Active Tab Border
      </label>
      <label>
        <input type="checkbox" name="" id="" />
        Borderless
      </label>
      <label>
        <input type="checkbox" name="" id="" />
        High Contrast
      </label>
    </StyledEditorSettings>
  );
};

export default EditorSettings;
