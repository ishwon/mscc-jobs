import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  jobsRaw: [
    {
      colour: "#ffffff",
      featured: true,
      hasLogo: true,
      id: 6490,
      job: {
        name: "Software Engineer",
        salary: "Rs 50, 000 - 60, 000",
        applyOnUrl: false,
        applyUrl:
          "https://www.candiman.net/GenericApplicationForm.aspx?appID=172&jobID=334182&site=resortwork.co.uk",
        type: "Full time",
        pay: "Rs 18 000 to Rs 30 000",
        seniority_level: "Entry",
        functions: "Project Management, Information Technology",
        startDesc: "July onwards",
        durationDesc: "August/September",
        benefits:
          "Competitive Salary, Flights to and from resort, Accommodation and more...",
        jobDesc:
          "<p>Dependant on location you will report to the Manager or the Childcare Manager where you will assist with the overall smooth running of the Childcare program 5-6 days a week.</p><p>You will be responsible for the safe and effective deliverance of the various Kids Clubs that we operate across our programs which encompass children of ages 4-7 and ages 8-12. Creating new, fun and kerr-azy activities you will ensure that all children are comfortable in their surroundings and enjoy their holiday.  All activities will be age appropriate and suited to parents when applicable. </p><p>Typically your day will be from 8am – 6pm with a break in the middle of the day where the children will re-join their parents for lunch, however you will run an evening activity 1-2 nights a week.</p><p><span> </span></p><p>  <br/><strong>Key Accountabilities & Responsibilities: </strong> <br/>  <br/><br/>·         Interacting with all guests in a professional yet relaxed fashion both during the day and evening  <br/>·         Represent the company in a professional, well presented manner at all times and in compliance with the company uniform policy  <br/>·         Deliver the Child Care section of the welcome meeting to promote childcare activities to all guests  <br/>·         Upsell in-resort extras e.g. Excursions, Junior Squad</p><p><strong>Operational </strong> <br/>·         Plan, organise & provide an engaging, inclusive and exciting range of activities for Kids Clubs – lawn games, arts & crafts, pool activities, bike rides, kayaking, sailing, windsurfing  <br/>·         Carry out all activities in a safe manner with regard to children’s learning and welfare needs  <br/>·         Ensure children have adequate shade, water breaks and sunscreen  <br/>·         Run evening social events for Kids Club members  <br/>·         Arrange prizes/certificates and awards for the children at the end of their week  <br/>·         Ensure children are signed in and out of your care by parent/guardian  <br/>·         Attending daily staff meeting to discuss activity plans and duties for the day  <br/>·         Ensure all children are registered including; special diet, allergies, care needs are recorded, monitored & delivered appropriately  <br/>·         Carrying out first aid and completing accident forms as necessary  <br/>·         Attend & socialise with children & guests at Welcome Meals/Theme Nights/BBQs  <br/>·         Complete health & safety and risk assessment for your designated childcare facilities and activities  <br/>·         Carrying out monthly stock takes, weekly deep clean of activity equipment & childcare facilities  <br/>·         Archiving all relevant childcare paperwork on a weekly basis  <br/>·         Assisting other departments as per operational needs</p><p> </p><p> </p>",
        requirements:
          "<p><strong>Qualifications</strong></p><ul><li>18 months experience in a Kids Club setting or similar, eg.\nActivities Nanny, Childrens Rep, Laser Quest, Jungle Gym,\nBrownie/Scout Leader </li><li>Paediatric First Aid </li><li>Further/Higher Education course in a relevant subject, eg.\nChildcare, sports, youth work <strong>OR</strong> a\nteaching qualification <strong>OR</strong>  full\ntime experience in childcare/sports coaching</li><li>Disclosure and Barring Service (DBS) check, formerly known as\nCriminal Record Bureau (CRB) checks </li></ul><p><strong> </strong><strong>Experience</strong></p><ul><li> Relevant / Transferable Work Experience </li><li>Secure Cash Handling Experience </li><li>Seasonal overseas experience with an Overseas Tour\nOperator </li></ul><p><strong>Skills & Ability </strong> <br/>Strong Open Water Swimming Ability (E)  <br/>Ability to run active and engaging activities  (E)  <br/>Customer Service (E)  <br/>Communication Skills (E)  <br/>Problem Solving & Complaint Handling (E)  <br/>Sales Experience (D)  <br/>Planning/Organisational (E)  <br/>Literate and numerate (E)  <br/>IT, Admin & Social Media (E)  <br/>Prior experience of sailing, windsurfing and paddlesports (HD)</p><strong>All applicants must have an EU / UK passport, UK address, UK bank account and UK National insurance number </strong>",
        responsibilities:
          "<p><strong>Qualifications</strong></p><ul><li>18 months experience in a Kids Club setting or similar, eg.\nActivities Nanny, Childrens Rep, Laser Quest, Jungle Gym,\nBrownie/Scout Leader </li><li>Paediatric First Aid </li><li>Further/Higher Education course in a relevant subject, eg.\nChildcare, sports, youth work <strong>OR</strong> a\nteaching qualification <strong>OR</strong>  full\ntime experience in childcare/sports coaching</li><li>Disclosure and Barring Service (DBS) check, formerly known as\nCriminal Record Bureau (CRB) checks </li></ul><p><strong> </strong><strong>Experience</strong></p><ul><li> Relevant / Transferable Work Experience </li><li>Secure Cash Handling Experience </li><li>Seasonal overseas experience with an Overseas Tour\nOperator </li></ul><p><strong>Skills & Ability </strong> <br/>Strong Open Water Swimming Ability (E)  <br/>Ability to run active and engaging activities  (E)  <br/>Customer Service (E)  <br/>Communication Skills (E)  <br/>Problem Solving & Complaint Handling (E)  <br/>Sales Experience (D)  <br/>Planning/Organisational (E)  <br/>Literate and numerate (E)  <br/>IT, Admin & Social Media (E)  <br/>Prior experience of sailing, windsurfing and paddlesports (HD)</p><strong>All applicants must have an EU / UK passport, UK address, UK bank account and UK National insurance number </strong>",
        summary:
          "Codelitt is looking for a Senior .NET Developer with experience in building and maintaining web applications. You will be responsible for designing, developing and coordinating the work with the team. While this is a remote position, there are often meetings at 9 a.m. ET. Something to take into consideration. Mountain Time, Central Time, or Eastern Time preferred."
      },
      company: {
        name: "LSL Digital",
        id: 8487,
        logo: "lsldigital.svg"
      },
      tags: [
        {
          name: "GoLang",
          url: "golang"
        },
        {
          name: "Front End",
          url: "front-end"
        },
        {
          name: "UX",
          url: "ux"
        },
        {
          name: "UI",
          url: "ui"
        }
      ],
      tech_stack: [
        {
          logo: "vuejs.png",
          text: "Vue.js"
        },
        {
          logo: "golang.png",
          text: "GoLang"
        },
        {
          logo: "grpc.png",
          text: "GRPC"
        },
        {
          logo: "docker.png",
          text: "Docker"
        },
        {
          logo: "aws.png",
          text: "AWS"
        }
      ]
    },
    {
      colour: "#004a8f",
      featured: false,
      hasLogo: true,
      id: 6491,
      job: {
        name: "Service Delivery Manager",
        salary: "Rs 50, 000 - 60, 000",
        applyOnUrl: false,
        applyUrl:
          "https://www.candiman.net/GenericApplicationForm.aspx?appID=172&jobID=334182&site=resortwork.co.uk",
        type: "Full time",
        pay: "Rs 18 000 to Rs 30 000",
        seniority_level: "Entry",
        functions: "Project Management, Information Technology",
        startDesc: "July onwards",
        durationDesc: "August/September",
        benefits:
          "Competitive Salary, Flights to and from resort, Accommodation and more...",
        jobDesc:
          "<p>Dependant on location you will report to the Manager or the Childcare Manager where you will assist with the overall smooth running of the Childcare program 5-6 days a week.</p><p>You will be responsible for the safe and effective deliverance of the various Kids Clubs that we operate across our programs which encompass children of ages 4-7 and ages 8-12. Creating new, fun and kerr-azy activities you will ensure that all children are comfortable in their surroundings and enjoy their holiday.  All activities will be age appropriate and suited to parents when applicable. </p><p>Typically your day will be from 8am – 6pm with a break in the middle of the day where the children will re-join their parents for lunch, however you will run an evening activity 1-2 nights a week.</p><p><span> </span></p><p>  <br/><strong>Key Accountabilities & Responsibilities: </strong> <br/>  <br/><br/>·         Interacting with all guests in a professional yet relaxed fashion both during the day and evening  <br/>·         Represent the company in a professional, well presented manner at all times and in compliance with the company uniform policy  <br/>·         Deliver the Child Care section of the welcome meeting to promote childcare activities to all guests  <br/>·         Upsell in-resort extras e.g. Excursions, Junior Squad</p><p><strong>Operational </strong> <br/>·         Plan, organise & provide an engaging, inclusive and exciting range of activities for Kids Clubs – lawn games, arts & crafts, pool activities, bike rides, kayaking, sailing, windsurfing  <br/>·         Carry out all activities in a safe manner with regard to children’s learning and welfare needs  <br/>·         Ensure children have adequate shade, water breaks and sunscreen  <br/>·         Run evening social events for Kids Club members  <br/>·         Arrange prizes/certificates and awards for the children at the end of their week  <br/>·         Ensure children are signed in and out of your care by parent/guardian  <br/>·         Attending daily staff meeting to discuss activity plans and duties for the day  <br/>·         Ensure all children are registered including; special diet, allergies, care needs are recorded, monitored & delivered appropriately  <br/>·         Carrying out first aid and completing accident forms as necessary  <br/>·         Attend & socialise with children & guests at Welcome Meals/Theme Nights/BBQs  <br/>·         Complete health & safety and risk assessment for your designated childcare facilities and activities  <br/>·         Carrying out monthly stock takes, weekly deep clean of activity equipment & childcare facilities  <br/>·         Archiving all relevant childcare paperwork on a weekly basis  <br/>·         Assisting other departments as per operational needs</p><p> </p><p> </p>",
        requirements:
          "<p><strong>Qualifications</strong></p><ul><li>18 months experience in a Kids Club setting or similar, eg.\nActivities Nanny, Childrens Rep, Laser Quest, Jungle Gym,\nBrownie/Scout Leader </li><li>Paediatric First Aid </li><li>Further/Higher Education course in a relevant subject, eg.\nChildcare, sports, youth work <strong>OR</strong> a\nteaching qualification <strong>OR</strong>  full\ntime experience in childcare/sports coaching</li><li>Disclosure and Barring Service (DBS) check, formerly known as\nCriminal Record Bureau (CRB) checks </li></ul><p><strong> </strong><strong>Experience</strong></p><ul><li> Relevant / Transferable Work Experience </li><li>Secure Cash Handling Experience </li><li>Seasonal overseas experience with an Overseas Tour\nOperator </li></ul><p><strong>Skills & Ability </strong> <br/>Strong Open Water Swimming Ability (E)  <br/>Ability to run active and engaging activities  (E)  <br/>Customer Service (E)  <br/>Communication Skills (E)  <br/>Problem Solving & Complaint Handling (E)  <br/>Sales Experience (D)  <br/>Planning/Organisational (E)  <br/>Literate and numerate (E)  <br/>IT, Admin & Social Media (E)  <br/>Prior experience of sailing, windsurfing and paddlesports (HD)</p><strong>All applicants must have an EU / UK passport, UK address, UK bank account and UK National insurance number </strong>",
        summary:
          "Codelitt is looking for a Senior .NET Developer with experience in building and maintaining web applications. You will be responsible for designing, developing and coordinating the work with the team. While this is a remote position, there are often meetings at 9 a.m. ET. Something to take into consideration. Mountain Time, Central Time, or Eastern Time preferred."
      },
      company: {
        name: "LSL Digital",
        id: 8487,
        logo: "lsldigital.svg"
      },
      tags: [
        {
          name: "GoLang",
          url: "golang"
        },
        {
          name: "Front End",
          url: "front-end"
        },
        {
          name: "UX",
          url: "ux"
        },
        {
          name: "UI",
          url: "ui"
        }
      ]
    },
    {
      colour: "#F75940",
      featured: false,
      hasLogo: true,
      id: 6492,
      job: {
        name: "Systems Architect",
        salary: "Rs 100, 000 - 200, 000",
        applyOnUrl: true,
        applyUrl:
          "https://www.candiman.net/GenericApplicationForm.aspx?appID=172&jobID=334182&site=resortwork.co.uk",
        type: "Full time",
        pay: "Rs 18 000 to Rs 30 000",
        seniority_level: "Entry",
        functions: "Project Management, Information Technology",
        startDesc: "July onwards",
        durationDesc: "August/September",
        benefits:
          "Competitive Salary, Flights to and from resort, Accommodation and more...",
        jobDesc:
          "<p>Dependant on location you will report to the Manager or the Childcare Manager where you will assist with the overall smooth running of the Childcare program 5-6 days a week.</p><p>You will be responsible for the safe and effective deliverance of the various Kids Clubs that we operate across our programs which encompass children of ages 4-7 and ages 8-12. Creating new, fun and kerr-azy activities you will ensure that all children are comfortable in their surroundings and enjoy their holiday.  All activities will be age appropriate and suited to parents when applicable. </p><p>Typically your day will be from 8am – 6pm with a break in the middle of the day where the children will re-join their parents for lunch, however you will run an evening activity 1-2 nights a week.</p><p><span> </span></p><p>  <br/><strong>Key Accountabilities & Responsibilities: </strong> <br/>  <br/><br/>·         Interacting with all guests in a professional yet relaxed fashion both during the day and evening  <br/>·         Represent the company in a professional, well presented manner at all times and in compliance with the company uniform policy  <br/>·         Deliver the Child Care section of the welcome meeting to promote childcare activities to all guests  <br/>·         Upsell in-resort extras e.g. Excursions, Junior Squad</p><p><strong>Operational </strong> <br/>·         Plan, organise & provide an engaging, inclusive and exciting range of activities for Kids Clubs – lawn games, arts & crafts, pool activities, bike rides, kayaking, sailing, windsurfing  <br/>·         Carry out all activities in a safe manner with regard to children’s learning and welfare needs  <br/>·         Ensure children have adequate shade, water breaks and sunscreen  <br/>·         Run evening social events for Kids Club members  <br/>·         Arrange prizes/certificates and awards for the children at the end of their week  <br/>·         Ensure children are signed in and out of your care by parent/guardian  <br/>·         Attending daily staff meeting to discuss activity plans and duties for the day  <br/>·         Ensure all children are registered including; special diet, allergies, care needs are recorded, monitored & delivered appropriately  <br/>·         Carrying out first aid and completing accident forms as necessary  <br/>·         Attend & socialise with children & guests at Welcome Meals/Theme Nights/BBQs  <br/>·         Complete health & safety and risk assessment for your designated childcare facilities and activities  <br/>·         Carrying out monthly stock takes, weekly deep clean of activity equipment & childcare facilities  <br/>·         Archiving all relevant childcare paperwork on a weekly basis  <br/>·         Assisting other departments as per operational needs</p><p> </p><p> </p>",
        requirements:
          "<p><strong>Qualifications</strong></p><ul><li>18 months experience in a Kids Club setting or similar, eg.\nActivities Nanny, Childrens Rep, Laser Quest, Jungle Gym,\nBrownie/Scout Leader </li><li>Paediatric First Aid </li><li>Further/Higher Education course in a relevant subject, eg.\nChildcare, sports, youth work <strong>OR</strong> a\nteaching qualification <strong>OR</strong>  full\ntime experience in childcare/sports coaching</li><li>Disclosure and Barring Service (DBS) check, formerly known as\nCriminal Record Bureau (CRB) checks </li></ul><p><strong> </strong><strong>Experience</strong></p><ul><li> Relevant / Transferable Work Experience </li><li>Secure Cash Handling Experience </li><li>Seasonal overseas experience with an Overseas Tour\nOperator </li></ul><p><strong>Skills & Ability </strong> <br/>Strong Open Water Swimming Ability (E)  <br/>Ability to run active and engaging activities  (E)  <br/>Customer Service (E)  <br/>Communication Skills (E)  <br/>Problem Solving & Complaint Handling (E)  <br/>Sales Experience (D)  <br/>Planning/Organisational (E)  <br/>Literate and numerate (E)  <br/>IT, Admin & Social Media (E)  <br/>Prior experience of sailing, windsurfing and paddlesports (HD)</p><strong>All applicants must have an EU / UK passport, UK address, UK bank account and UK National insurance number </strong>",
        summary:
          "Codelitt is looking for a Senior .NET Developer with experience in building and maintaining web applications. You will be responsible for designing, developing and coordinating the work with the team. While this is a remote position, there are often meetings at 9 a.m. ET. Something to take into consideration. Mountain Time, Central Time, or Eastern Time preferred."
      },
      company: {
        name: "Mauritius Commercial Bank",
        id: 8488,
        logo: "mcb.png"
      },
      tags: [
        {
          name: "GoLang",
          url: "golang"
        },
        {
          name: "Front End",
          url: "front-end"
        },
        {
          name: "UX",
          url: "ux"
        },
        {
          name: "UI",
          url: "ui"
        }
      ]
    },
    {
      colour: "#ffffff",
      featured: false,
      hasLogo: true,
      id: 6493,
      job: {
        name: "Service Delivery Manager",
        salary: "Rs 50, 000 - 60, 000",
        applyOnUrl: false,
        applyUrl:
          "https://www.candiman.net/GenericApplicationForm.aspx?appID=172&jobID=334182&site=resortwork.co.uk",
        type: "Full time",
        pay: "Rs 18 000 to Rs 30 000",
        seniority_level: "Entry",
        functions: "Project Management, Information Technology",
        startDesc: "July onwards",
        durationDesc: "August/September",
        benefits:
          "Competitive Salary, Flights to and from resort, Accommodation and more...",
        jobDesc:
          "<p>Dependant on location you will report to the Manager or the Childcare Manager where you will assist with the overall smooth running of the Childcare program 5-6 days a week.</p><p>You will be responsible for the safe and effective deliverance of the various Kids Clubs that we operate across our programs which encompass children of ages 4-7 and ages 8-12. Creating new, fun and kerr-azy activities you will ensure that all children are comfortable in their surroundings and enjoy their holiday.  All activities will be age appropriate and suited to parents when applicable. </p><p>Typically your day will be from 8am – 6pm with a break in the middle of the day where the children will re-join their parents for lunch, however you will run an evening activity 1-2 nights a week.</p><p><span> </span></p><p>  <br/><strong>Key Accountabilities & Responsibilities: </strong> <br/>  <br/><br/>·         Interacting with all guests in a professional yet relaxed fashion both during the day and evening  <br/>·         Represent the company in a professional, well presented manner at all times and in compliance with the company uniform policy  <br/>·         Deliver the Child Care section of the welcome meeting to promote childcare activities to all guests  <br/>·         Upsell in-resort extras e.g. Excursions, Junior Squad</p><p><strong>Operational </strong> <br/>·         Plan, organise & provide an engaging, inclusive and exciting range of activities for Kids Clubs – lawn games, arts & crafts, pool activities, bike rides, kayaking, sailing, windsurfing  <br/>·         Carry out all activities in a safe manner with regard to children’s learning and welfare needs  <br/>·         Ensure children have adequate shade, water breaks and sunscreen  <br/>·         Run evening social events for Kids Club members  <br/>·         Arrange prizes/certificates and awards for the children at the end of their week  <br/>·         Ensure children are signed in and out of your care by parent/guardian  <br/>·         Attending daily staff meeting to discuss activity plans and duties for the day  <br/>·         Ensure all children are registered including; special diet, allergies, care needs are recorded, monitored & delivered appropriately  <br/>·         Carrying out first aid and completing accident forms as necessary  <br/>·         Attend & socialise with children & guests at Welcome Meals/Theme Nights/BBQs  <br/>·         Complete health & safety and risk assessment for your designated childcare facilities and activities  <br/>·         Carrying out monthly stock takes, weekly deep clean of activity equipment & childcare facilities  <br/>·         Archiving all relevant childcare paperwork on a weekly basis  <br/>·         Assisting other departments as per operational needs</p><p> </p><p> </p>",
        requirements:
          "<p><strong>Qualifications</strong></p><ul><li>18 months experience in a Kids Club setting or similar, eg.\nActivities Nanny, Childrens Rep, Laser Quest, Jungle Gym,\nBrownie/Scout Leader </li><li>Paediatric First Aid </li><li>Further/Higher Education course in a relevant subject, eg.\nChildcare, sports, youth work <strong>OR</strong> a\nteaching qualification <strong>OR</strong>  full\ntime experience in childcare/sports coaching</li><li>Disclosure and Barring Service (DBS) check, formerly known as\nCriminal Record Bureau (CRB) checks </li></ul><p><strong> </strong><strong>Experience</strong></p><ul><li> Relevant / Transferable Work Experience </li><li>Secure Cash Handling Experience </li><li>Seasonal overseas experience with an Overseas Tour\nOperator </li></ul><p><strong>Skills & Ability </strong> <br/>Strong Open Water Swimming Ability (E)  <br/>Ability to run active and engaging activities  (E)  <br/>Customer Service (E)  <br/>Communication Skills (E)  <br/>Problem Solving & Complaint Handling (E)  <br/>Sales Experience (D)  <br/>Planning/Organisational (E)  <br/>Literate and numerate (E)  <br/>IT, Admin & Social Media (E)  <br/>Prior experience of sailing, windsurfing and paddlesports (HD)</p><strong>All applicants must have an EU / UK passport, UK address, UK bank account and UK National insurance number </strong>",
        summary:
          "Codelitt is looking for a Senior .NET Developer with experience in building and maintaining web applications. You will be responsible for designing, developing and coordinating the work with the team. While this is a remote position, there are often meetings at 9 a.m. ET. Something to take into consideration. Mountain Time, Central Time, or Eastern Time preferred."
      },
      company: {
        name: "Mauritius Commercial Bank",
        id: 8488,
        logo: "mcb.png"
      },
      tags: [
        {
          name: "GoLang",
          url: "golang"
        },
        {
          name: "Front End",
          url: "front-end"
        },
        {
          name: "UX",
          url: "ux"
        },
        {
          name: "UI",
          url: "ui"
        }
      ]
    },
    {
      colour: "#ffffff",
      featured: false,
      hasLogo: true,
      id: 6494,
      job: {
        name: "Service Delivery Manager",
        salary: "Rs 50, 000 - 60, 000",
        applyOnUrl: true,
        applyUrl:
          "https://www.candiman.net/GenericApplicationForm.aspx?appID=172&jobID=334182&site=resortwork.co.uk",
        type: "Full time",
        pay: "Rs 18 000 to Rs 30 000",
        seniority_level: "Entry",
        functions: "Project Management, Information Technology",
        startDesc: "July onwards",
        durationDesc: "August/September",
        benefits:
          "Competitive Salary, Flights to and from resort, Accommodation and more...",
        jobDesc:
          "<p>Dependant on location you will report to the Manager or the Childcare Manager where you will assist with the overall smooth running of the Childcare program 5-6 days a week.</p><p>You will be responsible for the safe and effective deliverance of the various Kids Clubs that we operate across our programs which encompass children of ages 4-7 and ages 8-12. Creating new, fun and kerr-azy activities you will ensure that all children are comfortable in their surroundings and enjoy their holiday.  All activities will be age appropriate and suited to parents when applicable. </p><p>Typically your day will be from 8am – 6pm with a break in the middle of the day where the children will re-join their parents for lunch, however you will run an evening activity 1-2 nights a week.</p><p><span> </span></p><p>  <br/><strong>Key Accountabilities & Responsibilities: </strong> <br/>  <br/><br/>·         Interacting with all guests in a professional yet relaxed fashion both during the day and evening  <br/>·         Represent the company in a professional, well presented manner at all times and in compliance with the company uniform policy  <br/>·         Deliver the Child Care section of the welcome meeting to promote childcare activities to all guests  <br/>·         Upsell in-resort extras e.g. Excursions, Junior Squad</p><p><strong>Operational </strong> <br/>·         Plan, organise & provide an engaging, inclusive and exciting range of activities for Kids Clubs – lawn games, arts & crafts, pool activities, bike rides, kayaking, sailing, windsurfing  <br/>·         Carry out all activities in a safe manner with regard to children’s learning and welfare needs  <br/>·         Ensure children have adequate shade, water breaks and sunscreen  <br/>·         Run evening social events for Kids Club members  <br/>·         Arrange prizes/certificates and awards for the children at the end of their week  <br/>·         Ensure children are signed in and out of your care by parent/guardian  <br/>·         Attending daily staff meeting to discuss activity plans and duties for the day  <br/>·         Ensure all children are registered including; special diet, allergies, care needs are recorded, monitored & delivered appropriately  <br/>·         Carrying out first aid and completing accident forms as necessary  <br/>·         Attend & socialise with children & guests at Welcome Meals/Theme Nights/BBQs  <br/>·         Complete health & safety and risk assessment for your designated childcare facilities and activities  <br/>·         Carrying out monthly stock takes, weekly deep clean of activity equipment & childcare facilities  <br/>·         Archiving all relevant childcare paperwork on a weekly basis  <br/>·         Assisting other departments as per operational needs</p><p> </p><p> </p>",
        requirements:
          "<p><strong>Qualifications</strong></p><ul><li>18 months experience in a Kids Club setting or similar, eg.\nActivities Nanny, Childrens Rep, Laser Quest, Jungle Gym,\nBrownie/Scout Leader </li><li>Paediatric First Aid </li><li>Further/Higher Education course in a relevant subject, eg.\nChildcare, sports, youth work <strong>OR</strong> a\nteaching qualification <strong>OR</strong>  full\ntime experience in childcare/sports coaching</li><li>Disclosure and Barring Service (DBS) check, formerly known as\nCriminal Record Bureau (CRB) checks </li></ul><p><strong> </strong><strong>Experience</strong></p><ul><li> Relevant / Transferable Work Experience </li><li>Secure Cash Handling Experience </li><li>Seasonal overseas experience with an Overseas Tour\nOperator </li></ul><p><strong>Skills & Ability </strong> <br/>Strong Open Water Swimming Ability (E)  <br/>Ability to run active and engaging activities  (E)  <br/>Customer Service (E)  <br/>Communication Skills (E)  <br/>Problem Solving & Complaint Handling (E)  <br/>Sales Experience (D)  <br/>Planning/Organisational (E)  <br/>Literate and numerate (E)  <br/>IT, Admin & Social Media (E)  <br/>Prior experience of sailing, windsurfing and paddlesports (HD)</p><strong>All applicants must have an EU / UK passport, UK address, UK bank account and UK National insurance number </strong>",
        summary:
          "Codelitt is looking for a Senior .NET Developer with experience in building and maintaining web applications. You will be responsible for designing, developing and coordinating the work with the team. While this is a remote position, there are often meetings at 9 a.m. ET. Something to take into consideration. Mountain Time, Central Time, or Eastern Time preferred."
      },
      company: {
        name: "Ceridian Mauritius Limited",
        id: 8489,
        logo: "ceridian.png"
      },
      tags: [
        {
          name: "GoLang",
          url: "golang"
        },
        {
          name: "Front End",
          url: "front-end"
        },
        {
          name: "UX",
          url: "ux"
        },
        {
          name: "UI",
          url: "ui"
        }
      ]
    },
    {
      colour: "#ffffff",
      featured: false,
      hasLogo: true,
      id: 6495,
      job: {
        name: "Service Delivery Manager",
        salary: "Rs 50, 000 - 60, 000",
        applyOnUrl: false,
        applyUrl:
          "https://www.candiman.net/GenericApplicationForm.aspx?appID=172&jobID=334182&site=resortwork.co.uk",
        type: "Full time",
        pay: "Rs 18 000 to Rs 30 000",
        seniority_level: "Entry",
        functions: "Project Management, Information Technology",
        startDesc: "July onwards",
        durationDesc: "August/September",
        benefits:
          "Competitive Salary, Flights to and from resort, Accommodation and more...",
        jobDesc:
          "<p>Dependant on location you will report to the Manager or the Childcare Manager where you will assist with the overall smooth running of the Childcare program 5-6 days a week.</p><p>You will be responsible for the safe and effective deliverance of the various Kids Clubs that we operate across our programs which encompass children of ages 4-7 and ages 8-12. Creating new, fun and kerr-azy activities you will ensure that all children are comfortable in their surroundings and enjoy their holiday.  All activities will be age appropriate and suited to parents when applicable. </p><p>Typically your day will be from 8am – 6pm with a break in the middle of the day where the children will re-join their parents for lunch, however you will run an evening activity 1-2 nights a week.</p><p><span> </span></p><p>  <br/><strong>Key Accountabilities & Responsibilities: </strong> <br/>  <br/><br/>·         Interacting with all guests in a professional yet relaxed fashion both during the day and evening  <br/>·         Represent the company in a professional, well presented manner at all times and in compliance with the company uniform policy  <br/>·         Deliver the Child Care section of the welcome meeting to promote childcare activities to all guests  <br/>·         Upsell in-resort extras e.g. Excursions, Junior Squad</p><p><strong>Operational </strong> <br/>·         Plan, organise & provide an engaging, inclusive and exciting range of activities for Kids Clubs – lawn games, arts & crafts, pool activities, bike rides, kayaking, sailing, windsurfing  <br/>·         Carry out all activities in a safe manner with regard to children’s learning and welfare needs  <br/>·         Ensure children have adequate shade, water breaks and sunscreen  <br/>·         Run evening social events for Kids Club members  <br/>·         Arrange prizes/certificates and awards for the children at the end of their week  <br/>·         Ensure children are signed in and out of your care by parent/guardian  <br/>·         Attending daily staff meeting to discuss activity plans and duties for the day  <br/>·         Ensure all children are registered including; special diet, allergies, care needs are recorded, monitored & delivered appropriately  <br/>·         Carrying out first aid and completing accident forms as necessary  <br/>·         Attend & socialise with children & guests at Welcome Meals/Theme Nights/BBQs  <br/>·         Complete health & safety and risk assessment for your designated childcare facilities and activities  <br/>·         Carrying out monthly stock takes, weekly deep clean of activity equipment & childcare facilities  <br/>·         Archiving all relevant childcare paperwork on a weekly basis  <br/>·         Assisting other departments as per operational needs</p><p> </p><p> </p>",
        requirements:
          "<p><strong>Qualifications</strong></p><ul><li>18 months experience in a Kids Club setting or similar, eg.\nActivities Nanny, Childrens Rep, Laser Quest, Jungle Gym,\nBrownie/Scout Leader </li><li>Paediatric First Aid </li><li>Further/Higher Education course in a relevant subject, eg.\nChildcare, sports, youth work <strong>OR</strong> a\nteaching qualification <strong>OR</strong>  full\ntime experience in childcare/sports coaching</li><li>Disclosure and Barring Service (DBS) check, formerly known as\nCriminal Record Bureau (CRB) checks </li></ul><p><strong> </strong><strong>Experience</strong></p><ul><li> Relevant / Transferable Work Experience </li><li>Secure Cash Handling Experience </li><li>Seasonal overseas experience with an Overseas Tour\nOperator </li></ul><p><strong>Skills & Ability </strong> <br/>Strong Open Water Swimming Ability (E)  <br/>Ability to run active and engaging activities  (E)  <br/>Customer Service (E)  <br/>Communication Skills (E)  <br/>Problem Solving & Complaint Handling (E)  <br/>Sales Experience (D)  <br/>Planning/Organisational (E)  <br/>Literate and numerate (E)  <br/>IT, Admin & Social Media (E)  <br/>Prior experience of sailing, windsurfing and paddlesports (HD)</p><strong>All applicants must have an EU / UK passport, UK address, UK bank account and UK National insurance number </strong>",
        summary:
          "Codelitt is looking for a Senior .NET Developer with experience in building and maintaining web applications. You will be responsible for designing, developing and coordinating the work with the team. While this is a remote position, there are often meetings at 9 a.m. ET. Something to take into consideration. Mountain Time, Central Time, or Eastern Time preferred."
      },
      company: {
        name: "Extension Interactive Limited",
        id: 8489,
        logo: "extension_interactive.png"
      },
      tags: [
        {
          name: "GoLang",
          url: "golang"
        },
        {
          name: "Front End",
          url: "front-end"
        },
        {
          name: "UX",
          url: "ux"
        },
        {
          name: "UI",
          url: "ui"
        }
      ]
    }
  ],
  jobs: [],
  jobsGroupedByCompanyId: {}
};

const namespaced = true;

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations
};
