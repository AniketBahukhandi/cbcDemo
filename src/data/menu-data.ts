import { IMenuData } from "@/types/menu-data-type";
const menu_data: IMenuData[] = [
  {
    id: 1,
    link: "/",
    title: "Admission",
  },

  {
    id: 2,
    link: "/",
    title: "Placement",
    sub_menus: [
      { link: "/", title: "See Jobs Live Now" },
      { link: "/company-v1", title: "Aloha on the Ganges" },
      { link: "/company-v1", title: "Artera Group" },
      { link: "/company-v1", title: "Capital Via" },
      { link: "/company-v1", title: "CeaseFire Industries Ltd." },
      { link: "/company-v1", title: "Coachywoods" },
      { link: "/company-v1", title: "Cynoteck Technology Solutions Pvt Ltd." },
      { link: "//jobs.careerbuddyclub.com/", title: "see more" },
    ],
  },
  // {
  //   id: 3,
  //   link: "/schools",
  //   title: "School",
  //   mega_menus: [
  //     {
  //       id: 1,
  //       title: "Colleges By Degree",
  //       sub_menus: [
  //         { title: "Btech", link: "/" },
  //         { title: "BBA", link: "/" },
  //         { title: "Agriculture", link: "/" },
  //         { title: "Pharma", link: "/" },
  //         { title: "", link: "/" },
  //         { title: "", link: "/" },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "College By location",
  //       sub_menus: [
  //         { title: "Maharastra", link: "/" },
  //         { title: "Tamil Nadu", link: "/" },
  //         { title: "Uttarakhand", link: "/" },
  //         { title: "Delhi", link: "/" },
  //         { title: "Himachal Pradesh", link: "/" },
  //         { title: "See more", link: "/" },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Top Colleges",
  //       sub_menus: [
  //         { title: "Guru Nanak College", link: "/" },
  //         { title: "BFIT", link: "/" },
  //         { title: "Graphic era", link: "/" },
  //         { title: "See more", link: "/" },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       title: "Study Abroad",
  //       sub_menus: [
  //         { title: "Dubai University", link: "/" },
  //         { title: "MIT", link: "/" },
  //         { title: "Europe University", link: "/" },
  //         { title: "See more", link: "/" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   link: "/corporate",
  //   title: "Corporate",
  //   mega_menus: [
  //     {
  //       id: 1,
  //       title: "Techical Courses",
  //       sub_menus: [
  //         { title: "B.tech", link: "/" },
  //         { title: "B.Arch", link: "/" },
  //         { title: "B.Tech in ME", link: "/" },
  //         { title: "B.Sc Radiology", link: "/" },
  //         { title: "B.Sc", link: "/" },
  //         { title: "B.Sc in Medical", link: "/" },
  //         { title: "See More", link: "/" },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Management Courses",
  //       sub_menus: [
  //         { title: "MBA", link: "/" },
  //         { title: "AutoCAD", link: "/" },
  //         { title: "B.Des", link: "/" },
  //         { title: "B.Ed", link: "/" },
  //         { title: "B.Sc Agriculture", link: "/" },
  //         { title: "", link: "/" },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Medical Courses",
  //       sub_menus: [
  //         { title: "MBA In Media ", link: "/" },
  //         { title: "MBA In Business", link: "/" },
  //         { title: "MBA In Operations ", link: "/" },
  //         { title: "B.Sc In Statistics", link: "/" },
  //         { title: "B.Sc In Home Science", link: "/" },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       title: "Design Courses",
  //       sub_menus: [
  //         { title: "Bachelor of Management Studies", link: "/" },
  //         { title: "Bachelor of Mass Communication", link: "/" },
  //         { title: "Bachelor of Computer Application", link: "/" },
  //         { title: "B Pharma", link: "/" },
  //         { title: "Bachelors of Dental Surgery (BDS)", link: "/" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   link: "/",
  //   title: "Careers",
  //   mega_menus: [
  //     {
  //       id: 1,
  //       title: "Want to Become ?",
  //       sub_menus: [
  //         { title: "IAS Officer", link: "/" },
  //         { title: "Police Officer", link: "/" },
  //         { title: "Doctor", link: "/" },
  //         { title: "Medical Officer", link: "/" },
  //         { title: "Indian Forest Services", link: "/" },
  //         { title: "Chartered Accountant", link: "/" },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "",
  //       sub_menus: [
  //         { title: "Drug Inspector", link: "/" },
  //         { title: "Designer", link: "/" },
  //         { title: "Developer", link: "/" },
  //         { title: "Architecture", link: "/" },
  //         { title: "Lawyer", link: "/" },
  //         { title: "Anchor", link: "/" },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "",
  //       sub_menus: [
  //         { title: "Researcher", link: "/" },
  //         { title: "Analyst", link: "/" },
  //         { title: "Teacher", link: "/" },
  //         { title: "Sales", link: "/" },
  //         { title: "Chef", link: "/" },
  //         { title: "Scientist", link: "/" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   link: "//jobs.careerbuddyclub.com/",
  //   title: "JobPortal",
  // },

  {
    id: 5,
    link: "/",
    title: "Partners",
      sub_menus: [
        { title: "For School", link: "schools"},
        { title: "For Employer", link: "/corporate" },
        { title: "For College/ University", link: "/" },
      ],
  },
];

export default menu_data;
