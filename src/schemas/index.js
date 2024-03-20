import * as Yup from "yup";

export const addGrievancesSchema = Yup.object({
    reason:Yup.string().min(2).max(25).required("please enter the reason"),
    refundedAmount:Yup.number().min(1).required("please enter the refunded amount"),
    currencyType:Yup.string().required("please select the currency type"),
    clientDescription:Yup.string().min(2).max(25).required("please enter the description"),
    issue:Yup.string().min(2).required("please enter the issue"),
    customerName:Yup.string().min(2).max(25).required("please enter the customer name"),
    paymentGrievanceStatus:Yup.string().min(2).max(10).required("please select the status"),
});

export const editGrievanceSchema = Yup.object({
    reason:Yup.string().min(2).max(25).required("please enter the reason"),
    refundedAmount:Yup.number().min(1).required("please enter the refunded amount"),
    clientDescription:Yup.string().min(2).required("please enter the description"),
    currencyType:Yup.string().required("please select the currency type"),
    issue:Yup.string().min(2).required("please enter the issue"),
    customerName:Yup.string().min(2).max(25).required("please enter the customer name"),
    paymentGrievanceStatus:Yup.string().min(2).max(10).required("please select the status"),

});


