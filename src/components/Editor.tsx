import { RichTextEditor } from "@mantine/tiptap";

import { IconColorPicker } from "@tabler/icons-react";
import { Editor as EditorType } from "@tiptap/react";
import { createTheme, MantineProvider } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
interface EditorProps {
  editor: EditorType;
  clickInsideEditor?: () => void;
  use?: "edit" | "view";
}
const EditorToolBar = () => {
  return (
    <RichTextEditor.Toolbar sticky stickyOffset={0}>
      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Bold />
        <RichTextEditor.Italic />
        <RichTextEditor.Underline />
        <RichTextEditor.Strikethrough />
        <RichTextEditor.ClearFormatting />
        <RichTextEditor.Highlight />
        <RichTextEditor.Code />
      </RichTextEditor.ControlsGroup>
      <RichTextEditor.ColorPicker
        colors={[
          "#25262b",
          "#868e96",
          "#fa5252",
          "#e64980",
          "#be4bdb",
          "#7950f2",
          "#4c6ef5",
          "#228be6",
          "#15aabf",
          "#12b886",
          "#40c057",
          "#82c91e",
          "#fab005",
          "#fd7e14",
        ]}
      />

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Control interactive={false}>
          <IconColorPicker size="1rem" stroke={1.5} />
        </RichTextEditor.Control>
        <RichTextEditor.Color color="#F03E3E" />
        <RichTextEditor.Color color="#7048E8" />
        <RichTextEditor.Color color="#1098AD" />
        <RichTextEditor.Color color="#37B24D" />
        <RichTextEditor.Color color="#F59F00" />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.UnsetColor />
      <RichTextEditor.ControlsGroup>
        <RichTextEditor.H1 />
        <RichTextEditor.H2 />
        <RichTextEditor.H3 />
        <RichTextEditor.H4 />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Blockquote />
        <RichTextEditor.Hr />
        <RichTextEditor.BulletList />
        <RichTextEditor.OrderedList />
        <RichTextEditor.Subscript />
        <RichTextEditor.Superscript />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Link />
        <RichTextEditor.Unlink />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.AlignLeft />
        <RichTextEditor.AlignCenter />
        <RichTextEditor.AlignJustify />
        <RichTextEditor.AlignRight />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Undo />
        <RichTextEditor.Redo />
      </RichTextEditor.ControlsGroup>
    </RichTextEditor.Toolbar>
  );
};
export const Editor = ({
  editor,
  use = "edit",
  clickInsideEditor,
}: EditorProps) => {
  return (
    <MantineProvider>
      <RichTextEditor editor={editor}>
        {use === "edit" && <EditorToolBar />}
        <RichTextEditor.Content autoFocus onClick={clickInsideEditor} />
      </RichTextEditor>
    </MantineProvider>
  );
};
