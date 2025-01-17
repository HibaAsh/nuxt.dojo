// we use server routes when dealing with something private like private key or authentication etc

export default defineEventHandler(async (event) => {

  // handle query params
  const { name } = getQuery(event)

  // handle post data
  const { age } = await readBody(event)

  // return {
  //   message: `Hello, ${name}! You are ${age} years old.`
  // }


  // api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=eJdPhICJUDBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2')

  return data  
})