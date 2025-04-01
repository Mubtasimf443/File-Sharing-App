/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/

import React from 'react'
interface IProps {
    Icon: any,
    title: string;
    value: string;
    bg?: string
}
const IconBox: React.FC<IProps> = (props) => {
    let bg = props.bg || "bg-blue-700";
    return (
        <>
            <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                    <div className="flex items-center">
                        <div className={"flex-shrink-0 rounded-md p-3 " + bg
                    }>
                            {props.Icon}
                        </div>
                        <div className="ml-5 w-0 flex-1">
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 truncate">{props.title}</dt>
                                <dd className="flex items-baseline">
                                    <div className="text-2xl font-semibold text-gray-900">{props.value}</div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IconBox
