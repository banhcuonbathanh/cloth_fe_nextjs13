import Link from "next/link";

// import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import MainNav from "./main-nav";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center bg-blue-500">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">NORMIC</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
// <div className="border-b">

//   <Container>
//     <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
//       <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
// <p className="font-bold text-xl">NORMIC</p>
//       </Link>
//       <MainNav data={categories} />
//       <NavbarActions />
//     </div>
//   </Container>
// </div>
