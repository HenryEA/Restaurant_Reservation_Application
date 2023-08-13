export default function Header({ name }: { name: string }) {
  const renderTitle = () => {
    const nameArray = name.split("-");

    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;

    return nameArray.join(" ");
  };

  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#f5a700] to-[#ff3300] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white capitalize text-shadow text-center">
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
}
