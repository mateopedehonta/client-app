import { useState } from "react";
import { Link } from "react-router-dom";

const NotFoundContainer = () => {
  const [link, setLink] = useState({
    link: "",
  });
  const addData = (e) => {
    setLink({
      ...link,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <input type="text" name="link" onChange={addData} />
      <Link to={`/${link.link}`}>go mateo</Link>
    </>
  );
};

export default NotFoundContainer;
