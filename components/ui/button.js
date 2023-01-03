import Link from "next/link";
import classes from "./button.module.css";

export default function Button(props) {
  return props.link ? (
    <Link className={classes.btn} href={props.link}>
      {props.children}
    </Link>
  ) : (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
