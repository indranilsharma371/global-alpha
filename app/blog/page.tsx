import fs from "fs";
import path from "path";

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "app/content/posts");

  const files = fs.readdirSync(postsDirectory);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-6xl font-bold mb-6">Global Alpha Blog</h1>

      <p className="text-xl mb-10">
        Market analysis, geopolitical insights, and economic research.
      </p>

      <div className="space-y-4">
        {files.map((file) => (
          <div
            key={file}
            className="border border-gray-700 p-5 rounded-xl"
          >
            <h2 className="text-2xl font-semibold">
              {file.replace(".mdx", "")}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}