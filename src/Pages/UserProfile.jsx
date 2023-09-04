import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import BgImage from '../assets/nature1.jpg'
import PersonAvatar from "../assets/personimg.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from '@mui/material';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useParams } from 'react-router-dom';
import axiosClient from '../Axios/axiosClient';
const UserProfile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
      axiosClient
        .get(`/user/${id}`)
        .then((response) => {
          setUserData(response.data.user);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }, [id]);

  return (
    <AuthenticatedLayout>
      <div className="relative flex flex-col gap-4">
        <img src={BgImage} className="w-[120vw] h-[30vh]" />
        <img
          src={PersonAvatar}
          className="h-40 w-40 rounded-full object-cover absolute left-[50%] translate-x-[-50%] top-[22%] translate-y-5"
          style={{ border: "3px solid white" }}
        />
        <div className="w-full rounded bg-gray-100 py-[50px] flex items-center justify-around">
          <div className="flex gap-2">
            <TwitterIcon className="text-gray-700" />
            <InstagramIcon className="text-gray-700" />
            <FacebookIcon className="text-gray-700" />
            <LinkedInIcon className="text-gray-700" />
          </div>
          <div className="flex flex-col items-center gap-4 justify-center">
            <h1 className="font-medium text-[27px]">{userData.name}</h1>
            <div className="flex items-center gap-12 justify-center">
              <div className="flex items-center justify-between">
                <LocationOnIcon className="text-gray-700" />
                <p className="text-sm text-gray-500">Georgia</p>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon className="text-gray-700" />
                <p className="text-sm text-gray-500">{userData.email}</p>
              </div>
            </div>
            <button className="bg-[#6b21a8] text-white py-2 px-8 text-[17px] rounded">
              Follow
            </button>
          </div>
          <div className="flex gap-2">
            <IconButton
              id={`long-button`}
              aria-controls={"long-menu"}
              aria-expanded={"true"}
              aria-haspopup="true"
              //   onClick={(event) => openModal(event, props.id)}
            >
              <MoreVertIcon />
            </IconButton>
            <IconButton
              id={`long-button`}
              aria-controls={"long-menu"}
              aria-expanded={"true"}
              aria-haspopup="true"
              //   onClick={(event) => openModal(event, props.id)}
            >
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div></div>
    </AuthenticatedLayout>
  );
}

export default UserProfile