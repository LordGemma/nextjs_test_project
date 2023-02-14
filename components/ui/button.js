import Link from "next/link";
import classes from "../../styles/button.module.css";

function Button(props) {
  const { link, children } = props;

  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }

  return <button className={classes.btn}>{children}</button>;
}

export default Button;
