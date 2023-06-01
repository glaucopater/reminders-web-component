export type CustomCardProps = {
  id: string;
  title: string;
  date?: number;
  frequency?: string;
  setToDoneReminder: (id: CustomCardProps["id"]) => void;
};

const CustomCard = ({ id, title, setToDoneReminder }: CustomCardProps) => {
  const handleOnDone = () => {
    setToDoneReminder(id);
  };
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <button
            onClick={handleOnDone}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Done {id}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
