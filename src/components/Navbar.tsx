import { Home, Compass, User, Mail, BookOpen, Snowflake } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "/#home", icon: Home },
  { name: "Tours", url: "/tours", icon: Compass },
  { name: "Polar Bears", url: "/tours/polar-bear-photography-tour", icon: Snowflake },
  { name: "About", url: "/about", icon: User },
  { name: "Blog", url: "/blog", icon: BookOpen },
  { name: "Contact", url: "/contact", icon: Mail },
];

const Navbar = () => {
  return <NavBar items={navItems} />;
};

export default Navbar;
