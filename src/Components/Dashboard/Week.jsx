import React from 'react'
import DayCard from './DayCard'

function Week() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-row justify-between'>
        <h2 className='text-2xl text-black font-bold'>
           Title {/*(nom de la semaine du module : exemple => Semaine 1 - Semaine d'introduction au code) */}
        </h2>
        <h2 className='text-2xl text-black font-bold'>
          Dates semaines
        </h2>
      </div>
      <div className='flex flex-row justify-around mt-5'>
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </div>
    </div>
  )
}

export default Week