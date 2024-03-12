import { GetServerSideProps, GetServerSidePropsContext } from "next";
import AxiosInstance from "@/utils/AxiosInstance";
import { useRouter } from "next/router";

type PostPageQueryType = {
  profile_url: string;
  title: string;
};
const PostPage = (props: any) => {
  const router = useRouter();
  const { profile_url: profileUrl, title } = router.query as PostPageQueryType;
  const hash = title.split("-")[-1];
  console.log(props.htmlData);

  return <div>hello world</div>;
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const profileUrl = params?.profile_url;
  const title = params?.title;
  const data = await AxiosInstance.get(`/post/${profileUrl}/${title}}`);
  return {
    props: {
      htmlData: data,
    }, // 필요한 props를 전달
  };
};
