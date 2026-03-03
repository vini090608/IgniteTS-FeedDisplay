import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import style from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/brenodev2007.png",
      name: "Breno Soriani",
      role: "Desenvolvedo Web",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:30:42"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/orodrigogo.png",
      name: "Rodrigo Gonçalvez",
      role: "Desenvolvedo BackEnd",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
      },
      { type: "link", content: "devonlane.design" },
    ],
    publishedAt: new Date("2022-06-09 20:30:42"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/RayssaAssis.png",
      name: "Rayssa Assis",
      role: "Desenvolvedo BackEnd",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Fasdadadadassssssssdasadadadadadasdadasdasasdasdadadasdadasdadsadaghjgjgjgdadadadad",
      },
      { type: "link", content: "devonlane.design" },
    ],
    publishedAt: new Date("2022-10-07 20:30:42"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
