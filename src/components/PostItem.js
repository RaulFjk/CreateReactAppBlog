import React from "react"

const PostItem = ({ title, content, category, image, author }) => {
  return (
    <section>
      <div className="mb-4 md:mb-0 w-full mt-24 p-4 lg:p-0">
        <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
          {title}
        </h1>
        <div class="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <img src={author.avatar} alt="avatar" className="mx-2 my-5 w-8 h-8 object-cover rounded-full hidden sm:block"/>
            {/* <img
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
              alt="avatar"
              className="mx-2 my-5 w-8 h-8 object-cover rounded-full hidden sm:block"
            /> */}
            <span className="text-sm text-yellow-600">{author.firstName + ' ' + author.lastName}</span>
            <span className="mx-2">|</span>
            <span className="text-sm text-gray-400">April 23, 2021</span>
          </div>
        </div>
        <div className="mx-auto">
          <img src={image} className="min-w-full" alt="avatar" />
          {/* <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            className="w-full h-full object-contain"
          /> */}
        </div>
        <p className="mt-16 whitespace-pre-wrap">{content}</p>
      </div>
    </section>
  )
}

export default PostItem