export default function ThankToast({
  openToast = false,
  setOpenToast,
  isSuccess = true,
}) {
  return (
    <>
      <div
        id='staticModal'
        data-modal-backdrop='static'
        tabIndex='-1'
        aria-hidden='true'
        className={
          'fixed top-0 right-0 z-[300] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full transition bg-black/40 ' +
          (openToast ? '!left-0 opacity-100' : '!-left-[9999px] opacity-0')
        }
      >
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl md:h-auto'>
          {/* Modal content */}
          <div className='relative bg-white rounded-lg shadow'>
            {/* Modal header */}
            <div className='flex items-start justify-between p-4 border-b rounded-t'>
              <div></div>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                data-modal-hide='staticModal'
                onClick={() => setOpenToast(false)}
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <div className='px-6 max-h-[80vh] min-h-[200px] overflow-hidden flex justify-center items-center flex-col'>
              <h1 className='text-black uppercase text-3xl font-medium text-center py-2'>
                THANK YOU SO MUCH
              </h1>
              <div className='text-black font-medium text-xl text-center py-2'>
                HandiPassion will respond to you soon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
