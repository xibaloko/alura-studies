import React from "react";
import style from "./botao.module.scss";

class Botao extends React.Component<{
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button type={type} className={style.botao} onClick={onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Botao;
