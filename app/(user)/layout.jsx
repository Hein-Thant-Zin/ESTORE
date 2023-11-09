import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

export default function UserLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
