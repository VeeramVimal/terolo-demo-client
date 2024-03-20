import * as Yup from "yup";

export const TicketSchema = Yup.object({
  issueTitle: Yup.string().min(10).max(35).required("IssueTitle is required"),
  ticketCategory: Yup.string().required("Category is required"),
  ticketPriority: Yup.string().required("Priority is required"),
  companyDetail: Yup.string().required("Company Details is required"),
  ticketDescription: Yup.string()
    .min(15)
    .max(100)
    .required("Description is required"),
  ticketIssueImage: Yup.string().required("TicketIssueImage is required"),
  ticketIssueDoc: Yup.string().required("TicketIssueDocument is required"),
  ticketStatus: Yup.string().required("TicketStatus is required"),
  peopleId: Yup.string().required("This field is required"),
  dateOfCreate: Yup.date().required(" Date is required"),
});
