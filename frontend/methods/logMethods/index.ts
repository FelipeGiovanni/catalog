import axios from "axios"
import FormData from "form-data"

export const GetLogById = async (idLog: string) => {
  const log = await axios.get(`http://localhost:4000/api/getLogById/${idLog}`)
  return log.data.data[0]
}

export const GetLogByContent = async (content: string) => {
  let data = JSON.stringify({
    content: content,
  })

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/api/getLogByContent",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  const response = axios
    .request(config)
    .then((response) => {
      return response.data.data
    })
    .catch((error) => {
      console.log(error)
    })
  return response
}

export const GetLogByDate = async (initialDate: Date, finalDate: Date) => {
  let data = JSON.stringify({
    initialDate: initialDate,
    finalDate: finalDate,
  })

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/api/getLogByDate",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  const response = axios
    .request(config)
    .then((response) => {
      return response.data.data
    })
    .catch((error) => {
      console.log(error)
    })
  return response
}

export const UploadLog = async (file: any) => {
  const formData = new FormData()
  formData.append("log", file)

  try {
    const response = await axios.post(
      "http://localhost:4000/api/sendfile",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )

    return response
  } catch (error) {
    console.error("Error:", error)
  }
}
