import React from "react";
import styles from "../../styles/reusable/Button.module.scss";
import clsx from "clsx";

type props = {
  label: string;
  onClick: any;
  isFullWidth?: boolean;
  className?: string;
};

const Button = ({ label, onClick, isFullWidth = false, className }: props) => {
  const classNames = clsx(styles.container, {
    [styles.fullWidth]: isFullWidth,
    [className ?? ""]: className,
  });
  return (
    <div className={classNames} onClick={onClick}>
      <span>{label}</span>
    </div>
  );
};

export default Button;
