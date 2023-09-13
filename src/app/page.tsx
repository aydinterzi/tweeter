import TrendsForYou from "@/components/trends-for-you";
import Tweet from "@/components/tweet";
import TweetSomething from "@/components/tweet-something";

export default function Home() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-14 basis-3/4">
        <TweetSomething/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
      </div>
      <div className="basis-1/4">
        <TrendsForYou/>
      </div>
    
    </div>
  )
}
