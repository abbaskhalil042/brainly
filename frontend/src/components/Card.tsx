import { FileWarning } from "lucide-react";

export interface NoteType {
  title: string;
  category: string;
  content: string[];
  imageBroken: boolean;
  tags: string[];
  date: string;
}
const Card = ({ note }: { note: NoteType }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-gray-800">
      {note.category && (
        <div className="text-sm font-medium text-gray-500 mb-2">
          {note.category}
        </div>
      )}
      <h3 className="font-semibold text-lg mb-2">{note.title}</h3>
      {note.imageBroken && (
        <div className="h-36 bg-gray-200 flex items-center justify-center rounded mb-2">
          <FileWarning size={32} className="text-gray-400" />
        </div>
      )}
      <ul className="list-disc list-inside space-y-1 mb-2">
        {note.content.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-2 flex-wrap text-sm">
        {note.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="text-xs text-gray-400 mt-2">Added on {note.date}</div>
    </div>
  );
};

export default Card;
