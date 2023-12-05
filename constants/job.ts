const SEARCH_FILTERS = [
  {
    title: "Specialism",
    id: 1,
    options: [{ title: "Data & Analytics", value: "data&analytics" }],
  },
  {
    title: "Region",
    id: 2,
    options: [{ title: "New York", value: "newyork" }],
  },
  {
    title: "Location",
    id: 3,
    options: [{ title: "New York, USA", value: "newyork&usa" }],
  },
  {
    title: "Job type",
    id: 4,
    options: [{ title: "Developer", value: "jobtype" }],
  },
  {
    title: "Work model",
    id: 5,
    options: [{ title: "Hybrid", value: "hybrid" }],
  },
];

const JOB_CARD_TEMPLATE = {
  title: "Manager of Regulatory Compliance (NERC O&*P)",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  salary: "$39,000 pa",
  publishDate: "1 day ago",
  jobTypes: ["Wind", "USA", "New York", "Permanent", "Hybrid"],
};

const JOB_NEW = {
  title: "Manager of Regulatory Compliance (NERC O&*P)",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  salary: "$39,000 pa",
  publishDate: "New",
  jobTypes: ["Wind", "USA", "New York", "Permanent", "Hybrid"],
};
const JOB_CARDS_DATA = [
  ...Array(2).fill(JOB_NEW),
  ...Array(7).fill(JOB_CARD_TEMPLATE),
];

export { SEARCH_FILTERS, JOB_CARDS_DATA };
