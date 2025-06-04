const cardsMock = [
   {
      id: 1,
      owner: "mark",
      requestedSkill: "Yard Work",
      offeredSkill: "Electrical Work",
      description: "lorem ipsum....",
      private: false,
      designatedTo: null,
      created: new Date()
   },
   {
      id: 2,
      owner: "alex",
      requestedSkill: "Drawing",
      offeredSkill: "Manual Labor",
      description: "lorem ipsum....",
      private: false,
      designatedTo: null,
      created: new Date()
   },
   {
      id: 3,
      owner: "roy",
      requestedSkill: "Cooking",
      offeredSkill: "Sewing",
      description: "lorem ipsum....",
      private: false,
      designatedTo: null,
      created: new Date()
   },
   {
      id: 4,
      owner: "sara",
      requestedSkill: "Cooking",
      offeredSkill: "Drawing",
      description: "lorem ipsum...",
      private: true,
      designatedTo: "alex",
      created: new Date()
   }
];

export default cardsMock;