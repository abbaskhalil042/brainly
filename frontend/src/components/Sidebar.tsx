import {
  Brain,
  Twitter,
  Youtube,
  FileText,
  Link as LinkIcon,
  Tag,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
const Sidebar = () => (
  <aside className="w-1/5 bg-gray-300 p-6 rounded-md shadow h-screen">
    <div className="flex items-center gap-2 mb-6">
      <Brain size={24} />
      <h1 className="font-bold text-xl">Second Brain</h1>
    </div>
    <nav className="flex flex-col gap-4">
      <SidebarItem Icon={Twitter} label="Tweets" to="#" />
      <SidebarItem Icon={Youtube} label="Videos" to="#" />
      <SidebarItem Icon={FileText} label="Documents" to="#" />
      <SidebarItem Icon={LinkIcon} label="Links" to="#" />
      <SidebarItem Icon={Tag} label="Tags" to="#" />
    </nav>
  </aside>
);

export default Sidebar;
