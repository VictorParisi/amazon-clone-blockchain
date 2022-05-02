import Image from "next/image"
import { ConnectButton } from "web3uikit"
import Link from "next/link"
import logo from "../assets/amazon_logo.png"
import logoFull from "../assets/amazon_logo_full.png"
import { FaBox } from "react-icons/fa"
import { BsFillBookmarkFill, BsFillPersonFill } from "react-icons/bs"
import { AiOutlineHistory } from 'react-icons/ai'


export default function Sidebar() {
    const styles = {
        menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2`,
    }

    const isAuthenticated = true
    const username = "Victor"

    return (
        <div className="h-full w-[300px] flex flex-col bg-[#fff] static">
            <div
                className="w-full py-16 flex flex-col justify-center items-center 
                    rounded-r-3xl bg-gradient-to-t from-[#0d141c] to-[#42667e] 
                    mt-[40px] mb-[50px] border-2 border-[#fb9701]"
            >
                {isAuthenticated && (
                    <>
                        <div className="flex rounded-xl items-center justify-center w-full h-full mb-5">
                            <Image
                                src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                                alt="profile"
                                className="rounded-3xl object-cover"
                                height={100}
                                width={100}
                            />
                        </div>
                        {!username ? (
                            <>
                                <div className="flex items-center w-full justify-center">
                                    <input
                                        type="text"
                                        placeholder="Username..."
                                        className="bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] 
                                            placeholder:text-white focus:outline-none flex justify-center items-center text-white"
                                        // value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}
                                    />
                                </div>
                                <button
                                    className="text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white"
                                // onClick={handleSetUsername}
                                >Set Nickname
                                </button>
                            </>
                        ) : (
                            <div>
                                <div className="text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white">
                                    Welcome {username}
                                </div>
                            </div>
                        )}
                    </>
                )}
                <div>
                    <ConnectButton />
                </div>
            </div>
            <div className="flex flex-col w-full h-full px-10 gap-10">
                <Link href="/" passHref>
                    <div className={styles.menuItem}>
                        <Image
                            alt="logo"
                            src={logo}
                            width={30}
                            height={30}
                            className="mr-4 flex object-cover"
                        />
                        My Amazon <br /> board
                    </div>
                </Link>
                <div className={styles.menuItem}>
                    <FaBox />
                    Collections
                </div>
                <div className={styles.menuItem}>
                    <BsFillBookmarkFill />
                    Saved
                </div>
                <div className={styles.menuItem}>
                    <BsFillPersonFill />
                    Saved
                </div>
                <Link href="/history" passHref>
                    <div className={styles.menuItem}>
                        <AiOutlineHistory />
                        Transaction Hisotry
                    </div>
                </Link>
            </div>
            <div className="text-lg font-bold flex flex-1 pl-10 items-center mt-[20px]">
                <Image src={logoFull} alt="amazon" height={100} width={100} />
            </div>
        </div>
    )
}