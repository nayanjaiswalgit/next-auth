import Navbar from "./_components/navbar";

const ProtectLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <Navbar />
    {children}
  </div>
);

export default ProtectLayout;
