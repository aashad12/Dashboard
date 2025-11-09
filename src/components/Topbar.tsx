
import userPhoto from "../assets/profile.svg"; 

const Topbar = () => {
  return (
    <div className="bg-white shadow-xl z-10 px-6 py-3 flex justify-between items-center">

      <h1 className="text-xl font-semibold">Dashboard </h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-3 py-1 text-sm"
        />
        
        <img
          src={userPhoto}
          alt="User-photo"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Topbar;
