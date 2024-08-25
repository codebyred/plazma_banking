import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnoutChart from './DoughnoutChart'

const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnoutChart accounts={[]}/>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>{2} Bank accounts</h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>Total Current Balance</p>
                <p className='total-balance-amount'>
                    <AnimatedCounter
                        amount={totalCurrentBalance}
                    />
                </p>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox