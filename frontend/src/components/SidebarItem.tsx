import { Link  } from "react-router-dom";

interface SidebarItemProps {
  Icon: React.ElementType; // Use ElementType for React components that return JSX
  label: string;
  to: string;
  iconSize?: number; // Optional icon size
}

const SidebarItem = ({ Icon, label, to, iconSize = 24 }: SidebarItemProps) => (
  <a
    href={""}
    className="flex items-center gap-2 text-gray-700 hover:underline"
  >
    <Icon size={iconSize} />
  
    {label}
  </a>
);

export default SidebarItem;
