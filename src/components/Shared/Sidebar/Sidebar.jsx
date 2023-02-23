import { useRef, useState } from 'react';
import { sendMail } from '../../../services/email';
import { capitalize } from '../../../utils/formatString';
import { informationValidator } from '../../../utils/validation';
import Toast from '../Toasts/Toast';
import SuggestLink from '../Suggests/SuggestLink';
import { info } from '../../../assets/data/info';

export default function Sidebar({ products, services, data }) {
  const [messages, setMessages] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastStatus, setToastStatus] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const companyRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const questionRef = useRef();
  const industryRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      firstName: capitalize(firstNameRef.current.value),
      lastName: capitalize(lastNameRef.current.value),
      company: capitalize(companyRef.current.value),
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      question: questionRef.current.value,
      industry: industryRef.current.value,
    };

    const validator = informationValidator(data);

    const arr = [];
    setMessages(arr);
    if (validator.error) {
      validator.error.details.forEach((item) =>
        arr.push({ key: item.context.key, message: item.message })
      );

      setMessages(arr);
    } else {
      // toggleToast(true);
      sendMail(data)
        .then((res) => {
          if (res.status === 200) {
            setIsLoading(false);
            setToastStatus(true);
            handleShowToast();
          }
        })
        .catch((err) => {
          setIsLoading(false);
          setToastStatus(false);
          handleShowToast();
        });
    }
  };

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  return (
    <>
      <Toast
        showToast={showToast}
        setShowToast={setShowToast}
        toastStatus={toastStatus}
      />
      <div className='lg:pl-4 lg:w-1/3 w-full border-t pt-4 lg:border-t-0 lg:pt-0 mb-8'>
        <div className='text-center text-slate-500'>
          Need help or have a question?
        </div>
        <div className='pt-4 pb-6 border-b-2 border-emerald-600'>
          <a
            href={'tel:' + info.phone}
            className='py-4 px-6 bg-emerald-500 inline-flex items-center gap-2 justify-center w-full text-lg font-semibold text-slate-50 hover:bg-emerald-600/80 hover:text-white transition  mb-4'
          >
            <i className='fa-solid fa-circle-phone text-3xl'></i> {info.phone}
          </a>
          <a
            href={'mailto:' + info.email}
            className='py-4 px-6 bg-yellow-400 inline-flex items-center gap-2 justify-center w-full text-lg font-semibold text-slate-50 hover:bg-yellow-500 hover:text-white transition '
          >
            <i className='fa-solid fa-circle-envelope text-3xl'></i>{' '}
            {info.email}
          </a>
        </div>

        <div className='pt-6'>
          <h2 className='text-2xl font-semibold'>Need More Information?</h2>
          <span className='pt-2 inline-block'>
            We'll respond within about 12 hours.
          </span>
          <form className='p-2 bg-slate-100  my-4'>
            <input
              ref={firstNameRef}
              type='text'
              placeholder='First Name (*)'
              name='first_name'
              className='border-0 px-3 py-3 mt-4 placeholder-slate-400 text-slate-700 bg-white  text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            />
            <small className='text-red-500 font-medium'>
              {messages.map((message) =>
                message.key === 'firstName' ? message.message : null
              )}
            </small>
            <input
              ref={lastNameRef}
              type='text'
              placeholder='Last Name (*)'
              name='last_name'
              className='border-0 px-3 py-3 mt-4 placeholder-slate-400 text-slate-700 bg-white  text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            />
            <small className='text-red-500 font-medium'>
              {messages.map((message) =>
                message.key === 'lastName' ? message.message : null
              )}
            </small>
            <input
              ref={companyRef}
              type='text'
              placeholder='Company'
              name='company'
              className='border-0 px-3 py-3 mt-4 placeholder-slate-400 text-slate-700 bg-white  text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            />
            <small className='text-red-500 font-medium'>
              {messages.map((message) =>
                message.key === 'company' ? message.message : null
              )}
            </small>
            <input
              ref={emailRef}
              type='email'
              placeholder='Email (*)'
              name='email'
              className='border-0 px-3 py-3 mt-4 placeholder-slate-400 text-slate-700 bg-white  text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            />
            <small className='text-red-500 font-medium'>
              {messages.map((message) =>
                message.key === 'email' ? message.message : null
              )}
            </small>
            <input
              ref={phoneRef}
              type='text'
              placeholder='Telephone (*)'
              name='telephone'
              className='border-0 px-3 py-3 mt-4 placeholder-slate-400 text-slate-700 bg-white  text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            />
            <small className='text-red-500 font-medium'>
              {messages.map((message) =>
                message.key === 'phone' ? message.message : null
              )}
            </small>
            <textarea
              ref={questionRef}
              placeholder='Enter your question in English here'
              name='question'
              className='border-0 px-3 py-3 mt-4 placeholder-slate-400 text-slate-700 bg-white  text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
            ></textarea>
            <small className='text-red-500 font-medium'>
              {messages.map((message) =>
                message.key === 'question' ? message.message : null
              )}
            </small>

            <div className='font-semibold mb-2'>
              What Industry are you primarily interested in?
            </div>
            <select
              ref={industryRef}
              className='border-0 px-3 py-3 mt-4 placeholder-slate-400 text-slate-600 bg-white  text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150 font-medium'
              defaultValue={''}
            >
              <option value=''>Select an Industry</option>
              {products &&
                products.map((product) => (
                  <option key={product._id} value={product.name}>
                    {product.name}
                  </option>
                ))}
            </select>
            <small className='text-red-500 font-medium'>
              {messages.map((message) =>
                message.key === 'industry' ? message.message : null
              )}
            </small>

            {!isLoading ? (
              <button
                type='submit'
                className={
                  'text-slate-50 py-2 px-6 mt-4 w-full font-semibold text-lg  hover:text-white transition bg-emerald-500 hover:bg-emerald-600/80'
                }
                onClick={handleSubmit}
              >
                Contact Us
              </button>
            ) : (
              <button
                data-modal-hide='staticModal'
                type='button'
                className='text-slate-50 py-2 px-6 mt-4 w-full font-semibold text-lg  hover:text-white transition bg-emerald-500 hover:bg-emerald-600/80 flex items-center justify-center'
              >
                <svg
                  className='animate-spin h-5 w-5 text-white mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg> Sending...
              </button>
            )}
          </form>
        </div>
        <div className='hidden lg:block'>
          <SuggestLink data={services || products} single={data} />
        </div>
      </div>
    </>
  );
}
