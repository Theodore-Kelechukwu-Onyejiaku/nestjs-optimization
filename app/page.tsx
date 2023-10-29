import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to Image Optimization
      </h1>
      <Image
        src="https://cdn.pixabay.com/photo/2021/07/19/04/36/woman-6477171_1280.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
        priority
      />
    </div>
  )
}
