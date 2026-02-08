import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";



export const metadata = {
  title: "Green Tape Agro Industries",
  description: "Best Green Tape Agro Industries Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Header/>
       <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
