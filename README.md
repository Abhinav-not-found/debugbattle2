# bugs i found
## started with backend
- multer was not installed
- cloudinary credentials were not available
- dotenv was not available in db.js so it gave URI parameter...
- used JWT_ACCESS_SECRET instead of JWT_SECRET in authMiddleware
- the cors error was not going so i switched to port 5001
- updated the errorMiddleware to print the errors

## frontend bugs
- login function and register function inside AuthContext.jsx were setting token instead of accessToken
- changed setToast to use prev instead of using .push() to add toast dashboard.jsx
- changed setLoading to false in fetchData in dashboard.jsx
- handleProductSubmit changed to endpoint to /products from /product, similarly for /orders
- added json.stringfy() in formdata.append for variants
- async await in handleLogout
- user && user.profile doesn not exist so it wont run line 177 inside useEffect, so changed it to only if(user)
- line447: !user will return null, so changed it to loading? loading...
