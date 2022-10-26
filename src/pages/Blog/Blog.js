const Blog = () => {
  return (
    <section className='container mx-auto'>
      <div className='max-w-4xl mx-auto pt-24 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='bg-indigo-100 p-4 md:p-8 mb-6'>
          <h3 className='text-xl font-semibold mb-2'>What is Cors?</h3>
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any
            origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
          </p>
        </div>
        <div className='bg-indigo-100 p-4 md:p-8 mb-6'>
          <h3 className='text-xl font-semibold mb-2'>
            Why are you using firebase? What other options do you have to implement authentication?
          </h3>
          <p className='mb-1'>
            Currently we using firebase for Authentication. Firebase Authentication provides backend services,
            easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication
            using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and
            more.
          </p>
          <p>
            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase
            Authentication.
          </p>
        </div>

        <div className='bg-indigo-100 p-4 md:p-8 mb-6'>
          <h3 className='text-xl font-semibold mb-2'>How does the private route work?</h3>
          <p>
            The private route component is similar to the public route, the only change is that redirect URL and
            authenticate condition. If the user is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated (Logged in).
          </p>
        </div>
        <div className='bg-indigo-100 p-4 md:p-8 mb-6'>
          <h3 className='text-xl font-semibold mb-2'>What is Node? How does Node work?</h3>
          <p className='mb-1'>
            Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web
            applications outside the client's browser.
          </p>
          <p>
            Node is completely event-driven. Basically the server consists of one thread processing one event after
            another. A new request coming in is one kind of event. The server starts processing it and when there is a
            blocking IO operation, it does not wait until it completes and instead registers a callback function.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Blog;
