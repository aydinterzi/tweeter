import Tweet from '@/components/tweet'
import TweetFilter from '@/components/tweet-filter'
import React from 'react'

function BookmarksPage() {
  return (
    <div className="flex gap-6 px-44 pt-6">
      <div className="basis-1/4">
      
      <TweetFilter/>
      </div>
      <div className="basis-3/4 flex flex-col gap-14">
      
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
      </div>
    
    </div>
  )
}

export default BookmarksPage