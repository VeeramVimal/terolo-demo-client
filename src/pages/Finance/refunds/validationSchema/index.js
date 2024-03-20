import * as yup from "yup"

export const refundValidationSchema = yup.object().shape({
    // orderId: yup.number().integer(),
    refundReason: yup.string().max(35, 'Must be 35 characters or less').required('This field is required'),
    invoiceDoc: yup.string().required('This field is required'),
    dateOfPaid: yup.date().required('This field is required'),
    projectBudget: yup.number().integer().required('This field is required'),
    currencyType: yup.string().required('This field is required'),
    refundedAmount: yup.number().required('This field is required'),
    paymentMethodId: yup.number().integer().required('This field is required'),
    paymentType: yup.string().required('This field is required'),
    // customerId: yup.number().integer(),
    // companyName: yup.string(),
    customerName: yup.string().required('This field is required'),
    // clientDescription: yup.string().required('clientDescription is required').validate('paid', 'pending', 'cancelled')
    clientDescription: yup.string().required('This field is required')

  })

