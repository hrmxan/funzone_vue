import {
    useToast
} from "vue-toastification";

const toast = useToast();

let options = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
}

const success = function (message) {
    return toast.success(message, options);
}

const error = function (message) {
    return toast.error(message, options);
}

const warning = function (message) {
    return toast.warning(message, options);
}

const info = function (message) {
    return toast.info(message, options);
}

export default {
    success,
    error,
    warning,
    info
}