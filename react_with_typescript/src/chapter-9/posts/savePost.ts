import { NewPostData, SavedPostData } from "./types";

export async function savePost(newPostData: NewPostData) {
  const response = await fetch(import.meta.env.VITE_APP_URL!, {
    method: "POST",
    body: JSON.stringify(newPostData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const body = (await response.json()) as unknown;
  assertIsSavedPost(body);
  return { ...newPostData, ...body };
}

function assertIsSavedPost(post: any): asserts post is SavedPostData {
  if (!("id" in post)) {
    throw new Error("post doesn't contain id");
  }
  if (typeof post.id !== "number") {
    throw new Error("id is not a number");
  }
}

// ----------------------------------
// import { NewPostData, SavedPostData } from "./types";
// export async function savePost(newPostData: NewPostData) {
//   const response = await fetch(import.meta.env.VITE_APP_URL!, {
//     method: "POST",
//     body: JSON.stringify(newPostData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const body = (await response.json()) as unknown;
//   assertIsSavedPost(body);
//   return { ...newPostData, ...body };
// }
// function assertIsSavedPost(post: any): asserts post is SavedPostData {
//   if (!("id" in post)) {
//     throw new Error("post doesn't contain id");
//   }
//   //   if (typeof post.id !== "number") {
//   //     throw new Error("id is not a number");
//   //   }
//   if (typeof post.id !== "number") {
//     if (typeof post.id === "string" && !isNaN(Number(post.id))) {
//       post.id = Number(post.id); // Convert string to number
//     } else {
//       throw new Error("id is not a number");
//     }
//   }
// }
