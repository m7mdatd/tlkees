import "./globals.css";
import { AuthProvider } from "@/lib/auth";

export const metadata = {
  title: "منصة تلخيص — تلخيص وإعادة صياغة المخاطبات الرسمية",
  description:
    "منصة عربية لتلخيص وإعادة صياغة النصوص والمخاطبات الرسمية مع الحفاظ على النبرة والمعنى.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
