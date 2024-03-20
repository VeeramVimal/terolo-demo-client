import { message, notification } from "antd"
import{Tooltip} from 'antd'

export const toastMessages = (type, message, description, placement = 'bottomLeft') => {
    switch (type) {
        case 'success':
            return notification[type]({
                message,
                description,
                placement,
                style:{borderLeft:"3px solid #47D764"}
            })
            break;
        case 'warning':
            return notification[type]({
                message,
                description,
                placement,
                style:{borderLeft:"3px solid #FFFF00"}
            })
            break;
        case 'error':
            return notification[type]({
                message,
                description,
                placement,
                style:{borderLeft:"3px solid #FF0000"}
            })
            break;
        default:
            return notification[type]({
                message,
                description,
                placement,
                style:{borderLeft:"3px solid #1890ff"}
            })
            break;
    }


}

export const AlertMessage = (type, content) => {
    switch (type) {
        case 'success':
            return message[type]({
                content,
            })
            break;
        case 'error':
            return message[type]({
                content,
            })
            break;
        case 'warning':
            return message[type]({
                content,
            })
            break;

        default:
            break;
    }
};