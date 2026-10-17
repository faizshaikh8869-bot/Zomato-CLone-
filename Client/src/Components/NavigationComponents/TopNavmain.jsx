import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin, Search, UserRound } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import useUser from "../../Hooks/UseUser.hook.jsx";

function TopNavmain() {
  const { city } = useParams();
  const navigate = useNavigate();
  const { user, loading, logout } = useUser();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [failedAvatarUrl, setFailedAvatarUrl] = useState("");
  const profileRef = useRef(null);
  const initials = user?.name
    ?.trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "U";

  useEffect(() => {
    if (!isProfileOpen) return undefined;

    function closeProfile(event) {
      if (event.type === "keydown" && event.key === "Escape") {
        setIsProfileOpen(false);
      } else if (event.type === "pointerdown" && !profileRef.current?.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeProfile);
    document.addEventListener("keydown", closeProfile);
    return () => {
      document.removeEventListener("pointerdown", closeProfile);
      document.removeEventListener("keydown", closeProfile);
    };
  }, [isProfileOpen]);

  async function handleLogout() {
    setIsProfileOpen(false);
    await logout();
    navigate("/auth/login");
  }

  return (
    <>
      <div className=" mx-auto py-2 mb-2 w-[77%]  ">

        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="shrink ">

            <h1
              className="  text-[2em] font-extrabold"> zomato
            </h1>
          </div>

          {/* Search Section */}
          <div className="flex-1 flex items-center bg-white  rounded-lg shadow-sm  shadow-slate-900  overflow-hidden h-11 " >
            {/* Location */}
            <div className="flex items-center gap-2 p-2 w-[32%] text-[0.9em]   ">
              <MapPin size={30} className="text-rose-500" />

              <input
                type="text"
                id='location'
                placeholder={city}
                className="outline-none w-full h-[1.2em] border-r-[1.33px] " />

            </div>

            {/* Search Food */}
            <div className="flex items-center gap-3 flex-1 px-2 text-[0.9em] ">
              <Search size={24} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="outline-none w-full h-[1.2em] "
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="ml-4 flex items-center gap-5 text-gray-600">
            {!loading && !user && (
              <>
                <button className="cursor-pointer hover:text-black" onClick={() => navigate('/auth/login')}>
                  Login
                </button>
                <button className="cursor-pointer hover:text-black" onClick={() => navigate('/auth/signup')}>
                  Sign up
                </button>
              </>
            )}

            {!loading && user && (
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  aria-label={`Profile for ${user.name}`}
                  aria-haspopup="menu"
                  aria-expanded={isProfileOpen}
                  onClick={() => setIsProfileOpen((open) => !open)}
                  className="flex min-w-16 flex-col items-center gap-1 cursor-pointer"
                >
                  <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-rose-100 text-sm font-semibold text-rose-700 ring-1 ring-rose-200">
                    {user.profilePic && failedAvatarUrl !== user.profilePic ? (
                      <img
                        src={user.profilePic}
                        alt=""
                        className="h-full w-full object-cover"
                        onError={() => setFailedAvatarUrl(user.profilePic)}
                      />
                    ) : initials !== "U" ? initials : <UserRound size={20} aria-hidden="true" />}
                  </span>
                  <span className="max-w-28 truncate text-xs text-gray-700">{user.name}</span>
                  <ChevronDown size={13} aria-hidden="true" />
                </button>

                {isProfileOpen && (
                  <div role="menu" className="absolute right-0 top-full z-50 mt-2 w-48 border border-gray-200 bg-white py-2 shadow-lg">
                    <p className="truncate px-4 py-2 text-sm font-medium text-gray-800">{user.name}</p>
                    <button
                      type="button"
                      role="menuitem"
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default TopNavmain