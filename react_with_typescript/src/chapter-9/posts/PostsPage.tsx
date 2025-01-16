import { Suspense } from "react";
import { getPosts } from "./getPosts";
import { NewPostData, PostData } from "./types";
import { PostsList } from "./PostsLists";
import { savePost } from "./savePost";
import { NewPostForm } from "./NewPostForm";
import { assertIsPosts } from "./getPosts";
import { useLoaderData, Await } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";

export function PostsPage() {
  const { isLoading, data: posts } = useQuery(["postsData"], getPosts);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(savePost, {
    onSuccess: (savedPost) => {
      QueryClient.setQueryData<PostData[]>(["postsData"], (oldPosts) => {
        if (oldPosts === undefined) {
          return [savedPost];
        } else {
          return [savedPost, ...oldPosts];
        }
      });
    },
  });
  // const [isLoading, setIsLoading] = useState(true);
  // const data = useLoaderData();
  // assertIsData(data);
  // assertIsPosts(posts);
  // const [posts, setPosts] = useState<PostData[]>([]);
  // useEffect(() => {
  //   let cancel = false;
  //   getPosts().then((data) => {
  //     if (!cancel) {
  //       setPosts(data);
  //       setIsLoading(false);
  //     }
  //   });
  //   return () => {
  //     cancel = true;
  //   };
  // }, []);

  // async function handleSave(newPostData: NewPostData) {
  //   await savePost(newPostData);
  //   // const newPost = await savePost(newPostData);
  //   // setPosts([newPost, ...posts]);
  // }
  if (isLoading || posts === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }
  return (
    <div className="w-96 mx-auto mt-6">
      <h2 className="text-xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={mutate} />
      <PostsList posts={posts} />

      {/* <Suspense fallback={<div>Fetching...</div>}>
        <Await resolve={data.posts}>
          {(posts) => {
            assertIsPosts(posts);
            return <PostsList posts={posts} />;
          }}
        </Await>
      </Suspense> */}
    </div>
  );
}
type Data = {
  posts: PostData[];
};
export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data != "object") {
    throw new Error("Data isn't an object");
  }
  if (data === null) {
    throw new Error("Data is null");
  }
  if (!("posts" in data)) {
    throw new Error("data dosen't contain posts");
  }
}
