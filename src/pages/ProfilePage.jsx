import React, { useState } from "react";
import Header from "../components/Layout/Header";
import ProfileSidebar from "../components/Prifile/ProfileSidebar";
import ProfileContent from "../components/Profile/ProfileContent.jsx";
import styles from "../styles/styles";

const ProfilePage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10 mb-[100px]`}>
        <div className="w-[50px] 800px:w-[335px] mt-[18%] sticky 800px:mt-0">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
    </div>
  );
};

export default ProfilePage;
