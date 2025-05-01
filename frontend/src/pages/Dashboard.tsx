import { Plus, Share2 } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";


const Dashboard = () => {
  const notes = [
    {
      title: "Future Projects",
      category: "Project Ideas",
      content: [
        "Build a personal knowledge base",
        "Create a habit tracker",
        "Design a minimalist todo app",
      ],
      tags: ["#productivity", "#ideas"],
      date: "10/03/2024",
    },
    {
      title: "How to Build a Second Brain",
      category: "",
      content: [],
      imageBroken: true,
      tags: ["#productivity", "#learning"],
      date: "09/03/2024",
    },
    {
      title: "Productivity Tip",
      category: "",
      content: [
        "The best way to learn is to build in public. Share your progress, get feedback, and help others along the way.",
      ],
      tags: ["#productivity", "#learning"],
      date: "08/03/2024",
    },
  ];
  return (
    <div className="fixed inset-0 bg-[#f6fefc]  font-sans overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
        <main className="flex-1 px-10 py-8 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">All Notes</h2>
            <div className="flex gap-2">
              <button className="bg-[#eef4ff] text-blue-600 px-4 py-2 rounded-md shadow flex items-center gap-2 cursor-pointer">
                <Share2 size={16} /> Share Brain
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow flex items-center gap-2 cursor-pointer">
                <Plus size={16} /> Add Content
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {notes.map((note, index: number) => (
              <Card key={index} note={note} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
