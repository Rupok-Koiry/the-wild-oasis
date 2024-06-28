import { Sono, Poppins } from "next/font/google";
import "./_styles/dashboard.css";
import DashboardProvider from "./_context/DashboardProvider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const sono = Sono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
      <div className={poppins.className}>{children}</div>
    </DashboardProvider>
  );
}
