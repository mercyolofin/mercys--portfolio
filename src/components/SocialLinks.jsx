import { FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    YouTube <FaYoutube size={30} />
                </>
            ),
            href: 'https://youtube.com'
        },
        {
            id: 2,
            child: (
                <>
                    Gmail <SiGmail size={30} />
                </>
            ),
            href: 'https://gmail.com'
        },
        {
            id: 3,
            child: (
                <>
                    Resume <BsPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            download: true
        },
    ]

    return (
        <div className='hidden xl:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, download }) => (
                    <li key={id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                        <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;