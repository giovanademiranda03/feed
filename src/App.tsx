import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post, type PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./index.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/giovanademiranda03.png",
      name: "Giovana de Miranda",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera👋" },
      {
        type: "paragraph",
        content:
          "Estou praticando meus conhecimentos em ReacJS com o curso Ignite da Rocketseat",
      },
      { type: "link", content: "Feed" },
    ],
    publishedAt: new Date("2023-06-19 16:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://artpoin.com/wp-content/uploads/2024/05/artpoin-bob-esponja262.png",
      name: "John Doe",
      role: "ADM",
    },
    content: [
      { type: "paragraph", content: "ADM" },
      {
        type: "paragraph",
        content: "Muito top o feed",
      },
      { type: "link", content: "Feed" },
    ],
    publishedAt: new Date("2023-06-20 16:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
