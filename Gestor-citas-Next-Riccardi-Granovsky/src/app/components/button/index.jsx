const ButtonLink = ({ texto, link }) => {
    return (
      <div>
        <a type="button" /*className={styles.welcome-btn}*/ href={link}>
          {texto}
        </a>
      </div>
    );
  };

  export default ButtonLink;