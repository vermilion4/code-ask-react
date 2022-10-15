import '../stylesheets/shared.css';

export const Button = ({
  loginBtn,
  createBtn,
  startBtn,
  searchBtn,
  classname,
  text,
  link,
}) => {
  return (
    <a
      href={link}
      className={` ${classname} ${loginBtn && 'btn login'} ${
        createBtn && 'btn create'
      } ${startBtn && 'hero-btn btn get-started'} ${
        searchBtn && 'hero-btn btn search'
      }`}>
      {text}
    </a>
  );
};
