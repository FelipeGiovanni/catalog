import type { GetServerSideProps, NextPage } from "next"
import { GetLogById } from "../../methods"
import { Button } from "../../components/atoms"
import { ViewPage } from "../../components/organisms"

const View: NextPage = ({ ...props }: any) => {
  const logContent = props.logContent
  return (
    <>
      <ViewPage logContent={logContent} />
    </>
  )
}

export default View

export const getServerSideProps: GetServerSideProps = async (context) => {
  const logId: any = context?.params?.id
  const logContent = await GetLogById(logId)
  return {
    props: {
      logContent,
    },
  }
}
