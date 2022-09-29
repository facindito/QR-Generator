export default function CardQR({ qrCode }) {
  return (
    <section className='flex flex-col gap-4 rounded-md bg-white p-4'>
      <div className='w-64'>
        <img src={qrCode} alt='' className='object-contain' />
      </div>
      <a
        href={qrCode}
        download={'QR-Code'}
        className='mr-auto rounded-md border-2 border-transparent bg-blue-600 px-4 py-2 font-semibold text-white transition ease-linear hover:border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600'
      >
        Download
      </a>
    </section>
  )
}
