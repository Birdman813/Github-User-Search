import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import UserInfo from "./Components/UserInfo/UserInfo";
import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  return (
    <div className="bg-light dark:bg-dark w-screen min-h-screen pt-[31px] px-[24px] pb-[79px] md:pt-[140px] md:px-[98px] lg:flex lg:flex-col lg:items-center">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Input
        userName={userName}
        setUserName={setUserName}
        userData={userData}
        setUserData={setUserData}
        darkMode={darkMode}
        userNotFound={userNotFound}
        setUserNotFound={setUserNotFound}
      />
      {userData ? (
        <UserInfo
          userData={userData}
          setUserData={setUserData}
          userNotFound={userNotFound}
        />
      ) : null}
    </div>
  );
}

export default App;
