import React, {FC} from "react";
import { Link } from "react-router-dom";

export const Home: FC = ({...props}) => {
  return (
    <div>
      <h1>Here you can go to the different pages and project</h1>
      <button>
        <Link to="/whiteBlackWithOutContext">
          WhiteBlackTheme With --OUT-- Context API
        </Link>{" "}
        <br />
      </button>
      <br /> <br />
      <button>
        <Link to="/whiteBlackWithContext">
          WhiteBlackTheme With Context API
        </Link>
      </button>
      <br /> <br />
      <button>
        <Link to="/multipleLanguageWithOutContext">
          MultipleLanguage With --OUT-- Context API
        </Link>
      </button>
      <br /> <br />
      <button>
        <Link to="/multipleLanguageWithContext">
          MultipleLanguage With Context API
        </Link>
      </button>
      <br /> <br />
      <button>
        <Link to="/userSessionWithOutContext">
          UserSession With --OUT-- Context API
        </Link>
      </button>
      <br /> <br />
      <button>
        <Link to="/userSessionWithContext">UserSession With Context API</Link>
      </button>
    </div>
  );
};
