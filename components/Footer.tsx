import React from 'react'
import { footerList1, footerList2, footerList3 } from '../utils/constants'

function Footer() {

  const List = ({items, mt}: { items: string[], mt: boolean }) => (
    <div className={`flex flex-warp ${mt && 'mt-5'} gap-2  mt-5`}>
        {items.map((item) => (
          <p key={item} className='text-gray-400 text-sm hover:underline cursor-pointer'>
            {item}
          </p>
        ))}
    </div>
  )

  return (
    <div className='mt-6 hidden xl:block'>
      <List items={footerList1} mt={true}/>
      <List items={footerList2} mt/>
      <List items={footerList3} mt/>
      <p className='text-gray-400 text-sm mt-5'>2023 Eki Ramadhan</p>
    </div>
  )
}

export default Footer
