import { ToastAndroid } from "react-native";

function showToastText(text) {
    ToastAndroid.show(text, ToastAndroid.SHORT)
}

const useToast = ()=> {
    return {
        showToastText
    }
}

export default useToast;