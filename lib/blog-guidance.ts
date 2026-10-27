export type ArticleSection = { heading: string; body: string };

export const blogGuidance: Record<string, ArticleSection[]> = {
  "Web Development": [
    { heading: "Start with the customer journey", body: "Decide what a visitor should understand first, what they may want to explore next, and which action they can take. A focused page structure, readable navigation, and clear service descriptions make it easier for customers to move from their first visit to a useful conversation." },
    { heading: "Build for real devices and users", body: "Check layouts on phones as well as desktops, make text easy to read, and give links and buttons clear labels. Compressed images, an uncluttered page, and accessible colour contrast also contribute to a better experience for more people." },
    { heading: "Check the site after launch", body: "Test enquiry forms, contact details, important links, and key pages regularly. Review visitor questions and page performance to decide what to improve next; a website is more useful when it stays accurate as your business changes." },
  ],
  "SEO": [
    { heading: "Match pages to real customer searches", body: "List the services you offer and the questions customers ask before choosing a provider. Give each important subject a useful page of its own rather than squeezing unrelated search terms into one page. Make sure the language on the page accurately reflects what your business delivers." },
    { heading: "Make each page clear and discoverable", body: "Write a descriptive page title and a helpful summary, use headings to organise the content, and link related pages together. Confirm that important pages can be reached through navigation and that search engines can crawl and index them." },
    { heading: "Focus on useful, sustainable improvement", body: "Check local business information for accuracy, keep service pages current, and publish answers that genuinely help potential customers. Review impressions, visits, and relevant enquiries together; a search position alone does not tell you whether the right visitors are finding you." },
  ],
  "Digital Marketing": [
    { heading: "Choose a clear audience and objective", body: "Decide which customers you want to reach and what useful next step you hope they will take. An objective such as increasing relevant enquiries helps you select suitable channels and gives each piece of content a clear purpose." },
    { heading: "Make every channel work together", body: "Keep your main message and business details consistent wherever people find you. Link campaigns to a relevant website page, make the next step obvious, and make sure your team knows how enquiries from each channel will be handled." },
    { heading: "Review outcomes and refine your plan", body: "Track a small number of measures that connect to your objective, such as useful page visits, enquiries, or subscriber engagement. Use what you learn to keep effective activity, adjust what is not resonating, and set a realistic schedule your team can maintain." },
  ],
  "Cybersecurity": [
    { heading: "Protect the accounts your business depends on", body: "Use a unique password for every important account, store credentials in a reputable password manager, and enable multi-factor authentication wherever available. Remove access when someone no longer needs it and periodically review who can reach sensitive business information." },
    { heading: "Prepare devices, updates, and backups", body: "Keep operating systems and applications supported and up to date. Identify which files and services matter most, schedule backups to a suitably separate destination, and test that your team can restore the information when required." },
    { heading: "Make reporting a normal security habit", body: "Teach staff to pause when a request for money, access, or sensitive information feels unexpected. Give everyone a simple way to report suspicious activity and agree in advance who will investigate and what steps to take if an account or device is at risk." },
  ],
  "IT Support": [
    { heading: "Understand the support your team actually needs", body: "List the devices, software, and business processes your team relies on and note common requests or recurring interruptions. Agree on who to contact, how to describe an issue, and which systems or roles need priority attention." },
    { heading: "Keep essential technology organised", body: "Maintain a basic record of business devices, software licences, account owners, and renewal dates. Routine updates, documented configurations, and a clear process for new starters and leavers can make everyday support easier." },
    { heading: "Plan for continuity, not just quick fixes", body: "Document how to reach your support provider, how backups are checked, and who makes decisions during an outage. Reviewing recurring issues alongside one-off requests helps your business address underlying causes rather than repeatedly treating symptoms." },
  ],
  "Cloud Services": [
    { heading: "Choose services around your work", body: "Map how your team currently shares files, communicates, and manages access before choosing cloud tools. Consider account ownership, storage needs, existing software, user training, and what happens if a subscription changes." },
    { heading: "Plan access, migration, and recovery", body: "Assign an owner to each important service, give people only the access they need, and make a migration checklist for accounts, data, and devices. Understand what the provider includes in its backup and retention policies rather than assuming every file can be recovered automatically." },
    { heading: "Review your cloud setup regularly", body: "Check that former users no longer have access, shared documents are organised, and billing matches the accounts in use. Test how your team would restore important information and record a clear support route for service disruptions." },
  ],
  "Networking": [
    { heading: "Map the space, people, and connected devices", body: "Record the areas that need reliable coverage and note the devices and business services that use the network. The shape and materials of a workspace, the location of equipment, and the number of simultaneous users all matter when planning connectivity." },
    { heading: "Separate access and protect equipment", body: "Change default administrator credentials, use current encryption settings, and keep network equipment firmware supported. Set up a separate guest network when visitors need internet access, and limit access to the systems reserved for your team." },
    { heading: "Troubleshoot methodically", body: "First establish whether the issue affects one device, one area, or the whole workplace. Check equipment connections, record when the problem began, and compare wired and wireless performance if possible. Useful observations make it easier to isolate a service-provider, device, or coverage issue." },
  ],
  "IT Consulting": [
    { heading: "Connect technology decisions to business priorities", body: "Write down the outcome the business needs and the workflow or customer experience that should change. Note the people, existing tools, budget, and time involved so technology options can be assessed against a real business requirement." },
    { heading: "Compare the full effort, not just the feature list", body: "Consider implementation, staff training, integration with existing systems, ongoing support, renewals, and how information can be exported later. A solution that looks useful on paper is only a good fit when it works for your people and is manageable over time." },
    { heading: "Make a roadmap your team can use", body: "Prioritise work by business value, operational risk, and available resources. Assign an owner to the next action, agree how you will know whether it helped, and revisit the plan when your business needs or circumstances change." },
  ],
  "E-commerce": [
    { heading: "Help shoppers make an informed decision", body: "Use accurate product names, clear descriptions, useful images, and current stock information. Make delivery, payment, returns, and customer-support details easy to find so customers understand what happens before completing a purchase." },
    { heading: "Make the buying process clear on every device", body: "Test browsing, product selection, basket changes, and checkout on a mobile phone as well as a desktop. Ask only for information you need, explain any required fields, and make confirmation visible after a successful order." },
    { heading: "Review the complete store experience", body: "Check that transactions, confirmation emails, stock updates, and customer enquiries work as expected. Keep store software updated, maintain tested backups, and review customer feedback to find friction in the shopping journey." },
  ],
  "Business Technology": [
    { heading: "Find the process before choosing a tool", body: "Write down how the current task is completed, including hand-offs, information collected, and recurring mistakes. Ask the people who do the work which steps take the most effort before comparing software or automation options." },
    { heading: "Check fit, access, and adoption", body: "Compare tools against the workflow your business needs, the systems you already use, and the team members who need access. Review permissions, information handling, training, support, and recurring costs before making a decision." },
    { heading: "Start with a small, measurable improvement", body: "Try a solution with a limited workflow or user group first. Check that the outcome really saves effort without introducing more work, then document the process and expand thoughtfully if the experience is helpful." },
  ],
};
