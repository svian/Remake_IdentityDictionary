import css from "./Waves.module.css";
import waveT from "../../../public/images/waveT.svg";
import waveB from "../../../public/images/waveB.svg";

interface WavesProps {
  children: React.ReactNode;
}

const Waves: React.FC<WavesProps> = (props: WavesProps) => {
  return (
    <>
      <div className={css.waveGroup}>
        <div className={css.waveTop}>
          <img src={waveT} />
        </div>

        <div>{props.children}</div>
        <div className={css.waveBottom}>
          <img src={waveB} />
        </div>
      </div>
    </>
  );
};

export default Waves;
