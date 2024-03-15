import { Menu, Button, Text, rem } from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";
import { MdTitle as IconTitle } from "react-icons/md";
import { FaBarcode as IconBarcode } from "react-icons/fa";
import classes from "./Dropdown.module.css";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
interface DropdownProps {
  setSearchOption: Dispatch<SetStateAction<"title" | "isbn">>;
}

export default function Dropdown(props: DropdownProps) {
  const clickMenuItem = (option: "title" | "isbn") => {
    props.setSearchOption(option);
  };
  return (
    <div
      style={{
        marginTop: ".5rem",
      }}
    >
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button style={{}}>검색 변경</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>검색방법</Menu.Label>
          <Menu.Item
            itemID="title_search"
            leftSection={
              <IconTitle style={{ width: rem(14), height: rem(14) }} />
            }
            onClick={() => clickMenuItem("title")}
          >
            제목으로 검색
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconBarcode style={{ width: rem(14), height: rem(14) }} />
            }
            onClick={() => clickMenuItem("isbn")}
          >
            ICBN 검색
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
