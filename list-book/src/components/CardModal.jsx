import React from 'react'

function CardModal(props) {
    return (
        <div class="flex gap-x-16 flex-wrap justify-center overflow-auto">
            {props.listBook.map((el) => {
                return (
                    <div class=" flex items-center justify-center ">
                        <a href={el.volumeInfo.previewLink} target='_blank'>
                        <div class=" w-80 bg-white rounded-xl overflow shadow-lg hover:shadow-xl hover:scale-105 duration-500  transform transition cursor-pointer flex flex-col justify-center items-center">
                            <img class="w-40 h-56 mt-10" src={el.volumeInfo.imageLinks.thumbnail} alt=""/>
                                <div class="p-5">
                                    <h1 class="text-lg font-bold">{el.volumeInfo.title}</h1>
                                    <p class="mt-2 text-md font-semibold text-gray-600">by {el.volumeInfo.authors}</p>
                                    <p class="mt-1 text-gray-500 font-">Page count : {el.volumeInfo.pageCount}</p>
                                    {/* <p class="mt-1 text-gray-500 font-"> <a href={el.volumeInfo.previewLink} target='_blank'>Read me</a> </p> */}
                                </div>
                        </div>
                        </a>
                    </div>
                )
            } )}
        </div>
        
    )
}

export default CardModal
