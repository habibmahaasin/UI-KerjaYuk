export interface NotificationDataInterface {
  title: string;
  date: string;
  category: string;
  status: string;
  isRead: boolean;
  description: string;
}

export const NOTIFICATION_DATA: NotificationDataInterface[] = [
  {
    title: "Reimbursement",
    date: "Today",
    category: "Reimbursement",
    status: "approved",
    isRead: false,
    description:
      'Your submission "Lorem ipsum dolor sit amet..." with the total cost of 50,000 has been paid, please check your BRIMO application, Thank you',
  },
  {
    title: "Reimbursement",
    date: "Yesterday",
    category: "Reimbursement",
    status: "rejected",
    isRead: true,
    description:
      'Your submission "description" has been rejected, please click for details.',
  },
  {
    title: "Reimbursement",
    date: "2022-10-06",
    category: "Reimbursement",
    status: "processing",
    isRead: false,
    description:
      "Your submission will be processed according to the reimbursement schedule. Please wait.",
  },
  {
    title: "Sickness",
    date: "2022-10-05",
    category: "Sickness",
    status: "approved",
    isRead: false,
    description: "Your submission has been approved by the Superior.",
  },
  {
    title: "Sickness",
    date: "2022-10-05",
    category: "Sickness",
    status: "rejected",
    isRead: true,
    description:
      "Your submission has been rejected, please confirm with your Superior.",
  },
  {
    title: "Sickness",
    date: "2022-10-05",
    category: "Sickness",
    status: "processing",
    isRead: true,
    description:
      "Your submission is being reviewed to the Superior for the approval process, please wait.",
  },
  {
    title: "Overtime",
    date: "2022-10-05",
    category: "Overtime",
    status: "approved",
    isRead: false,
    description: "Your submission has been approved by the Superior.",
  },
  {
    title: "Overtime",
    date: "2022-10-05",
    category: "Overtime",
    status: "rejected",
    isRead: true,
    description:
      "Your submission has been rejected, please confirm with your Superior.",
  },
  {
    title: "Overtime",
    date: "2022-10-05",
    category: "Overtime",
    status: "processing",
    isRead: true,
    description:
      "Your submission is being reviewed to the Superior for the approval process, please wait.",
  },
];
