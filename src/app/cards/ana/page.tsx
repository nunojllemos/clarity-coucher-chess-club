import Card from '@/components/Card'
import { MemberData } from '@/types'
import React from 'react'

const AnaPage = () => {
    const data: MemberData = {
        name: "Ana 'LexaTheQueen' Caldeira",
        id: '0001',
        memberSince: '23/10/2024',
        expiration: 'Neva',
        photo: 'https://images.chesscomfiles.com/uploads/v1/user/397687883.bdb5e53f.160x160o.7edc546b33c8.jpg',
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

export default AnaPage
