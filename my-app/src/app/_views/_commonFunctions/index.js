import Image from "next/image";

function ImageBackground({src}) {
  return (
     <Image 
    src={src}
    placeholder="blur"
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
  />
  )
}

export {ImageBackground}