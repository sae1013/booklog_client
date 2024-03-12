"use client";
import React from "react";
import { Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { Editor } from "@/components/Editor";
import { Editor as EditorType } from "@tiptap/react";
import DropDownMenu from "@/components/DropdownMenu";
import CtaButton from "@/components/base/CtaButton";
import AxiosInstance from "@/utils/AxiosInstance";

const PostWritePage = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      TextStyle,
      Color,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
  });

  const clickInsideEditor = () => {
    editor?.chain().focus();
  };

  const submitHTML = async (html: string) => {
    console.log(html);
    const response = await AxiosInstance.post("/post", {
      data: html,
    });
  };

  return (
    <>
      <header className="p-10 w-full">
        <DropDownMenu></DropDownMenu>
        <input
          placeholder="제목을 입력하세요"
          className="pt-5 w-full text-2xl text-gray-900 focus:outline-none"
        ></input>
      </header>
      <main>
        <Editor
          editor={editor as EditorType}
          clickInsideEditor={clickInsideEditor}
        ></Editor>
      </main>
      <footer className="bg-gray-100 font-normal text-lg py-4 px-6 flex items-center sticky bottom-0 z-50">
        <CtaButton
          styles="ml-auto rounded-3xl text-red-500 bg-white border border-red-300"
          onClick={() => {
            const html = editor?.getHTML();
          }}
        >
          <span>임시저장</span>
        </CtaButton>
        <CtaButton
          styles="rounded-3xl border border-neutral-400"
          onClick={() => {
            submitHTML(editor?.getHTML() as string);
          }}
        >
          <span>게시하기</span>
        </CtaButton>
      </footer>
    </>
  );
};

export default PostWritePage;
