import React from 'react'
import Image from 'next/image'
import Rose from '@/public/Rose.png'
import { useRouter } from 'next/navigation'
import { parse } from 'next/dist/build/swc'
 
const page = ({title, description, price, src, classname}) => {
    const router = useRouter();
    const [flower, setFlower] = useState(null);

    useEffect(() => {
        if (router.query.data) {
            const parsedFlower = JSON.parse(decodeURIComponent(router.query.data));
            setFlower(parsedFlower);
        }
    }, [router.query.data]);

    if (!flower) {
        return <div>Loading...</div>;
    }
  return (
    <div className={` flex w-[1150px] justify-center flex-row items-center p-10`}>
        <div className='flex flex-row justify-between   gap-4'>
            <Image src={flower.src} width={500}/>
            <div className='flex flex-col justify-between w-full p-10'>
                <div className='flex flex-col gap-6 max-w-[350px] lg:max-w-[500px]'>
                    <h2 className='text-3xl'>
                        {flower.title}
                    </h2>
                    <p>
                        {flower.description}
                    </p>
                </div>
                <div className='flex flex-row gap-10 items-center '>
                    <button className='bg-black text-white p-3'>
                        ADD TO CART
                    </button>
                    {flower.price}
                </div>
            </div>
            
        </div>
    </div>

  )
}

export default page
