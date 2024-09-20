import { useRecoilState } from "recoil"
import { userDetailAtom } from "../atoms/userAtom"
import { RecoilRoot } from "recoil";
import { Topbar } from "../components/topbar";


 export function ProfilePage(){
    const userinfo = useRecoilState(userDetailAtom);
    console.log(userinfo.email);
    console.log(userinfo.username);

    return(
        <div>
            <Topbar/>
            <div className="m-5 shadow-lg h-screen">
                <div className="m-10 mb-4 font-bold text-3xl">
                    Username
                </div>
                <div className="flex">
                <div className="border m-10 mt-0 shadow-lg w-[200px] h-[200px]">
                    IMG 
                </div>
                <div>
                <div className="text-xl mb-5 font-bold"> Email Id: <br />
                    <div className=" font-light text-lg">
                        urj0230@gmail.com
                    </div> 
                </div>
                <div className="text-xl font-bold"> Shipping Address: <br />
                    <div className=" font-light text-lg">
                        Aravali Hostel, IIT Delhi, Hauz Khas, Delhi.
                    </div> 
                </div>
                <div className="mt-5">
                    <button className="border px-3 py-1 rounded-lg bg-orange-400 font-medium hover:bg-orange-300 text-white">Edit</button>
                </div>
                </div>

                </div>
                
                <hr className="m-10 border-gray-300" />
                <div className="m-10">
                    <button className="border hover:bg-orange-300 px-2 py-2 text-white rounded-lg bg-orange-400 font-bold">Previous orders</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default function PROFILEPAGE() {

    return (
      <RecoilRoot>
        <ProfilePage />
      </RecoilRoot>
    );
  }
  