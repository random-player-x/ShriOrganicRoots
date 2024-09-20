
import nutmegt from '../assets/products/nutmeg.png'

export default function ProductTile({id, name, price, category, rating, brandName}){
    return(
        <div className="relative group m-5 bg-gray-50">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={nutmegt} alt="" />
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-semibold text-gray-900 sm:text-sm md:text-base">
                            <a href= {`/productpage/${id}`} title="" className='hover:text-orange-400'>
                             {name}<br /> <div className='font-light'>{brandName}</div>
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                            <div className='flex '>
                                Rating: <div className='font-light ml-2'>{rating}</div>
                            </div>
                            <div className='rounded-2xl px-2 inline-block text-sm bg-yellow-400'>
                                {category}
                            </div>
                        </h3>
                        <div>
                        </div>
                    </div>

                    <div className="text-right">
                        <div>Price per Unit</div>
                        <p className="text-4xl font-bold text-gray-900 sm:text-sm md:text-2xl">${price}</p>
                    </div>
                </div>
            </div>
    )
}