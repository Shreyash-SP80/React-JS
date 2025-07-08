import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Shreyash-SP80')
    //     .then((response) => 
    //         response.json()
    //     )
    //     .then((data1) => {
    //         console.log(data1)
    //         setData(data1)
    //     })
    // }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        GitHub Followers: {data.followers}
        <div className='flex p-4'>
            <img src={data.avatar_url} alt="Git Picture" width={250} />
            <div>
                <h1>Bio:</h1>
                <h5 className='m-4'>{data.bio}</h5>
            </div>
        </div>
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const responce = await fetch('https://api.github.com/users/Shreyash-SP80')
    return responce.json()
}
