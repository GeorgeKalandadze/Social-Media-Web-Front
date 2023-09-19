import { Box, FormControl, InputLabel, MenuItem, Modal, Select } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PersonImg from '../assets/personimg.jpg'
import NatureImg from '../assets/nature1.jpg'
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputGroup from './Post/InputGroup';
import axiosClient from '../Axios/axiosClient';
import { useSelector } from 'react-redux';


const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 14,
  borderRadius: 1,
  p: 4,
  maxHeight: "95vh",
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#888 transparent",
  zIndex: 9999,
};


const UpdateProfileModal = ({open, close}) => {
    const [countries, setCountries] = useState([]);
    const currentUser = useSelector((state) => state.user.user);
    const [newUser, setNewUser] = useState({
      name: currentUser.name, 
      email: currentUser.email, 
    });
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        axiosClient.get('/countries')
        .then((res) => {
            setCountries(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      // const newData = { [name]: value };
      setNewUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    };

    console.log(newUser,"newuserrrrrrrrrrrr");
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className=" text-[26px] font-bold text-gray-500 opacity-40 mb-4">
            Update Your Profile
          </h1>
          <div>
            <div className="flex flex-wrap gap-5">
              <label
                htmlFor="cover"
                className="flex flex-col gap-4 text-gray-400 text-[14px]"
              >
                <span>Cover Picture</span>
                <div className="relative cursor-pointer">
                  <img
                    src={PersonImg}
                    className="w-[100px] h-[100px] object-cover"
                  />
                  <CloudUploadIcon className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" />
                </div>
              </label>
              <input type="file" id="cover" style={{ display: "none" }} />
              <label
                htmlFor="profile"
                className="flex flex-col gap-4 text-gray-400 text-[14px]"
              >
                <span>Profile Picture</span>
                <div className="relative cursor-pointer">
                  <img
                    src={NatureImg}
                    alt=""
                    className="w-[100px] h-[100px] object-cover"
                  />
                  <CloudUploadIcon className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] " />
                </div>
              </label>
              <input type="file" id="profile" style={{ display: "none" }} />
            </div>
            <div className="mt-4">
              <InputGroup
                className="border-b-2 border-gray-200 "
                label="Name"
                name="name"
                placeholder="enter your Name"
                value={newUser.name}
                onChange={handleInputChange}
              />
              {currentUser.google_id === null ? (
                <>
                  <InputGroup
                    className="border-b-2 border-gray-200"
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                    value={newUser.email}
                    onChange={handleInputChange}
                  />
                  {/* <InputGroup
                    className="border-b-2 border-gray-200"
                    label="Password"
                    placeholder="Enter your password"
                    value={currentUser.password}
                  />{" "}
                  <InputGroup
                    className="border-b-2 border-gray-200"
                    label="Password"
                    placeholder="Enter your password"
                  /> */}
                </>
              ) : null}

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Country"
                  value={selectedCountry}
                  name="country_id"
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    handleInputChange(e);
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
                {/* <p className="text-red-600 mt-2">
                  {errors.sub_category_id?.[0] && errors.sub_category_id?.[0]}
                </p> */}
              </FormControl>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="mt-6 bg-[#423dce] text-white px-6 py-3 font-medium rounded"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mt-6 bg-red-700 text-white px-6 py-3 font-medium rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default UpdateProfileModal