import React from 'react'
import './home.css'

function CardModal(props) {
    return (
        <div className="flex gap-x-16 flex-wrap justify-center overflow-y-scroll">
            {props.listBook.map((el) => {
                return (
                    <div className=" flex items-center justify-center ">
                        <a href={el.volumeInfo.previewLink} target='_blank'>
                        <div className=" w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 duration-500  transform transition cursor-pointer flex flex-col justify-center items-center mb-10">
                            <img className="mt-8" src={el.volumeInfo.imageLinks.thumbnail} alt=""/>
                                <div className="p-5">
                                    <h1 className="text-base font-bold text-center">{el.volumeInfo.title}</h1>
                                    <p className="mt-2 text-md text-center font-semibold text-gray-600">by {el.volumeInfo.authors}</p>
                                    <p className="mt-1 text-gray-500 text-center">Page count : {el.volumeInfo.pageCount}</p>
                                    {/* <p className="mt-1 text-gray-500 font-"> <a href={el.volumeInfo.previewLink} target='_blank'>Read me</a> </p> */}
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