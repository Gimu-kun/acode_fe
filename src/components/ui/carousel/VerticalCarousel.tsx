import { Carousel } from 'antd';

type CarouselItem = {
  img:string,
  to:string,
  text:string
}

type Props = {
  carouselData: CarouselItem[]
}

export default function VerticalCarousel({ carouselData }: Props) {
  return (
    <>
    <Carousel autoplay dotPosition="bottom" infinite={false}>
      {
        carouselData?.map((item:CarouselItem)=>(
          <div className='relative h-64 w-full object-cover'>
            <img className='w-full object-cover' src={item.img} alt="" />
            <p className='absolute bottom-0 w-full h-8 bg-amber-50 px-2'>{item.text}</p>
          </div>
        ))
      }
    </Carousel>
    </>
  )
}
