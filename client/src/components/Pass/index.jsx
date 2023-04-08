
import React,{useState} from 'react'
import Logo from "../../Images/logo_tri.png"
import { useToImage } from '@hcorta/react-to-image'
import pass from "../../Images/passes.png"
import cookie from "js-cookie"

const Index = () => {
  const { ref, isLoading, getPng ,dataURL} = useToImage()
  const [downloadURL, setDownloadURL] = useState(null);
  var name,email;
    name=cookie.get("name",{ domain: ''});
    email=cookie.get("email",{ domain: ''});
  function display()
  {
    return <div className='ml-[42%] pt-28 font-source'>
                <h1 className='text-2xl '>Name: {name}</h1>
                <h1 className='text-2xl '>Email: {email}</h1>
            </div>
  }

  async function handleDownload() {
    const url = await getPng();
    setDownloadURL(url);
    console.log(downloadURL)
  }
  

  return (
    <div className='w-full' ref={ref}>
        <div className='bg-cover bg-[url("https://i.ibb.co/LkxhLGc/passes.png")] h-[260px]  w-[800px] mx-auto shadow-lg  my-24 shadow-white'>
        
                {display()}

      </div>
      {/* {isLoading && 'loading...'} */}
      <button className='mb-24 ml-[46%] font-medium font-dm tracking-wider bg-theme text-[14px] leading-8 text-[#F9F7F7] hover:text-theme border-gradient-to-r from-cyan-500 to-blue-500  border-2 px-5 py-1 rounded-[20px] hover:bg-[#F9F7F7]
    duration-500' onClick={handleDownload}>Download</button>
    </div>
  )
}

export default Index