import React from 'react'

const trends = [
    {
        title: 'programming',
        tweetCount: 21300,
    },
    {
        title: 'devchallenges',
        tweetCount: 21300,
    },
    {
        title: 'frontend',
        tweetCount: 21300,
    },
    {
        title: 'helsinki',
        tweetCount: 21300,
    },
    {
        title: '100DaysOfCode',
        tweetCount: 21300,
    },
    {
        title: 'learntocode',
        tweetCount: 21300,
    }
]



function TrendsForYou() {
  return (
    <div className='px-5 py-3 shadow-md rounded-lg bg-white'><h3>Trends for you</h3>
    <hr />
    {trends.map((trend, index) => (
        <div key={index} className='flex flex-col gap-1'>
            <span className='font-semibold text-base text-gray-1'>#{trend.title}</span>
            <span className='text-gray-3'>{trend.tweetCount} Tweets</span>
        </div>
    ))}
    </div>
  )
}

export default TrendsForYou