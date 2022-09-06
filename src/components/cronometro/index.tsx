import Botao from "../botao";
import Relogio from "./relogio";
import style from "./cronometro.module.scss";
import { ITarefa } from "../../types/tarefas";
import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();

  // if (selecionado?.tempo) {
  //   setTempo(tempoParaSegundos(selecionado.tempo));
  // }
  
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempos: {tempo}      
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao text="Começar" />
    </div>
  );
}
