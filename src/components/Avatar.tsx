import style from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar(props: AvatarProps) {
  const hasBorder = props.hasBorder !== false;

  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={props.src}
      alt=""
    />
  );
}
