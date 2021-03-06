import menu from '../../../assets/icon/Icon_Menu.png';
import home from '../../../assets/icon/Vector.png';
import patient from '../../../assets/icon/Icon_Patient Profile.png';
import setting from '../../../assets/icon/Icon_Settings.png';
import history from '../../../assets/icon/Icon_medical history.png';
import appoinment from '../../../assets/icon/Icon_Appointment.png';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icon/Icon_Vector.png';
import iconside from '../../../assets/icon/Icon_SideArrow_round.png';
import darkMenu from '../../../assets/icon/darkMenu.png';
import darkclnder from '../../../assets/icon/darkCln.png';
import darkSetting from '../../../assets/icon/darkSetting.png';
import darkHistory from '../../../assets/icon/darkClock.png';
import darkUser from '../../../assets/icon/darkUser.png';

const SideBar = ({ changeShowHandler, showSideBar, darkMode }) => {
  return (
    <div
      className={`z-50 h-screen  px-6 fixed top-0 ${
        showSideBar
          ? 'w-[264px] bg-white'
          : 'w-[76px] bg-transparent overflow-hidden'
      }  ${darkMode ? 'bg-darkMode3 md:bg-darkMode2 text-darkModeText' : 'md:bg-white'} `}
    >
      <div className=" pb-[108px] pt-8">
        {showSideBar || (
          <div className="w-[41px] h-[41px]">
            {!darkMode && (
              <img
                src={menu}
                className="w-[41px] h-[41px] -ml-2 hover:cursor-pointer"
                alt="menu icon"
                onClick={changeShowHandler}
              />
            )}
            {darkMode && (
              <img
                src={darkMenu}
                className="w-[41px] h-[41px] -ml-2 hover:cursor-pointer"
                alt="menu icon"
                onClick={changeShowHandler}
              />
            )}
          </div>
        )}
        {showSideBar && (
          <div className="flex justify-between items-center">
            <img src={logo} alt="" />
            <p className="text-2xl font-bold mr-8">
              <span>Medi</span>
              <span className="text-hotpink">Doc</span>
            </p>
            <img
              src={iconside}
              alt=""
              className="absolute left-60 hover:cursor-pointer"
              onClick={changeShowHandler}
            />
          </div>
        )}
      </div>
      <ul className="hidden md:flex flex-col gap-12">
        <li>
          <Link to="/home" className="flex items-center gap-8 text-base">
            <img className="w-7 h-7" src={home} alt="home" />
            <span className="text-hotpink font-semibold">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="flex items-center gap-8 text-base">
            {!darkMode && (
              <img className="w-7 h-7" src={patient} alt="patient" />
            )}
            {darkMode && (
              <img className="w-7 h-7" src={darkUser} alt="patient" />
            )}
            <span className="font-semibold">Patient Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="flex items-center gap-8 text-base">
            {!darkMode && (
              <img className="w-7 h-7" src={appoinment} alt="appoinment" />
            )}
            {darkMode && (
              <img className="w-7 h-7" src={darkclnder} alt="appoinment" />
            )}
            <span className="font-semibold">Appointments</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="flex items-center gap-8 text-base">
            {!darkMode && (
              <img className="w-7 h-7" src={history} alt="history" />
            )}
            {darkMode && (
              <img className="w-7 h-7" src={darkHistory} alt="history" />
            )}
            <span className="font-semibold">Medical History</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="flex items-center gap-8 text-base">
            {!darkMode && (
              <img className="w-7 h-7" src={setting} alt="setting" />
            )}
            {darkMode && (
              <img className="w-7 h-7" src={darkSetting} alt="setting" />
            )}
            <span className="font-semibold">Settings</span>
          </Link>
        </li>
      </ul>

      {showSideBar && (
        <ul className="md:hidden flex flex-col gap-12">
          <li>
            <Link to="/home" className="flex items-center gap-8 text-base">
              <img className="w-7 h-7" src={home} alt="home" />
              <span className="text-hotpink font-semibold">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/home" className="flex items-center gap-8 text-base">
              {!darkMode && (
                <img className="w-7 h-7" src={patient} alt="patient" />
              )}
              {darkMode && (
                <img className="w-7 h-7" src={darkUser} alt="patient" />
              )}
              <span className="font-semibold">Patient Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/home" className="flex items-center gap-8 text-base">
              {!darkMode && (
                <img className="w-7 h-7" src={appoinment} alt="appoinment" />
              )}
              {darkMode && (
                <img className="w-7 h-7" src={darkclnder} alt="appoinment" />
              )}
              <span className="font-semibold">Appointments</span>
            </Link>
          </li>
          <li>
            <Link to="/home" className="flex items-center gap-8 text-base">
              {!darkMode && (
                <img className="w-7 h-7" src={history} alt="history" />
              )}
              {darkMode && (
                <img className="w-7 h-7" src={darkHistory} alt="history" />
              )}
              <span className="font-semibold">Medical History</span>
            </Link>
          </li>
          <li>
            <Link to="/home" className="flex items-center gap-8 text-base">
              {!darkMode && (
                <img className="w-7 h-7" src={setting} alt="setting" />
              )}
              {darkMode && (
                <img className="w-7 h-7" src={darkSetting} alt="setting" />
              )}
              <span className="font-semibold">Settings</span>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SideBar;
