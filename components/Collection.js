import React from 'react'
import Lavender from '@/public/lavender.png'
import Rose from '@/public/Rose.png'
import Orchid from '@/public/Orchid.png'
import Succulent from '@/public/Succulent.png'
import Sunflower from '@/public/Sunflower.png'
import Enchanted from '@/public/Enchanted.png'
import Image from 'next/image'
import Introduction from './Introduction'
import HoverImageOverlay from './HoverImageOverlay'

const Data = [
    {
      title: "Whispering Meadows Lavender Garden Set",
      description: "Bring the calming essence of lavender fields into your garden with our \"Whispering Meadows\" Lavender Garden Set. This set includes a variety of lavender plants carefully curated to add charm and fragrance to your outdoor space. Perfect for creating a tranquil retreat right in your backyard.",
      price: 39.99,
      src: Lavender
    },
    {
      title: "Enchanted Forest Fairy Garden Kit",
      description: "Let your imagination take flight with our \"Enchanted Forest\" Fairy Garden Kit. This magical kit includes everything you need to create a whimsical fairy garden, complete with miniature houses, fairy figurines, and colorful flowers. It's the perfect way to add a touch of enchantment to any corner of your garden.",
      price: 29.99,
      src: Enchanted
    },
    {
      title: "Sun-kissed Bliss Sunflower Bouquet",
      description: "Brighten someone's day with our \"Sun-kissed Bliss\" Sunflower Bouquet. Bursting with vibrant yellow sunflowers and cheerful daisies, this bouquet is like a ray of sunshine in floral form. Whether it's a birthday, anniversary, or just because, it's sure to spread happiness wherever it goes.",
      price: 24.99,
      src: Sunflower
    },
    {
      title: "Secret Garden Succulent Terrarium",
      description: "Unlock the beauty of nature with our \"Secret Garden\" Succulent Terrarium. This charming terrarium features a variety of succulent plants nestled within a glass container, creating a miniature garden that's easy to care for and endlessly captivating. Perfect for adding a touch of greenery to any space.",
      price: 27.99,
      src: Succulent
    },
    {
      title: "Petals of Passion Red Rose Bouquet",
      description: "Express your love and devotion with our \"Petals of Passion\" Red Rose Bouquet. Overflowing with lush red roses, this bouquet is the ultimate symbol of romance and desire. Whether it's Valentine's Day, an anniversary, or just because, it's the perfect way to say \"I love you.\"",
      price: 49.99,
      src: Rose
    }
  ,
    {
      title: "Blossom Haven Orchid Plant",
      description: "Elevate your space with the exquisite beauty of our \"Blossom Haven\" Orchid Plant. With its delicate petals and graceful stems, this orchid is a stunning addition to any home or office. Whether displayed as a centerpiece or given as a gift, it's su re to leave a lasting impression.",
      price: 34.99,
      src: Orchid
    },
  ]
  
const Collection = () => {
  return (
    <div className='flex flex-col items-center mt-24 font-belgian'>
      <h1 className='text-3xl'>
        Collections
      </h1>
      <button className='mt-3 mb-10'> VIEW ALL </button>
      <div className='flex flex-wrap justify-center gap-10'>
        <div className='flex flex-col items-center gap-4'>
            <Image
                src={Data[0].src}
                width={250}
            />
            <div className='text-center flex flex-col max-w-[200px] gap-2'>
                <p>
                    {Data[0].title}     
                </p>
                <p>
                    {Data[0].price}
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
            <Image
                src={Data[1].src}
                width={250}
            />
            <div className='text-center flex flex-col max-w-[200px] gap-2'>
                <p>
                    {Data[1].title}     
                </p>
                <p>
                    {Data[1].price}
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
            <Image
                src={Data[2].src}
                width={250}
            />
            <div className='text-center flex flex-col max-w-[200px] gap-2'>
                <p>
                    {Data[2].title}     
                </p>
                <p>
                    {Data[2].price}
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
            <Image
                src={Data[3].src}
                width={250}
            />
            <div className='text-center flex flex-col max-w-[200px] gap-2'>
                <p>
                    {Data[3].title}     
                </p>
                <p>
                    {Data[3].price}
                </p>
            </div>
        </div>
      </div>

      <div className='flex flex-col items-center mx-20 mt-16 lg:flex-row'>
        <Introduction
          title={Data[4].title}
          description={Data[4].description}
          price={Data[4].price}
          src={Data[4].src}
          classname={"flex flex-col items-center"}
        />
        <HoverImageOverlay 
        src="/Rose.png"/>
      </div>
      
      <div className='flex flex-col items-center mb-16 mx-20 lg:flex-row-reverse'>
        <Introduction
          title={Data[5].title}
          description={Data[5].description}
          price={Data[5].price}
          src={Data[5].src}
          classname={"flex flex-col items-center "}
        />
        <HoverImageOverlay 
        src="/Orchid.png"/> 
      </div>

    </div>
  )
}

export default Collection
