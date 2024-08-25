import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const logedIn = {firstName:"Walter", lastName: "White", email:"walterwhite@gmail.com"}

  return (
    <section className='home'>
      <div className='home-content'>
        <div className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            subtext='Access and manage your account and transactions'
            user='Guest'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={0}
            totalCurrentBalance={1200}
          />
        </div>
      </div>
      <RightSidebar
        user={logedIn}
        transactions={[]}
        banks={[{id:'1'},{id:'2'}]}
      />
    </section>
  )
}

export default Home