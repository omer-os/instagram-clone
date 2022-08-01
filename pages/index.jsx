import { Feeds, HomePosts, Layout, Stories } from "../components";

export default function Index({ user }) {
  return (
    <Layout>
      <div
        className="grid w-full max-w-[50em] mx-auto 
        sm:mt-2
      sm:grid-cols-[minmax(200px,1fr)_300px] 
      sm:gap-4
      grid-rows-[7.5em_1fr] 
      sm:p-3
      relative
      "
      >
        <Stories />
        <Feeds />

        <HomePosts />
      </div>
    </Layout>
  );
}
