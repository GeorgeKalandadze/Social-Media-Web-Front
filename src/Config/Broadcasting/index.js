import Pusher from "pusher-js";
import Echo from "laravel-echo";

const pusherConfig = {
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: false,
  withCredentials: true,
};

// Pusher.Runtime.createXHR = function () {
//   const xhr = new XMLHttpRequest();
//   xhr.withCredentials = true;
//   return xhr;
// };

const echoConfig = {
  broadcaster: "pusher",
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  encrypted: false,
  authEndpoint: `${import.meta.env.VITE_API_BASE_URL}/broadcasting/auth`,
  withCredentials: true,
};

const pusher = new Pusher(pusherConfig.key, {
  cluster: pusherConfig.cluster,
  forceTLS: pusherConfig.forceTLS,
});

const echo = new Echo(echoConfig);

export { pusher, echo };
