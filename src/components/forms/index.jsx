import { useQRCode } from '../../context/qrcode.context'
import FormEmail from './FormEmail'
import FormSms from './FormSms'
import FormText from './FormText'
import FormWsp from './FormWsp'

export default function Form({ currentTab }) {
  const { data, setData } = useQRCode()

  if (currentTab === 'email') return <FormEmail setData={setData} data={data} />
  if (currentTab === 'sms') return <FormSms setData={setData} />
  if (currentTab === 'wsp') return <FormWsp setData={setData} />
  return <FormText setData={setData} />
}
