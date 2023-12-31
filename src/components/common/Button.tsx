type Props = {
  text: string;
  styles: string;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ text, styles, onClick }) => {
  return (
    <>
      <button className={styles} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
