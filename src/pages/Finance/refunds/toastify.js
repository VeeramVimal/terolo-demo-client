import Swal from "sweetalert2";

export const SuccessToastify = () => {
    return Swal.mixin({
            toast: true,
            position: 'bottom-left',
            iconColor: 'white',
            background: 'green',
            color: 'white',
            customClass: {
                popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true
        }).fire({
            icon: "success",
            title: "Success"
        })
}

export const ErrorTostify = () => {
    return Swal.mixin({
        toast: true,
        position: 'bottom-left',
        iconColor: 'white',
        background: 'red',
        color: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true
    }).fire({
        icon: "error",
        title: "Error"
    })
}