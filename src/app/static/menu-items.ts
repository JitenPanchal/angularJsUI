export const MenuItems = [
  {
    text: "Home",
    icon: "fas fa-home",
    routerName: "Home",
    items: []
  },
  {
    text: "Search",
    icon: "fas fa-search",
    routerName: "Search",
    items: []
  },
  {
    text: "Administration",
    icon: "fas fa-cog",
    items: [
      {
        text: "Users",
        routerName: "Users",
        parentText: "Administration > Users"
      },
      {
        text: "Roles",
        routerName: "Roles",
        parentText: "Administration > Roles"
      },
      {
        text: "Regions",
        routerName: "Regions",
        parentText: "Administration > Regions"
      },
      {
        text: "Countries",
        routerName: "Countries",
        parentText: "Administration > Countries"
      },
      {
        text: "Sources",
        routerName: "Sources",
        parentText: "Administration > Sources"
      }
    ]
  },
  {
    text: "Caseflow",
    icon: "fas fa-code-branch",
    items: [
      {
        text: "Unmatched",
        routerName: "Unmatched",
        parentText: "Caseflow > Unmatched"
      },
      {
        text: "Matched",
        routerName: "Matched",
        parentText: "Caseflow > Matched"
      }
    ]
  }
];
