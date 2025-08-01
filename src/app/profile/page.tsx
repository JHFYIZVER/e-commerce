import Profile from "@/widget/profile/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Профиль",
};

const page = async () => {
  return (
    <main className="px-5">
      <Profile />
    </main>
  );
};

export default page;
