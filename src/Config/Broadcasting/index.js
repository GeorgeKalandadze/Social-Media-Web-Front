import Pusher from "pusher-js";
import Echo from "laravel-echo";
import axiosClient, { postRequest } from "../../Axios/axiosClient";

const pusherConfig = {
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: false,
  withCredentials: true,
};



const echoConfig = {
  broadcaster: "pusher",
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  encrypted: false,
  // authEndpoint: `${import.meta.env.VITE_API_BASE_URL}/api/broadcasting/auth`,
  authorizer: (channel, options) => {
    return {
        authorize: (socketId, callback) => {
            axiosClient.post("/broadcasting/auth", {
                socket_id: socketId,
                channel_name: channel.name,
            })
            .then((response) => {
                callback(null, response.data);
            })
            .catch((error) => {
                callback(error);
            });
        },
    };
},

};

const pusher = new Pusher(pusherConfig.key, {
  cluster: pusherConfig.cluster,
  forceTLS: pusherConfig.forceTLS,
});

const echo = new Echo(echoConfig);

export { pusher, echo };
