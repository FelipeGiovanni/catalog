import type { NextPage } from "next"
import { SearchPage } from "../components/organisms"

const Home: NextPage = () => {
  return (
    <>
      <SearchPage />
    </>
  )
}

export default Home

//export const getServerSideProps: GetServerSideProps = async (context) => {
//  const teste = await GetLogById()
//  console.log(teste)
//  return {
//    props: {},
//  }
//}
