import { useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { FormEvent } from "react";

import { useCreatePostMutation, useGetPostsQuery } from "../graphql/generated";
import { graphQLClient } from "../services/graphQLClient";

export default function Posts() {
  const queryClient = useQueryClient();
  const { data } = useGetPostsQuery(graphQLClient);
  const { mutate } = useCreatePostMutation(graphQLClient, {
    onSuccess: () => queryClient.invalidateQueries(["GetPosts"]),
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { title, content } = Object.fromEntries(formData) as any;

    if (!title.trim() || !content.trim()) return;

    mutate({ title, content });

    e.currentTarget.reset();
  }

  return (
    <main className="flex flex-col justify-center bg-slate-900">
      <h1 className="mx-auto py-4 text-4xl font-bold text-white">Posts</h1>
      <div
        className={clsx(
          "container mx-auto min-h-screen space-y-6 p-7",
          "rounded-lg bg-gray-100"
        )}
      >
        <form
          className={clsx(
            "[&>*]:rounded-lg [&>*]:border [&>*]:p-2 [&>*]:shadow",
            "flex w-full flex-col space-y-2"
          )}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoComplete="off"
          />
          <textarea name="content" placeholder="Content" />
          <button
            className={clsx(
              "font-bold transition-all duration-200",
              "bg-white hover:bg-slate-900 hover:text-white"
            )}
            type="submit"
          >
            Post
          </button>
        </form>
        <hr className="border-gray-300" />
        <ul className="space-y-6">
          {data?.posts.map((post, index) => (
            <li key={post.id} className="rounded-lg bg-white p-4 shadow-md">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-sm text-zinc-500">{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
