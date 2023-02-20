import axios from 'axios'

// interface IProps {
//   videos: 
// }

export default function Home({videos}: {videos: string[]}) {
  console.log(videos)
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export const getServerSideProps = async ( ) => {
  const {data} = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data
    }
  }
}