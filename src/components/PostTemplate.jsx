const PostTemplate = ({ title, author, content, date }) => {
  return (
    <div className="text-[#a4bbb5] mb-10 mt-5 border p-5 border-slate-400">
      <h1 className="font-semibold text-xl tracking-wide">{title}</h1>
      <h2 className="text-[#a4bbb5b8] text-xs">{author}</h2>
      <h2 className="text-[#a4bbb5b8] text-xs tracking-wide">{date}</h2>
      <p className="ml-5 mt-5 text-s text-justify">{content}</p>
    </div>
  );
};

export default PostTemplate;
