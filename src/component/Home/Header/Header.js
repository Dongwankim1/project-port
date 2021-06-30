import{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";

import logo from "../../../assets/images/logo.png"
import HeaderItem from "./HeaderItem/HeaderItem";
const Header = () =>{
    return(
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex lfex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <HeaderItem title='COLECTIONS' Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
            </div>

            <img className="object-contain" src={logo} width='100' height='100'/>
           
        </header>
    )
}


export default Header;

