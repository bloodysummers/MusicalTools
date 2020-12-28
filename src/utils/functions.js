import Toast from 'react-native-toast-message';

export const showToast = (type, text1, text2) => {
    switch(type) {
        case 'success':
        case 'error':
        case 'info':
            Toast.show({
                type,
                text1,
                text2,
                position: 'bottom',
                visibilityTime: 4000,
                autoHide: true,
                bottomOffset: 50
            });
            break;
        default:
            return;
    }
};