import PostTemplate from "../components/PostTemplate";

const Posts = () => {
  const posts = [
    {
      title: "Post one",
      content:
        "Hello I am post one. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: "Md Ishmam Iqbal",
      date: "18-07-23",
    },
    {
      title: "Post two",
      content:
        "Hello I am post two. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ",
      author: "Md Ishmam Iqbal",
      date: "18-07-23",
    },
    {
      title: "Post three",
      content:
        "Hello I am post three. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ",
      author: "Md Ishmam Iqbal",
      date: "18-07-23",
    },
  ];
  return (
    <main className="text-l text-[#dfdbd8] bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 h-full">
      <div className="mx-10 pb-10 pt-5">
        <h1 className="text-3xl">Featured</h1>
        <div>
          {posts.map((post) => {
            return (
              <PostTemplate
                key={post.title}
                title={post.title}
                author={post.author}
                content={post.content}
                date={post.date}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Posts;
