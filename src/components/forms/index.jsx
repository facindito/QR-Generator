import FormEmail from './formEmail'
import FormSms from './FormSms'
import FormText from './formText'

export default function Form({ currentTab, setUrl, url }) {
  if (currentTab === 'email') return <FormEmail setUrl={setUrl} url={url} />
  if (currentTab === 'sms') return <FormSms />
  if (currentTab === 'url') return <FormUrl />
  return <FormText setUrl={setUrl} url={url} />
}
