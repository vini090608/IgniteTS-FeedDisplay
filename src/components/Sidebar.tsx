import { Avatar } from "./Avatar";
import style from "./Sidebar.module.css";

import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1772289495953-1271fe108a6c?q=50&w=256&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className={style.profile}>
        <Avatar src="https://github.com/vini090608.png" />

        <strong>Vinicius Pereira</strong>
        <span>Fullstack Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
