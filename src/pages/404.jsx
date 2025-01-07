import { Chrome, Facebook, Github, Twitter } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const IconWrapper = ({Icon, onClick}) => {
  return(
    <div onClick={onClick} className="rounded-full border flex items-center justify-center border-purple-300 h-10 w-10 transition-all hover:bg-purple-900">
      <Icon className={`text-white`}/>
    </div>
  )
}

const NotFound = () => {
  const navigate = useNavigate()
  const Icons = [{components: Chrome, url: ""},
    {components:  Facebook, url: "https://www.facebook.com/dimas.zulkarnain.104"},
    {components:  Github, url: "https://github.com/KINGDimsSky"},
    {components:  Twitter, url: "https://x.com/Dimssky17"}]

  const HomepageOnClick = () => {
    navigate('/')
  }

  const onClickicon = (url) => {
    window.location.href = url;
  }
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black">
      <div className="text-9xl mb-6 tracking-tight text-purple-500">404</div>
      <div className="text-4xl tracking-wider font-light mb-8 text-white">OOPS! NOTHING WAS FOUND</div>
      <div className="text-base tracking-wide text-white">The page you are looking for might have been removed had its name changed or is temporaly</div>
      <div className="flex text-base gap-3 mb-10 text-white">Unavailable. <a onClick={HomepageOnClick}  className='text-purple-700 cursor-pointer underline font-medium'>Return To Homepage</a></div>
      <div className="flex gap-7">
        {Icons.map(({components: icon, url}, index) => (
          <IconWrapper onClick={() => onClickicon(url)} key={index} Icon={icon}/>
        ))}
      </div>
    </div>
  )
}

export default NotFound