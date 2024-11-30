import Card from '@/components/Card'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <h2 className="mt-24 text-2xl md:text-4xl">List of active members ♟️</h2>
            <ul className="mt-12 text-lg flex flex-col gap-2">
                <li className="flex items-center gap-2">
                    <span className="">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="fill-white"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1 0C0.447715 0 0 0.447716 0 1V10C0 10.5523 0.447716 11 1 11H10C10.5523 11 11 10.5523 11 10V6.5C11 6.22386 10.7761 6 10.5 6C10.2239 6 10 6.22386 10 6.5V10H1V1L4.5 1C4.77614 1 5 0.776142 5 0.5C5 0.223858 4.77614 0 4.5 0H1ZM10.8536 0.146447C10.9015 0.194385 10.9377 0.249636 10.9621 0.308609C10.9861 0.366692 10.9996 0.430299 11 0.497001L11 0.5V0.50049V3.5C11 3.77614 10.7761 4 10.5 4C10.2239 4 10 3.77614 10 3.5V1.70711L4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645L9.29289 1H7.5C7.22386 1 7 0.776142 7 0.5C7 0.223858 7.22386 0 7.5 0H10.4999H10.5C10.5678 0 10.6324 0.0134926 10.6914 0.0379391C10.7504 0.062339 10.8056 0.0985082 10.8536 0.146447Z"
                            />
                        </svg>
                    </span>
                    <Link href="/cards/ana" className="underline underline-offset-2">
                        Ana &quot;LexaTheQueen&quot; Caldeira
                    </Link>
                </li>
                <li className="flex items-center gap-2">
                    <span className="">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="fill-white"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1 0C0.447715 0 0 0.447716 0 1V10C0 10.5523 0.447716 11 1 11H10C10.5523 11 11 10.5523 11 10V6.5C11 6.22386 10.7761 6 10.5 6C10.2239 6 10 6.22386 10 6.5V10H1V1L4.5 1C4.77614 1 5 0.776142 5 0.5C5 0.223858 4.77614 0 4.5 0H1ZM10.8536 0.146447C10.9015 0.194385 10.9377 0.249636 10.9621 0.308609C10.9861 0.366692 10.9996 0.430299 11 0.497001L11 0.5V0.50049V3.5C11 3.77614 10.7761 4 10.5 4C10.2239 4 10 3.77614 10 3.5V1.70711L4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355C3.95118 6.65829 3.95118 6.34171 4.14645 6.14645L9.29289 1H7.5C7.22386 1 7 0.776142 7 0.5C7 0.223858 7.22386 0 7.5 0H10.4999H10.5C10.5678 0 10.6324 0.0134926 10.6914 0.0379391C10.7504 0.062339 10.8056 0.0985082 10.8536 0.146447Z"
                            />
                        </svg>
                    </span>
                    <Link href="/cards/nuno" className="underline underline-offset-2">
                        Nuno &quot;ClarityCoucher&quot; Lemos
                    </Link>
                </li>
            </ul>
        </>
    )
}
