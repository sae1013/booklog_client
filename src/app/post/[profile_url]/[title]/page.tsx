"use client";

import { useRouter } from "next/navigation";
import { content } from "@/variables/posting";
import { useEditor } from "@tiptap/react";

import React from "react";
import { Link } from "@mantine/tiptap";
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

type PostViewerPageProps = {
  // profile_url: string;
  // title: string;
};
const PostViewerPage = (props: any) => {
  const router = useRouter();
  // const { profile_url: profileUrl, title } = router.query as PostPageQueryType;
  // const hash = title.split("-")[-1];
  // return <section dangerouslySetInnerHTML={{ __html: content }}></section>;
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
    content,
    editable: false,
  });
  return (
    <>
      <section className="mt-10 flex justify-center items-center">
        <div className="max-w-280">
          <div className="border-b border-neutral-300 mb-20 pb-8">
            <h1 className=" font-bold text-2xl">
              The Infinite Shades of Saudade Blue
            </h1>
            <div className="flex mt-10">
              <div className=" w-14 h-14 rounded-full bg-gray-500"></div>
              <div className="ml-5 flex-1">
                <h3>Maria Garcia</h3>
                <p>published Feb 12,2024</p>
              </div>
            </div>
          </div>
          <Editor editor={editor as EditorType} use="view"></Editor>
        </div>
      </section>
    </>
  );
};

export default PostViewerPage;
