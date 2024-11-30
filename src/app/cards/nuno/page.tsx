import Card from '@/components/Card'
import { MemberData } from '@/types'
import React from 'react'

const NunoPage = () => {
    const data: MemberData = {
        name: "Nuno 'ClarityCoucher' Lemos",
        id: '0001',
        memberSince: '23/10/2024',
        expiration: 'Neva',
        photo: 'https://images.chesscomfiles.com/uploads/v1/user/291881935.a4a9f0c5.161x161o.be49186e72ad.jpg',
    }
    return (
        <div className="mt-24">
            <Card data={data} />
            <div className="mt-12">
                <h2></h2>
            </div>
        </div>
    )
}

export default NunoPage
