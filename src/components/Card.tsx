import { MemberData } from '@/types'
import Image from 'next/image'
import React from 'react'

interface CardProps {
    data: MemberData
}

const Card = ({ data }: CardProps) => {
    return (
        <article className="max-w-full w-[35rem] md:aspect-[85/55] bg-slate-100 rounded-xl p-6 text-black">
            <div className="grid md:grid-cols-[30%,1fr] gap-8">
                <div>
                    <div className="w-full aspect-square">
                        <Image src={data.photo} alt={data.name} width={100} height={100} className="w-full h-full" />
                    </div>
                </div>
                <div>
                    <h2 className="text-slate-400">CCCCC - Clarity Couch Chess Club Card</h2>
                    <div className="mt-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <span className="leading-none text-xs text-slate-500">Id</span>
                                <p className="leading-none">{data.id}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="leading-none text-xs text-slate-500">Name</span>
                                <p className="leading-none">{data.name}</p>
                            </div>
                            <div className="flex gap-8">
                                <div className="flex flex-col gap-1">
                                    <span className="leading-none text-xs text-slate-500">Member since</span>
                                    <p className="leading-none">{data.memberSince}</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="leading-none text-xs text-slate-500">Expiration</span>
                                    <p className="leading-none">{data.expiration}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card
