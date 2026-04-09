import CloseIcons from "../../assets/navbar/mobile-close.svg";
import Logo from "../../assets/navbar/logo-yellow.svg";

export default function MobileNav({ isOpen, closeMobileMenu }) {
  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center 
                  transition-transform duration-300 
                  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      
      {/* CLOSE */}
      <button
        onClick={closeMobileMenu}
        className="absolute top-6 right-6"
      >
        <img src={CloseIcons} alt="close" />
      </button>

      {/* LOGO */}
      <img src={Logo} alt="logo" className="mb-10" />

      {/* MENU */}
      <ul className="space-y-6 text-xl">
        {["download", "about", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={closeMobileMenu}
              className="hover:text-indigo-400 transition"
            >
              {item.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
}