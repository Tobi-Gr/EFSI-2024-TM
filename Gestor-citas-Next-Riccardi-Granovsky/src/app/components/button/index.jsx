const ButtonLink = ({ texto, link }) => {
    return (
      <div>
        <a type="button" href={link}>
          {texto}
        </a>
      </div>
    );
  };

  export default ButtonLink;