import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Outlet } from "react-router-dom";


const FullLayout = (): JSX.Element => {
  return (
    <div className=" h-fit">
      <Menubar className="flex justify-between mx-auto h-20 bg-stone-950 sticky top-0">
        <MenubarMenu>
          <div className="flex">
            <div className="text-white text-2xl p-6">
              <span>Task Manager</span>
            </div>
           
            <MenubarTrigger className="text-white text-xl p-6">
              Tasks
            </MenubarTrigger>
          </div>
        
        </MenubarMenu>
      </Menubar>
      <Outlet></Outlet>
      <footer className="text-white text-center  p-8">
        <p>Copyright @Shylu 2024 All rights reserved</p>
      </footer>
    </div>
  );
};

export default FullLayout;
