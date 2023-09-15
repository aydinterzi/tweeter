import ExploreFilter from '@/components/explore-filter'
import ExploreSearch from '@/components/explore-search'
import Tweet from '@/components/tweet'
import React from 'react'

function ExplorePage() {
  return (
    <div className="flex gap-6 px-44 pt-6">
      <div className="basis-1/4">
      
      <ExploreFilter/>
      </div>
      <div className="basis-3/4 flex flex-col gap-14">
      <ExploreSearch/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
      </div>
    
    </div>
  )
}

export default ExplorePage