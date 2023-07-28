import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import mapInfo from "../src/utiles/map"

const ContainerWrapper = styled.div`
  padding: 40px;
`

const WetherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  input {
    height: 30px;
    font-size: 20px;
  }
`
const LabelCom = ({ name, content, children }) => {
  return (
    <LabelWrapper>
      <h2>{name}：</h2>

      {content ? <h2>{content}</h2> : children}
    </LabelWrapper>
  )
}

function App() {
  const [inputValue, setInputValue] = useState()
  const wetherCityInfos = mapInfo
  const [currentCityData, setCurrentCityData] = useState(null)

  useEffect(() => {
    const currentCityInfo = wetherCityInfos.find(({ district }) =>
      district.includes(inputValue)
    )
    console.log(currentCityInfo)
    if (currentCityInfo && inputValue) {
      console.log(currentCityInfo, "currentCityInfo", inputValue)
      const { districtcode } = currentCityInfo
      const wetherServerQuerryUrl = `http://www.flyfrag.cn:3001/wether?districtCode=${districtcode}`
      axios
        .get(wetherServerQuerryUrl)
        .then((res) => {
          console.log(res, "resdata")
          setCurrentCityData(res.data.result)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      setCurrentCityData(null)
    }
  }, [inputValue, wetherCityInfos])
  return (
    <ContainerWrapper>
      <LabelCom name="请输入城市名字（如：成都，北京）">
        <input
          type="text"
          value={inputValue}
          onChange={({ target }) => {
            console.log(target.value)
            setInputValue(target.value)
          }}
        />
      </LabelCom>

      <WetherInfoWrapper>
        <LabelCom name="天气" content={currentCityData?.now?.text}></LabelCom>
        <LabelCom
          name="风向"
          content={currentCityData?.now?.wind_dir}
        ></LabelCom>
      </WetherInfoWrapper>
    </ContainerWrapper>
  )
}

export default App
