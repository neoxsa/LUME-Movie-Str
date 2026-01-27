import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full max-w-2xl'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Get In <span className='text-red-500'>Touch</span>
          </h1>
          <p className='text-gray-400 text-lg'>
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='text-white font-medium text-sm uppercase tracking-wide'>
                  Full Name
                </label>
                <input
                  name='name'
                  value={formData.name} 
                  onChange={handleChange}
                  className='w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors'
                  type='text'
                  placeholder='John Doe'
                  required
                />
              </div>

              <div className='space-y-2'>
                <label className='text-white font-medium text-sm uppercase tracking-wide'>
                  Email Address
                </label>
                <input
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors'
                  type='email'
                  placeholder='john@example.com'
                  required
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label className='text-white font-medium text-sm uppercase tracking-wide'>
                Message
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className='w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors resize-none'
                placeholder='Tell us about your project or question...'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full cursor-pointer bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-red-500/25'
            >
              Send Message
            </button>
          </form>

          <div className= 'mt-8 pt-8 border-t border-gray-700/50 text-center'>
            <p className='text-gray-400 text-sm'>
              Or reach us directly at{' '}
              <a href='mailto:hello@movieplatform.com' className='text-red-400 hover:text-red-300 transition-colors'>
                hello@lume.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
