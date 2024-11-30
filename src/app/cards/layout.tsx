import Link from 'next/link'
import React from 'react'

interface CardLayout {
    children: React.ReactNode
}

const layout = ({ children }: CardLayout) => {
    return (
        <div className="mt-24">
            <div className="flex gap-2 items-center">
                <svg
                    className="rotate-180"
                    width="5"
                    height="9"
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="fill-slate-100"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.15852 0.135046C0.359976 -0.0538184 0.676394 -0.0436112 0.865259 0.157845L4.61526 4.15785C4.79557 4.35017 4.79557 4.64946 4.61526 4.84179L0.865258 8.84179C0.676393 9.04324 0.359975 9.05345 0.158519 8.86458C-0.0429368 8.67572 -0.0531438 8.3593 0.135721 8.15784L3.56512 4.49982L0.135722 0.841786C-0.053143 0.64033 -0.0429359 0.323912 0.15852 0.135046Z"
                    />
                </svg>

                <Link href="/">Back</Link>
            </div>
            <div className="mt-12">{children}</div>
        </div>
    )
}

export default layout
