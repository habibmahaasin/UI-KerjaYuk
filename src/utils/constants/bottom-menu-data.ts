export interface MenuItemsInterface {
  id: number;
  name: string;
  icon: string;
  activeColor: string;
  inactiveColor: string;
  isActive: boolean;
  isFloating?: boolean;
}

export const MENU_ITEMS: MenuItemsInterface[] = [
  {
    id: 1,
    name: "Home",
    icon: "clarity:home-solid",
    activeColor: "#F82C17",
    inactiveColor: "text-gray-400",
    isActive: true,
  },
  {
    id: 2,
    name: "Attendance",
    icon: "mdi:calendar",
    activeColor: "#F82C17",
    inactiveColor: "text-gray-400",
    isActive: false,
  },
  {
    id: 3,
    name: "Check Out",
    icon: "icomoon-free:exit",
    activeColor: "#F82C17",
    inactiveColor: "text-gray-400",
    isActive: false,
    isFloating: true,
  },
  {
    id: 4,
    name: "Form",
    icon: "fluent:form-24-filled",
    activeColor: "#F82C17",
    inactiveColor: "text-gray-400",
    isActive: false,
  },
  {
    id: 5,
    name: "Settings",
    icon: "material-symbols:settings-rounded",
    activeColor: "#F82C17",
    inactiveColor: "text-gray-400",
    isActive: false,
  },
];
